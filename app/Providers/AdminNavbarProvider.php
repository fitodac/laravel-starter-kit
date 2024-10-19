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
							'route' => 'dashboard.corporate.ui.accordion'
						],
						[
							'label' => 'Alerts',
							'route' => 'dashboard.corporate.ui.alerts'
						],
						[
							'label' => 'Avatar',
							'route' => 'dashboard.corporate.ui.avatar'
						],
						[
							'label' => 'Breadcrumbs',
							'route' => 'dashboard.corporate.ui.breadcrumbs'
						],
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
							'label' => 'Drawer',
							'route' => 'dashboard.corporate.ui.drawer'
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
							'label' => 'Loading indicators',
							'route' => 'dashboard.corporate.ui.loading'
						],
						[
							'label' => 'Modal',
							'route' => 'dashboard.corporate.ui.modal'
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
							'label' => 'Tabs',
							'route' => 'dashboard.corporate.ui.tabs'
						],
						[
							'label' => 'Toasts',
							'route' => 'dashboard.corporate.ui.toasts'
						],
						[
							'label' => 'Tooltips',
							'route' => 'dashboard.corporate.ui.tooltips'
						],
					]
				],

				[
					'label' => 'Forms',
					'route' => null,
					'icon' => 'ri-align-right',
					'submenu' => [
						[
							'label' => 'Input',
							'route' => 'dashboard.corporate.form.input'
						],
						[
							'label' => 'Select',
							'route' => 'dashboard.corporate.form.select'
						],
						[
							'label' => 'Textarea',
							'route' => 'dashboard.corporate.form.textarea'
						],
						[
							'label' => 'Checkbox',
							'route' => 'dashboard.corporate.form.checkbox'
						],
						[
							'label' => 'Radio Button',
							'route' => 'dashboard.corporate.form.radio'
						],
						[
							'label' => 'Switch',
							'route' => 'dashboard.corporate.form.switch'
						],
						[
							'label' => 'Slider',
							'route' => 'dashboard.corporate.form.slider'
						],
						[
							'label' => 'Date Picker',
							'route' => 'dashboard.corporate.form.datepicker'
						],
						[
							'label' => 'Wysiwyg',
							'route' => 'dashboard.corporate.form.wysiwyg'
						],
						[
							'label' => 'Form layouts',
							'route' => 'dashboard.corporate.form.layouts'
						],
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
				],

				[
					'label' => 'Apex Charts',
					'route' => 'dashboard.corporate.charts.apexcharts',
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
