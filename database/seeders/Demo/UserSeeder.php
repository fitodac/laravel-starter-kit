<?php

namespace Database\Seeders\Demo;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		for($i = 0; $i < 100; $i++){
			User::factory()->create([
				'username' => "user$i",
				'email' => "user$i@local.com",
				'password' => bcrypt('password'),
			]);
		}
	}
}
