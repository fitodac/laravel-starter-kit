<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;



class RoleSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{

		/**
		 * Reset permissions
		 */
		app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();


		$superAdmin = Role::create(['name' => 'superadmin']);
		$admin = Role::create(['name' => 'admin']);
		$user = Role::create(['name' => 'user']);

		// Create permission
		$superAdminAccess = Permission::create(['name' => 'super_admin_access']);
		$adminAcces = Permission::create(['name' => 'admin_access']);
		$privateAccess = Permission::create(['name' => 'private_access']);

		// Assign permissions to roles
		$superAdmin->givePermissionTo($superAdminAccess, $adminAcces);
		$admin->givePermissionTo($adminAcces);
		$user->givePermissionTo($privateAccess);
	}
}
