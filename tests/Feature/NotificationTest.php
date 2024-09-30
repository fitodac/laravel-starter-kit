<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class NotificationTest extends TestCase
{
	use RefreshDatabase;

	protected $user;

	protected function setUp(): void
	{
		parent::setUp();

		// Create a user with roles and permissions
		$this->user = User::factory()->create();
		$userRole = Role::create(['name' => 'Admin']);
		$privateAccess = Permission::create(['name' => 'Private Access']);
		$userRole->givePermissionTo($privateAccess);
		$this->user->assignRole('Admin');
	}

	public function test_notification_list_can_be_redered()
	{
		$response = $this
			->actingAs($this->user)
			->get(route('dashboard.notifications.list'));

		$response->assertOk();
	}

	public function test_notification_for_all_users_can_be_created()
	{
		$response = $this
			->actingAs($this->user)
			->post(route('dashboard.notifications.store'), [
				'title' => 'Test Notification',
				'body' => 'This is a test notification',
				'notification_for_all' => true
			]);

		$response->assertRedirect(route('dashboard.notifications.list'));
	}
}
