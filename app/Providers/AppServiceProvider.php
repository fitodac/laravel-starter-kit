<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Filament\Http\Responses\Auth\Contracts\LoginResponse as BaseLoginResponse;
use App\Http\Responses\Auth\LoginResponse;

class AppServiceProvider extends ServiceProvider
{
	/**
	 * Register any application services.
	 */
	public function register(): void
	{
		// Add this to the register method
		$this->app->bind(
			BaseLoginResponse::class,
			LoginResponse::class
		);
	}

	/**
	 * Bootstrap any application services.
	 */
	public function boot(): void {}
}
