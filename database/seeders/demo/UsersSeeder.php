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
			->assignRole('superadmin');

		User::factory()->create([
			'name' => 'Emma',
			'lastname' => 'Smith',
			'username' => 'real_emma',
			'email' => 'admin@local.com'
		])->assignRole('admin');

		User::factory()->create([
			'name' => 'John',
			'lastname' => 'Doe',
			'username' => 'johndoe',
			'email' => 'user@local.com'
		])->assignRole('user');

		User::factory(9)->create()->each(function ($user) {
			$user->assignRole('admin');
		});

		User::factory(30)->create()->each(function ($user) {
			$user->assignRole('user');
		});
	}
}
