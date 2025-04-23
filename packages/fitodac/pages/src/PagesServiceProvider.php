<?php

namespace Fitodac\Pages;

use Illuminate\Support\ServiceProvider;
use Filament\Facades\Filament;
use Fitodac\Pages\Filament\Resources\PageResource;
use Fitodac\Pages\Models\Page;
use Fitodac\Pages\Policies\PagePolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DynamicPagesServiceProvider extends ServiceProvider
{
	public function register(): void
	{
		//
	}

	public function boot(): void
	{
		// Registrar políticas
		Gate::policy(Page::class, PagePolicy::class);

		// Registrar recursos de Filament
		Filament::registerResources([
			PageResource::class,
		]);

		// Cargar migraciones
		$this->loadMigrationsFrom(__DIR__ . '/../database/migrations');

		// Registrar rutas
		$this->loadRoutesFrom(__DIR__ . '/../routes/web.php');

		// Publicar archivos de configuración, migraciones, etc.
		$this->publishes([
			__DIR__ . '/../database/migrations' => database_path('migrations'),
		], 'dynamic-pages-migrations');

		$this->publishes([
			__DIR__ . '/../resources/js/Pages' => resource_path('js/Pages'),
		], 'dynamic-pages-resources');

		// Crear el seeder para los permisos
		if ($this->app->runningInConsole()) {
			$this->commands([
				Commands\InstallCommand::class,
			]);
		}
	}
}
