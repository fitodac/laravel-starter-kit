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
					'route' => 'admin',
					'icon' => 'ri-home-5-fill'
				]
			]
		];


		// Users and Administrators
		if (
			isset($role) && 'Super Admin' == $role ||
			isset($permissions) &&
			in_array('Can see users', $permissions)
		) {
			$item = [
				'key' => 'users',
				'title' => 'Users management',
				'menu' => [
					[
						'label' => 'Users',
						'route' => 'admin.user.index',
						'icon' => 'ri-group-3-fill',
					],
				]
			];

			if (
				isset($role) && 'Super Admin' == $role ||
				in_array('Can see admins', $permissions)
			) {
				$item['menu'][] = [
					'label' => 'Administrators',
					'route' => 'admin.admin.index',
					'icon' => 'ri-user-2-fill',
				];
			}

			$menu[] = $item;
		}


		if (isset($role) && $role === 'Super Admin') {
			// Roles and permissions
			$item = [
				'key' => 'roles_permissions',
				'title' => 'Roles & permissions',
				'menu' => [
					[
						'label' => 'Roles',
						'route' => 'admin.role.list',
						'icon' => 'ri-user-settings-line'
					],
					[
						'label' => 'Permissions',
						'route' => 'admin.permission.list',
						'icon' => 'ri-user-2-fill',
					]
				],
			];

			$menu[] = $item;

			// Templates
			$item = [
				'key' => 'templates',
				'title' => 'Templates',
				'menu' => [
					[
						'label' => 'Notifications',
						'route' => 'admin.notificationTemplates.index',
						'icon' => 'ri-notification-badge-fill'
					],
					[
						'label' => 'Emails',
						'route' => 'admin.emailTemplates.index',
						'icon' => 'ri-mail-open-fill'
					]
				],
			];

			$menu[] = $item;

			// User dashboard
			$menu[] = [
				'key' => 'user_dashboard',
				'title' => 'User dashboard',
				'menu' => [
					[
						'label' => 'User dashboard',
						'route' => 'dashboard',
						'icon' => 'ri-home-5-line'
					]
				]
			];
		}


		// return $menu;

		return Cache::remember($cacheKey, 60, function () use ($menu) {
			return $menu;
		});
	}
}
