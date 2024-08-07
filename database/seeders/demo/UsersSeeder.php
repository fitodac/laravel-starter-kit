<?php

namespace Database\Seeders\demo;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		User::factory()->create([
			'name' => 'Max',
			'lastname' => 'Masterson',
			'username' => 'maxmasterson',
			'email' => 'superadmin@local.com'
		])
			->assignRole('Super Admin');

		User::factory()->create([
			'name' => 'Emma',
			'lastname' => 'Smith',
			'username' => 'real_emma',
			'email' => 'admin@local.com'
		])->assignRole('Admin');

		User::factory()->create([
			'name' => 'John',
			'lastname' => 'Doe',
			'username' => 'johndoe',
			'email' => 'user@local.com'
		])->assignRole('User');

		User::factory(9)->create()->each(function ($user) {
			$user->assignRole('Admin');
		});

		User::factory(30)->create()->each(function ($user) {
			$user->assignRole('User');
		});
	}
}
