<?php

namespace Fitodac\Pages\Commands;

use Illuminate\Console\Command;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class InstallCommand extends Command
{
	protected $signature = 'pages:install';

	protected $description = 'Install the dynamic pages package and set up permissions';

	public function handle()
	{
		$this->info('Installing Pages Package...');

		$permissions = [
			'view_page',
			'view_any_page',
			'create_page',
			'update_page',
			'delete_page',
			'delete_any_page',
		];

		$this->info('Creating permissions...');
		foreach ($permissions as $permission) {
			Permission::firstOrCreate(['name' => $permission]);
		}

		// Assign permissions to Admin role
		$roleAdmin = Role::firstOrCreate(['name' => 'Admin']);

		$this->info('Assigning permissions to Admin role...');
		$roleAdmin->givePermissionTo($permissions);

		$this->info('Pages Package installed successfully!');

		return Command::SUCCESS;
	}
}
