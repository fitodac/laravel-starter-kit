<?php

namespace Fitodac\Pages\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PagesSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 */
	public function run(): void
	{
		$pages_permissions = [
			'view_page',
			'view_any_page',
			'create_page',
			'update_page',
			'delete_page',
			'delete_any_page',
		];

		foreach ($pages_permissions as $permission) {
			Permission::firstOrCreate(['name' => $permission]);
		}

		// Assign permissions to Admin role
		$roleAdmin = Role::firstOrCreate(['name' => 'Admin']);
		$roleAdmin->givePermissionTo($pages_permissions);
	}
}
