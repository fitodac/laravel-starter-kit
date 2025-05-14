<?php

namespace Fitodac\Pages\Commands;

use Illuminate\Console\Command;
use Fitodac\Pages\Seeders\PagesSeeder;

class InstallCommand extends Command
{
	protected $signature = 'pages:install';

	protected $description = 'Install the dynamic pages package and set up permissions';

	public function handle()
	{
		$this->info('Installing Pages Package...');

		// Ejecutar el seeder directamente
		$this->call('db:seed', [
			'--class' => PagesSeeder::class,
		]);

		$this->info('Pages Package installed successfully!');

		return Command::SUCCESS;
	}
}
