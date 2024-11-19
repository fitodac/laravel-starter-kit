<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class AdminSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		// Create a super admin user
		$superadmin = User::factory()->create([
			'name' => 'Max',
			'lastname' => 'Masterson',
			'username' => 'maxmasterson',
			'email' => 'superadmin@local.com'
		])->assignRole('Super Admin');

		$superadmin->account()->create([
			'colorMode' => 'dark',
			'language' => 'en'
		]);


		$admin = User::factory()->create([
			'name' => 'Emma',
			'lastname' => 'Smith',
			'username' => 'real_emma',
			'email' => 'admin@local.com'
		])->assignRole('Admin');

		$admin->account()->create([
			'colorMode' => 'dark',
			'language' => 'en'
		]);
	}
}
