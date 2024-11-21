<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\NotificationTemplate;

class NotificationTemplateSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		$user_shortcodes = [
			'[id]',
			'[name]',
			'[lastname]',
			'[username]',
			'[email]',
			'[password]',
			'[phone]',
			'[birth_date]',
			'[address]',
			'[city]',
			'[country]',
			'[zip]',
			'[job_title]',
			'[company]',
			'[bio]',
			'[profile_picture]',
			'[status]'
		];

		$role_shortcodes = [
			'[id]',
			'[name]',
		];

		$permission_shortcodes = [
			'[id]',
			'[name]',
		];

		// User created
		NotificationTemplate::create([
			'title' => 'User created',
			'content' => '<p>A new user has been created.</p>',
			'type' => 'App\Notifications\UserCreated',
			'shortcodes' => $user_shortcodes
		]);

		// User updated
		NotificationTemplate::create([
			'title' => 'User updated',
			'content' => '<p>User updated successfully</p>',
			'type' => 'App\Notifications\UserUpdated',
			'shortcodes' => $user_shortcodes
		]);

		// User deleted
		NotificationTemplate::create([
			'title' => 'User deleted',
			'content' => '<p>User deleted successfully</p>',
			'type' => 'App\Notifications\UserDeleted',
			'shortcodes' => $user_shortcodes
		]);

		// Role created
		NotificationTemplate::create([
			'title' => 'Role created',
			'content' => '<p>A new role has been created.</p>',
			'type' => 'App\Notifications\RoleCreated',
			'shortcodes' => $role_shortcodes
		]);

		// Role updated
		NotificationTemplate::create([
			'title' => 'Role updated',
			'content' => '<p>The role <strong>[role.name]</strong> has been updated.</p>',
			'type' => 'App\Notifications\RoleUpdated',
			'shortcodes' => $role_shortcodes
		]);

		// Role deleted
		NotificationTemplate::create([
			'title' => 'Role updated',
			'content' => '<p>The role <strong>[role.deleted]</strong> has been deleted.</p>',
			'type' => 'App\Notifications\RoleDelted',
			'shortcodes' => $role_shortcodes
		]);

		// Permission created
		NotificationTemplate::create([
			'title' => 'Permission created',
			'content' => '<p>A new permission has been created.</p>',
			'type' => 'App\Notifications\PermissionCreated',
			'shortcodes' => $permission_shortcodes
		]);

		// Permission updated
		NotificationTemplate::create([
			'title' => 'Permission updated',
			'content' => '<p>The permission <strong>[permission.name]</strong> has been deleted.</p>',
			'type' => 'App\Notifications\PermissionUpdated',
			'shortcodes' => $permission_shortcodes
		]);

		// Permission deleted
		NotificationTemplate::create([
			'title' => 'Permission updated',
			'content' => '<p>The permission <strong>[permission.name]</strong> has been deleted.</p>',
			'type' => 'App\Notifications\PermissionDeleted',
			'shortcodes' => $permission_shortcodes
		]);
	}
}
