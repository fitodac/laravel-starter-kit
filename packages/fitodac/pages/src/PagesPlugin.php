<?php

namespace Fitodac\Pages;

use Filament\Contracts\Plugin;
use Filament\Panel;
use Fitodac\Pages\Filament\Resources\PageResource;

class PagesPlugin implements Plugin
{
	/**
	 * -------------------------------------------------------------------------------
	 * Creates a new instance of the Pages plugin
	 * -------------------------------------------------------------------------------
	 * 
	 * @return static A new instance of the Pages plugin
	 */
	public static function make(): static
	{
		return app(static::class);
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Get the unique identifier for this plugin
	 * -------------------------------------------------------------------------------
	 * 
	 * @return string The plugin identifier string
	 */
	public function getId(): string
	{
		return 'fitodac-pages';
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Register the plugin resources with the Filament panel
	 * -------------------------------------------------------------------------------
	 * 
	 * @param Panel $panel The Filament panel instance
	 * @return void
	 */
	public function register(Panel $panel): void
	{
		$panel
			->resources([
				PageResource::class,
			]);
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Perform any additional plugin bootstrapping
	 * -------------------------------------------------------------------------------
	 * 
	 * @param Panel $panel The Filament panel instance
	 * @return void
	 */
	public function boot(Panel $panel): void
	{
		//
	}
}
