<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Data\UserData;
use Filament\Support\Facades\FilamentView;
use Illuminate\Support\Facades\Blade;

class FilamentMiddleware
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
	 */
	public function handle(Request $request, Closure $next): Response
	{

		// Get the authenticated user from the request
		$user = $request->user();

		// Get the setted color mode.
		$color_mode = config('settings.general.color_mode');

		// Set color mode based on user's preferences.
		if ($user) {
			$color_mode = $user->account->color_mode;
		}

		// Force color mode for Filament views.
		FilamentView::registerRenderHook(
			'panels::scripts.after',
			function () use ($color_mode): string {
				return Blade::render("<script>localStorage.setItem('theme', '$color_mode')</script>");
			}
		);

		return $next($request);
	}
}
