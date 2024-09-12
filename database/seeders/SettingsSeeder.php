<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Settings;

class SettingsSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{

		$csv = base_path('database/seeders/setup/settings.csv');
		$file = fopen($csv, 'r');

		while (($line = fgetcsv($file)) !== FALSE) {
			Settings::create([
				'key' => $line[0],
				'value' => $line[1],
				'category' => json_encode([$line[2]]),
			]);
		}
	}
}
