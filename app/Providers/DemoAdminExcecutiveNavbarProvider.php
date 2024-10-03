<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Cache;

class DemoAdminExcecutiveNavbarProvider extends ServiceProvider
{
	/**
	 * Register services.
	 */
	public function register(): void
	{
		//

		$this->app->singleton(DemoAdminExcecutiveNavbarProvider::class, function ($app) {
			return new DemoAdminExcecutiveNavbarProvider(null);
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
		$cacheKey = "menu_{$userId}_{$role}_EXECUTIVE";

		// Dashboard
		$menu[] = [
			'key' => 'main',
			'title' => null,
			'menu' => [
				[
					'label' => 'Dashboard',
					'route' => 'dashboard.executive',
					'icon' => 'ri-home-5-fill'
				]
			]
		];


		// Users and Administrators
		if (
			isset($permissions) &&
			(in_array('Super Admin Access', $permissions) ||
				in_array('Admin Access', $permissions))
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
			'title' => 'UX/UI',
			'menu' => [
				[
					'label' => 'UI Elements',
					'route' => null,
					'icon' => 'ri-function-add-fill',
					'submenu' => [
						[
							'label' => 'Accordion',
							'route' => 'dashboard.executive.ui.accordion'
						],
						[
							'label' => 'Alerts',
							'route' => 'dashboard.executive.ui.alerts'
						],
						[
							'label' => 'Avatar',
							'route' => 'dashboard.executive.ui.avatar'
						],
						[
							'label' => 'Breadcrumbs',
							'route' => 'dashboard.executive.ui.breadcrumbs'
						],
						[
							'label' => 'Buttons',
							'route' => 'dashboard.executive.ui.buttons'
						],
						[
							'label' => 'Cards',
							'route' => 'dashboard.executive.ui.cards'
						],
						[
							'label' => 'Chips',
							'route' => 'dashboard.executive.ui.chips'
						],
						[
							'label' => 'Drawer',
							'route' => 'dashboard.executive.ui.drawer'
						],
						[
							'label' => 'Dropdown',
							'route' => 'dashboard.executive.ui.dropdown'
						],
						[
							'label' => 'Image',
							'route' => 'dashboard.executive.ui.image'
						],
						[
							'label' => 'ListBox',
							'route' => 'dashboard.executive.ui.listbox'
						],
						[
							'label' => 'Loading indicators',
							'route' => 'dashboard.executive.ui.loading'
						],
						[
							'label' => 'Modal',
							'route' => 'dashboard.executive.ui.modal'
						],
						[
							'label' => 'Pagination',
							'route' => 'dashboard.executive.ui.pagination'
						],
						[
							'label' => 'Popover',
							'route' => 'dashboard.executive.ui.popover'
						],
						[
							'label' => 'Progress',
							'route' => 'dashboard.executive.ui.progress'
						],
						[
							'label' => 'Tabs',
							'route' => 'dashboard.executive.ui.tabs'
						],
						[
							'label' => 'Toasts',
							'route' => 'dashboard.executive.ui.toasts'
						],
						[
							'label' => 'Tooltips',
							'route' => 'dashboard.executive.ui.tooltips'
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
							'route' => 'dashboard.executive.form.components'
						],
						[
							'label' => 'Form layouts',
							'route' => 'dashboard.executive.form.layouts'
						],
						[
							'label' => 'Wysiwyg',
							'route' => 'dashboard.executive.form.wysiwyg'
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
							'route' => 'dashboard.executive.utilities.color'
						],
						[
							'label' => 'Image uploader',
							'route' => 'dashboard.executive.utilities.image-uploader'
						],
						[
							'label' => 'Icons',
							'route' => 'dashboard.executive.utilities.icons'
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
							'route' => 'dashboard.executive.tables.styles'
						],
						[
							'label' => 'Real data table',
							'route' => 'dashboard.executive.tables.real-data'
						]
					]
				],

				[
					'label' => 'Apex Charts',
					'route' => 'dashboard.executive.charts.apexcharts',
					'icon' => 'ri-pie-chart-fill'
				]

			],
		];

		if (isset($role) && $role === 'Super Admin') {
			// Roles and permissions
			$item = [
				'key' => 'roles_permissions',
				'title' => 'Roles & permissions',
				'menu' => [
					[
						'label' => 'Roles',
						'route' => 'dashboard.role.list',
						'icon' => 'ri-user-settings-line'
					],
					[
						'label' => 'Permissions',
						'route' => 'dashboard.permission.list',
						'icon' => 'ri-user-2-fill',
					]
				],
			];

			$menu[] = $item;

			// Notifications
			$item = [
				'key' => 'notifications',
				'title' => 'Notifications',
				'menu' => [
					[
						'label' => 'In App Notifications',
						'route' => 'dashboard.notification.list',
						'icon' => 'ri-notification-badge-fill'
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
