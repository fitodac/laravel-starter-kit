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
			'permissions' => ['Super Admin Access', 'Admin Access'],
			'menu' => [
				[
					'label' => 'Users',
					'route' => 'dashboard.users.list',
					'icon' => 'ri-group-3-fill',
					'permissions' => ['Super Admin Access', 'Admin Access']
				],
				[
					'label' => 'Administrators',
					'route' => 'dashboard.admins.list',
					'icon' => 'ri-user-2-fill',
					'permissions' => ['Super Admin Access']
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
							'label' => 'Alerts',
							'route' => 'dashboard.corporate.ui.alerts'
						],
						[
							'label' => 'Tabs',
							'route' => 'dashboard.corporate.ui.tabs'
						],
						[
							'label' => 'Pagination',
							'route' => 'dashboard.corporate.ui.pagination'
						],
						[
							'label' => 'Popover',
							'route' => 'dashboard.corporate.ui.popover'
						],
						[
							'label' => 'Progress',
							'route' => 'dashboard.corporate.ui.progress'
						],
						[
							'label' => 'Loading indicators',
							'route' => 'dashboard.corporate.ui.loading'
						],
						[
							'label' => 'Toasts',
							'route' => 'dashboard.corporate.ui.toasts'
						],
						[
							'label' => 'Tooltips',
							'route' => 'dashboard.corporate.ui.tooltips'
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
							'label' => 'Dropdown',
							'route' => 'dashboard.corporate.ui.dropdown'
						],
						[
							'label' => 'Image',
							'route' => 'dashboard.corporate.ui.image'
						],
						[
							'label' => 'ListBox',
							'route' => 'dashboard.corporate.ui.listbox'
						],
						[
							'label' => 'Breadcrumbs',
							'route' => 'dashboard.corporate.ui.breadcrumbs'
						],
						[
							'label' => 'Modal',
							'route' => 'dashboard.corporate.ui.modal'
						],
						[
							'label' => 'Drawer',
							'route' => 'dashboard.corporate.ui.drawer'
						],
						[
							'label' => 'Avatar',
							'route' => 'dashboard.corporate.ui.avatar'
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
						],
						[
							'label' => 'Wysiwyg',
							'route' => 'dashboard.corporate.form.wysiwyg'
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

		$menu[] = [
			'key' => 'roles_permissions',
			'title' => 'Roles & permissions',
			'permissions' => ['Super Admin Access'],
			'menu' => [
				[
					'label' => 'Roles',
					'route' => 'dashboard.roles.list',
					'icon' => 'ri-user-settings-line',
					'permissions' => ['Super Admin Access']
				],
				[
					'label' => 'Permissions',
					'route' => 'dashboard.permissions.list',
					'icon' => 'ri-user-2-fill',
					'permissions' => ['Super Admin Access']
				]
			],
		];

		Inertia::share('adminNavbar', $menu);
	}
}
