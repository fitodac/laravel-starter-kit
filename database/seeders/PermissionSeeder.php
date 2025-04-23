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
		 * User permissions
		 */
		$view_user = Permission::create(['name' => 'view_user']);
		$view_any_user = Permission::create(['name' => 'view_any_user']);
		$create_user = Permission::create(['name' => 'create_user']);
		$update_user = Permission::create(['name' => 'update_user']);
		$delete_user = Permission::create(['name' => 'delete_user']);
		$delete_any_user = Permission::create(['name' => 'delete_any_user']);

		$view_role = Permission::create(['name' => 'view_role']);
		$view_any_role = Permission::create(['name' => 'view_any_role']);
		$create_role = Permission::create(['name' => 'create_role']);
		$update_role = Permission::create(['name' => 'update_role']);
		$delete_role = Permission::create(['name' => 'delete_role']);
		$delete_any_role = Permission::create(['name' => 'delete_any_role']);

		$can_impersonate = Permission::create(['name' => 'can_impersonate']);

		$receive_new_user_notifications = Permission::create(['name' => 'receive_new_user_notifications']);

		$roleAdmin->givePermissionTo([
			$view_user,
			$view_any_user,
			$create_user,
			$update_user,
			$delete_user,
			$delete_any_user
		]);

		$roleSuperAdmin->givePermissionTo([
			$receive_new_user_notifications
		]);
	}
}
