<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use App\Models\AdminNavbar;

use function PHPUnit\Framework\isNull;

class HandleInertiaRequests extends Middleware
{
	/**
	 * The root template that is loaded on the first page visit.
	 *
	 * @var string
	 */
	protected $rootView = 'app';

	/**
	 * Determine the current asset version.
	 */
	public function version(Request $request): string|null
	{
		return parent::version($request);
	}

	/**
	 * Define the props that are shared by default.
	 *
	 * @return array<string, mixed>
	 */
	public function share(Request $request): array
	{

		$user = $request->user();
		$admin_navbar = new AdminNavbar();

		return [
			...parent::share($request),
			'auth' => [
				'user' => $user,
				// 'role' => $user->roles->pluck('name')->first()
			],
			'ziggy' => fn () => [
				...(new Ziggy)->toArray(),
				'location' => $request->url(),
			],
			'flash' => [
				'success' => fn () => $request->session()->get('success'),
				'error' => fn () => $request->session()->get('error'),
				'info' => fn () => $request->session()->get('info'),
			],
			'adminNavbar' => $admin_navbar->items()
		];
	}
}
