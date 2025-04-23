<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;

class _Dashboard extends Page
{
	protected static ?string $navigationIcon = 'heroicon-o-home';

	protected static string $view = 'filament.pages.dashboard';

	// If you want to keep the Filament info widget, use this trait
	// use HasFilamentInfoWidget;

	// You can customize the dashboard heading
	// protected static ?string $title = 'Admin Dashboard';

	// You can customize the navigation icon

	// You can customize the navigation group
	// protected static ?string $navigationGroup = 'Dashboard';

	// You can customize the navigation sort
	protected static ?int $navigationSort = -2;
}
