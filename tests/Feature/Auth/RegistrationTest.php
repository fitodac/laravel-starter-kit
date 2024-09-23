<?php

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RegistrationTest extends TestCase
{
	use RefreshDatabase;

	protected function setUp(): void
	{
		parent::setUp();

		// Create roles and permissions
		$userRole = Role::create(['name' => 'User']);
		$privateAccess = Permission::create(['name' => 'Private Access']);
		$userRole->givePermissionTo($privateAccess);
	}

	public function test_registration_screen_can_be_rendered(): void
	{
		$response = $this->get('/register');

		$response->assertStatus(200);
	}

	public function test_new_users_can_register(): void
	{
		$response = $this->post('/register', [
			'username' => 'testuser',
			'email' => 'test@example.com',
			'password' => 'password',
			'password_confirmation' => 'password',
		]);

		$this->assertAuthenticated();
		$response->assertRedirect(route('dashboard', absolute: false));
	}
}
