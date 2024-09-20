<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Cache;

class AdminNavbarProvider extends ServiceProvider
{
	/**
	 * Register services.
	 */
	public function register(): void
	{
		//

		$this->app->singleton(AdminNavbarProvider::class, function ($app) {
			return new AdminNavbarProvider(null);
		});
	}

	/**
	 * Bootstrap services.
	 */
	public function boot(): void {}


	/**
	 * Get the menu data.
	 */
	public function getMenu($user, $role, $permissions = []): array
	{
		$menu = [];
		$userId = $user->id ?? 0;
		$cacheKey = "menu_{$userId}_{$role}";

		// Dashboard
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


		// Users and Administrators
		if (
			in_array('Super Admin Access', $permissions) ||
			in_array('Admin Access', $permissions)
		) {
			$item = [
				'key' => 'users',
				'title' => 'Users management',
				'menu' => [
					[
						'label' => 'Users',
						'route' => 'dashboard.users.list',
						'icon' => 'ri-group-3-fill',
					],
				]
			];

			if (in_array('Super Admin Access', $permissions)) {
				$item['menu'][] = [
					'label' => 'Administrators',
					'route' => 'dashboard.admins.list',
					'icon' => 'ri-user-2-fill',
				];
			}

			$menu[] = $item;
		}


		// UI components
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
						],
						[
							'label' => 'Icons',
							'route' => 'dashboard.corporate.utilities.icons'
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

		// Roles and permissions
		if ($role === 'Super Admin') {
			$item = [
				'key' => 'roles_permissions',
				'title' => 'Roles & permissions',
				'menu' => [
					[
						'label' => 'Roles',
						'route' => 'dashboard.roles.list',
						'icon' => 'ri-user-settings-line'
					],
					[
						'label' => 'Permissions',
						'route' => 'dashboard.permissions.list',
						'icon' => 'ri-user-2-fill',
					]
				],
			];

			$menu[] = $item;
		}


		return Cache::remember($cacheKey, 60, function () use ($menu) {
			return $menu;
		});
	}
}
