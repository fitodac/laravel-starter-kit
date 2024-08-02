<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class AdminNavbar extends Model
{
	// use HasFactory;

	protected $table = null;

	public function items()
	{

		$user = Auth::user();

		if (!$user) return;

		$menu = [];

		$menu[] = [
			'key' => 'main',
			'title' => null,
			'menu' => [
				[
					'label' => 'Dashboard',
					'route' => route('dashboard.corporate'),
					'icon' => 'ri-home-5-fill'
				]
			]
		];

		$menu[] = [
			'key' => 'users',
			'title' => 'Users management',
			'menu' => [],
		];

		if ($user->hasPermissionTo('admin_access')) {
			$menu[1]['menu'][] = [
				'label' => 'Users',
				'route' => route('dashboard.users.list'),
				'icon' => 'ri-group-3-fill',

			];
		}

		if ($user->hasPermissionTo('super_admin_access')) {
			$menu[1]['menu'][] = [
				'label' => 'Admins',
				'route' => route('dashboard.admins.list'),
				'icon' => 'ri-user-2-fill',
			];
		}

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
							'route' => route('dashboard.corporate.ui.buttons')
						],
						[
							'label' => 'Cards',
							'route' => route('dashboard.corporate.ui.cards')
						],
						[
							'label' => 'Chips',
							'route' => route('dashboard.corporate.ui.chips')
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
							'route' => route('dashboard.corporate.utilities.color')
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
							'route' => route('dashboard.corporate.form.components')
						],
						[
							'label' => 'Form layouts',
							'route' => route('dashboard.corporate.form.layouts')
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
							'route' => route('dashboard.corporate.tables.styles')
						],
						[
							'label' => 'Real data table',
							'route' => route('dashboard.corporate.tables.real-data'),
						]
					]
				]
			],
		];

		return $menu;
	}
}
