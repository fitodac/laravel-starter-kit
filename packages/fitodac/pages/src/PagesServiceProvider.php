<?php

namespace Fitodac\Pages;

use Illuminate\Support\ServiceProvider;
use Filament\Facades\Filament;
use Fitodac\Pages\Filament\Resources\PageResource;
use Fitodac\Pages\Models\Page;
use Fitodac\Pages\Policies\PagePolicy;
use Fitodac\Pages\PagesPlugin;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PagesServiceProvider extends ServiceProvider
{
	/**
	 * -------------------------------------------------------------------------------
	 * Register any application services.
	 * -------------------------------------------------------------------------------
	 * This method binds the PagesPlugin singleton to the application container.
	 */
	public function register(): void
	{
		$this->app->singleton(PagesPlugin::class, function () {
			return new PagesPlugin();
		});
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Bootstrap any application services.
	 * -------------------------------------------------------------------------------
	 */
	public function boot(): void
	{
		// Registrar políticas
		Gate::policy(Page::class, PagePolicy::class);

		$this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
		$this->loadRoutesFrom(__DIR__ . '/../routes/web.php');

		$this->publishes([
			__DIR__ . '/../database/migrations' => database_path('migrations'),
		], 'pages-migrations');

		$this->publishes([
			__DIR__ . '/../resources/js/Pages' => resource_path('js/pages'),
		], 'pages-resources');

		// Crear el seeder para los permisos
		if ($this->app->runningInConsole()) {
			$this->commands([
				Commands\InstallCommand::class,
			]);
		}
	}
}
