<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;

uses(RefreshDatabase::class);

beforeEach(function () {
	// Create a user
	Role::create(['name' => 'User']);
	$this->user = User::factory()->unverified()->create();
	// $this->user->assignRole('User');
	// AccountFactory::new()->create(['user_id' => $this->user->id]);
});

/**
 * Test that the login screen can be rendered.
 *
 * This test sends a GET request to the login route and asserts
 * that the response status is 200, indicating that the login
 * page is successfully accessible.
 */
test('login screen can be rendered', function () {
	$response = $this->get(route('filament.admin.auth.login'));

	$response->assertStatus(200)
		->assertSee('Login')
		->assertSee('Email')
		->assertSee('Password');
});

/**
 * Test that a user can logout.
 *
 * This test sends a POST request to the logout route, and asserts that
 * the user is no longer authenticated and that the response redirects
 * to the homepage.
 */
test('users can logout', function () {
	$response = $this->actingAs($this->user)->post(route('signout'));

	expect(Auth::check())->toBeFalse();
	$response->assertRedirect('/');
});
