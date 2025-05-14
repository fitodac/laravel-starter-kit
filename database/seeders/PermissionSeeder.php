<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		$roleAdmin = Role::findByName('Admin');
		$roleSuperAdmin = Role::findByName('Super Admin');

		/**
		 * Permissions for users administration
		 */
		$users_permissions = [
			'view_user',
			'view_any_user',
			'create_user',
			'update_user',
			'delete_user',
			'delete_any_user',
		];

		foreach ($users_permissions as $permission) {
			Permission::firstOrCreate(['name' => $permission]);
		}

		$roles_permissions = [
			'view_any_role',
			'view_role',
			'create_role',
			'update_role',
			'delete_role',
			'delete_any_role',
			'{{ ForceDelete }}',
			'{{ ForceDeleteAny }}',
			'{{ Restore }}',
			'{{ RestoreAny }}',
			'{{ Replicate }}',
			'{{ Reorder }}'
		];

		foreach ($roles_permissions as $permission) {
			Permission::firstOrCreate(['name' => $permission]);
		}


		// $view_role = Permission::create(['name' => 'view_role']);
		// $view_any_role = Permission::create(['name' => 'view_any_role']);
		// $create_role = Permission::create(['name' => 'create_role']);
		// $update_role = Permission::create(['name' => 'update_role']);
		// $delete_role = Permission::create(['name' => 'delete_role']);
		// $delete_any_role = Permission::create(['name' => 'delete_any_role']);

		$can_impersonate = Permission::create(['name' => 'can_impersonate']);

		$receive_new_user_notifications = Permission::create(['name' => 'receive_new_user_notifications']);

		// Assign permissions to Admin role
		$roleAdmin = Role::firstOrCreate(['name' => 'Admin']);
		$roleAdmin->givePermissionTo($users_permissions);

		// Assign permissions to Super Admin role
		$roleSuperAdmin->givePermissionTo([
			$receive_new_user_notifications
		]);
	}
}
