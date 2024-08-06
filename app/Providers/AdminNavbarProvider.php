<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AdminNavbarProvider extends ServiceProvider
{
	/**
	 * Register services.
	 */
	public function register(): void
	{
		//
	}

	/**
	 * Bootstrap services.
	 */
	public function boot(): void
	{
		$menu = [];

		$menu[] = [
			'key' => 'main',
			'title' => null,
			'menu' => [
				[
					'label' => 'Dashboard',
					'route' => 'dashboard.corporate',
					'icon' => 'ri-home-5-fill'
				]
			]
		];

		$menu[] = [
			'key' => 'users',
			'title' => 'Users management',
			'menu' => [
				[
					'label' => 'Users',
					'route' => 'dashboard.users.list',
					'icon' => 'ri-group-3-fill',
				],
				[
					'label' => 'Admins',
					'route' => 'dashboard.admins.list',
					'icon' => 'ri-user-2-fill',
				]
			],
		];


		$menu[] = [
			'key' => 'ui-components',
			'title' => 'Ui Components',
			'menu' => [
				[
					'label' => 'UI Elements',
					'route' => null,
					'icon' => 'ri-notification-badge-fill',
					'submenu' => [
						[
							'label' => 'Buttons',
							'route' => 'dashboard.corporate.ui.buttons'
						],
						[
							'label' => 'Cards',
							'route' => 'dashboard.corporate.ui.cards'
						],
						[
							'label' => 'Chips',
							'route' => 'dashboard.corporate.ui.chips'
						],
						[
							'label' => 'Image',
							'route' => 'dashboard.corporate.ui.image'
						]
					]
				],
				[
					'label' => 'Utilities',
					'route' => null,
					'icon' => 'ri-pantone-fill',
					'submenu' => [
						[
							'label' => 'Color',
							'route' => 'dashboard.corporate.utilities.color'
						],
						[
							'label' => 'Image uploader',
							'route' => 'dashboard.corporate.utilities.image-uploader'
						]
					]
				],
				[
					'label' => 'Forms',
					'route' => null,
					'icon' => 'ri-align-right',
					'submenu' => [
						[
							'label' => 'Form components',
							'route' => 'dashboard.corporate.form.components'
						],
						[
							'label' => 'Form layouts',
							'route' => 'dashboard.corporate.form.layouts'
						]
					]
				],
				[
					'label' => 'Tables',
					'route' => null,
					'icon' => 'ri-table-view',
					'submenu' => [
						[
							'label' => 'Table styles',
							'route' => 'dashboard.corporate.tables.styles'
						],
						[
							'label' => 'Real data table',
							'route' => 'dashboard.corporate.tables.real-data'
						]
					]
				]
			],
		];

		Inertia::share('adminNavbar', $menu);
	}
}
