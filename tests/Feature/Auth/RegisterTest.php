<?php

use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

/**
 * Test if the registration screen can be rendered properly.
 * 
 * This test verifies that:
 * - The registration page loads successfully (200 status)
 * - The page contains the expected elements (Register, Email, Password)
 */
test('registration screen can be rendered', function () {
	$this->get(route('filament.admin.auth.register'))
		->assertStatus(200)
		->assertSee('Register')
		->assertSee('Email')
		->assertSee('Password');
});
