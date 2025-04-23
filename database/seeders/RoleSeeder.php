<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

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
		app()[PermissionRegistrar::class]->forgetCachedPermissions();

		Role::updateOrCreate(['name' => 'Super Admin']);
		Role::updateOrCreate(['name' => 'Admin']);
		Role::updateOrCreate(['name' => 'User']);
	}
}
