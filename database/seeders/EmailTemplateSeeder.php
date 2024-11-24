<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\EmailTemplate;

class EmailTemplateSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		// User created
		EmailTemplate::create([
			'name' => 'User created',
			'subject' => 'User created',
			'body' => '<p>Foo bar</p>',
			'view' => 'mail.user',
			'type' => 'App\Notifications\UserCreated'
		]);

		// User updated
		EmailTemplate::create([
			'name' => 'User updated',
			'subject' => 'User updated',
			'body' => '<p>Foo bar</p>',
			'view' => 'mail.user',
			'type' => 'App\Notifications\UserUpdated'
		]);

		// User deleted
		EmailTemplate::create([
			'name' => 'User deleted',
			'subject' => 'User deleted',
			'body' => '<p>Foo bar</p>',
			'view' => 'mail.user',
			'type' => 'App\Notifications\UserDeleted'
		]);

		// Role created
		EmailTemplate::create([
			'name' => 'Role created',
			'subject' => 'Role created',
			'body' => '<p>Foo bar</p>',
			'view' => 'mail.role',
			'type' => 'App\Notifications\RoleCreated'
		]);

		// Role updated
		EmailTemplate::create([
			'name' => 'Role updated',
			'subject' => 'Role updated',
			'body' => '<p>Foo bar</p>',
			'view' => 'mail.role',
			'type' => 'App\Notifications\RoleUpdated'
		]);

		// Role deleted
		EmailTemplate::create([
			'name' => 'Role deleted',
			'subject' => 'Role deleted',
			'body' => '<p>Foo bar</p>',
			'view' => 'mail.role',
			'type' => 'App\Notifications\RoleDelted'
		]);

		// Permission created
		EmailTemplate::create([
			'name' => 'Permission created',
			'subject' => 'Permission created',
			'body' => '<p>Foo bar</p>',
			'view' => 'mail.permission',
			'type' => 'App\Notifications\PermissionCreated'
		]);

		// Permission updated
		EmailTemplate::create([
			'name' => 'Permission updated',
			'subject' => 'Permission updated',
			'body' => '<p>Foo bar</p>',
			'view' => 'mail.permission',
			'type' => 'App\Notifications\PermissionUpdated'
		]);

		// Permission deleted
		EmailTemplate::create([
			'name' => 'Permission deleted',
			'subject' => 'Permission deleted',
			'body' => '<p>Foo bar</p>',
			'view' => 'mail.permission',
			'type' => 'App\Notifications\PermissionDeleted'
		]);
	}
}
