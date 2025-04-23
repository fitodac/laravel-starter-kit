<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\PermissionSeeder;
use Database\Seeders\Demo\AdminSeeder;
use Database\Seeders\Demo\UserSeeder;

class DatabaseSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 */
	public function run(): void
	{
		$this->call([
			RoleSeeder::class,
			PermissionSeeder::class,
			AdminSeeder::class,
			UserSeeder::class,
		]);
	}
}
