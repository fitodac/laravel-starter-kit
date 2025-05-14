<?php

namespace Database\Seeders\Demo;

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
			'email' => 'superadmin@local.com',
			'status' => 'active',
		]);

		$admin = User::factory()->create([
			'name' => 'Emma',
			'lastname' => 'Smith',
			'username' => 'real_emma',
			'email' => 'admin@local.com',
			'status' => 'active',
		]);

		$superadmin->syncRoles(['Super Admin']);
		$admin->syncRoles(['Admin']);
	}
}
