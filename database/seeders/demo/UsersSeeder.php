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
		$superadmin = User::factory()->create([
			'name' => 'Max',
			'lastname' => 'Masterson',
			'username' => 'maxmasterson',
			'email' => 'admin@local.com'
		]);

		$superadmin->assignRole('superadmin');

		User::factory(9)->create()->each(function ($user) {
			$user->assignRole('admin');
		});
		
		User::factory(60)->create()->each(function ($user) {
			$user->assignRole('user');
		});
	}
}
