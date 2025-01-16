<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Cache;
use App\Data\UserData;

class DashboardNavbarProvider extends ServiceProvider
{
	/**
	 * Register services.
	 */
	public function register(): void
	{
		$this->app->singleton(DashboardNavbarProvider::class, function ($app) {
			return new DashboardNavbarProvider(null);
		});
	}

	/**
	 * Bootstrap services.
	 */
	public function boot(): void
	{
		//
	}

	/**
	 * Get the menu data.
	 */
	public function getMenu($user, $role): array
	{
		$menu = [];
		$userId = $user->id ?? 0;
		$cacheKey = "menu_{$userId}_{$role}";
		$permissions = $user->permissions ?? [];

		// Dashboard
		$menu[] = [
			'key' => 'main',
			'title' => null,
			'menu' => [
				[
					'label' => 'Dashboard',
					'route' => 'dashboard',
					'icon' => 'ri-home-5-fill'
				]
			]
		];


		// User gallery
		$menu[] = [
			'key' => 'gallery',
			'title' => 'Media',
			'menu' => [
				[
					'label' => 'Gallery',
					'route' => 'gallery.index',
					'icon' => 'ri-gallery-line'
				]
			]
		];


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
							'route' => 'dashboard.ui.accordion'
						],
						[
							'label' => 'Alerts',
							'route' => 'dashboard.ui.alerts'
						],
						[
							'label' => 'Avatar',
							'route' => 'dashboard.ui.avatar'
						],
						[
							'label' => 'Breadcrumbs',
							'route' => 'dashboard.ui.breadcrumbs'
						],
						[
							'label' => 'Buttons',
							'route' => 'dashboard.ui.buttons'
						],
						[
							'label' => 'Cards',
							'route' => 'dashboard.ui.cards'
						],
						[
							'label' => 'Chips',
							'route' => 'dashboard.ui.chips'
						],
						[
							'label' => 'Drawer',
							'route' => 'dashboard.ui.drawer'
						],
						[
							'label' => 'Dropdown',
							'route' => 'dashboard.ui.dropdown'
						],
						[
							'label' => 'Image',
							'route' => 'dashboard.ui.image'
						],
						[
							'label' => 'ListBox',
							'route' => 'dashboard.ui.listbox'
						],
						[
							'label' => 'Loading indicators',
							'route' => 'dashboard.ui.loading'
						],
						[
							'label' => 'Modal',
							'route' => 'dashboard.ui.modal'
						],
						[
							'label' => 'Pagination',
							'route' => 'dashboard.ui.pagination'
						],
						[
							'label' => 'Popover',
							'route' => 'dashboard.ui.popover'
						],
						[
							'label' => 'Progress',
							'route' => 'dashboard.ui.progress'
						],
						[
							'label' => 'Tabs',
							'route' => 'dashboard.ui.tabs'
						],
						[
							'label' => 'Toasts',
							'route' => 'dashboard.ui.toasts'
						],
						[
							'label' => 'Tooltips',
							'route' => 'dashboard.ui.tooltips'
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
							'route' => 'dashboard.form.input'
						],
						[
							'label' => 'Select',
							'route' => 'dashboard.form.select'
						],
						[
							'label' => 'Textarea',
							'route' => 'dashboard.form.textarea'
						],
						[
							'label' => 'Checkbox',
							'route' => 'dashboard.form.checkbox'
						],
						[
							'label' => 'Radio Button',
							'route' => 'dashboard.form.radio'
						],
						[
							'label' => 'Switch',
							'route' => 'dashboard.form.switch'
						],
						[
							'label' => 'Slider',
							'route' => 'dashboard.form.slider'
						],
						[
							'label' => 'Date Picker',
							'route' => 'dashboard.form.datepicker'
						],
						[
							'label' => 'Wysiwyg',
							'route' => 'dashboard.form.wysiwyg'
						],
						[
							'label' => 'Form layouts',
							'route' => 'dashboard.form.layouts'
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
							'route' => 'dashboard.utilities.color'
						],
						[
							'label' => 'Image uploader',
							'route' => 'dashboard.utilities.image-uploader'
						],
						[
							'label' => 'Icons',
							'route' => 'dashboard.utilities.icons'
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
							'route' => 'dashboard.tables.styles'
						],
						[
							'label' => 'Real data table',
							'route' => 'dashboard.tables.real-data'
						]
					]
				],

				[
					'label' => 'Apex Charts',
					'route' => 'dashboard.charts.apexcharts',
					'icon' => 'ri-pie-chart-fill'
				]
			],
		];


		// return $menu;

		return Cache::remember($cacheKey, 60, function () use ($menu) {
			return $menu;
		});
	}
}
