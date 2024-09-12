<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\demo\UsersSeeder;
use Database\Seeders\demo\ProductsSeeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\MediaManagerSeeder;

class DatabaseSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 */
	public function run(): void
	{

		$this->call([
			RoleSeeder::class,
			UsersSeeder::class,
			ProductsSeeder::class,
			MediaManagerSeeder::class,
		]);
	}
}
