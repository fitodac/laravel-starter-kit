<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Demo\TablesController;


Route::middleware('auth')
	->prefix('dashboard/corporate')
	->name('dashboard.')
	->group(function () {

		Route::inertia('/', 'demo/pages/corporate/DashboardPage')->name('corporate');


		// UI Elements
		Route::inertia('/ui/buttons', 'demo/pages/corporate/ui/ButtonsPage')->name('corporate.ui.buttons');
		Route::inertia('/ui/cards', 'demo/pages/corporate/ui/CardsPage')->name('corporate.ui.cards');
		Route::inertia('/ui/chips', 'demo/pages/corporate/ui/ChipsPage')->name('corporate.ui.chips');


		// Utilities
		Route::inertia('/utilities/color', 'demo/pages/corporate/utilities/ColorPage')->name('corporate.utilities.color');


		// Forms
		Route::inertia('forms/components', 'demo/pages/corporate/forms/ComponentsPage')->name('corporate.form.components');
		Route::inertia('forms/layouts', 'demo/pages/corporate/forms/LayoutsPage')->name('corporate.form.layouts');


		// Tables
		Route::inertia('tables', 'demo/pages/corporate/tables/TableStylesPage');
		Route::inertia('tables/styles', 'demo/pages/corporate/tables/TableStylesPage')->name('corporate.tables.styles');
		Route::get('tables/real-data', [TablesController::class, 'index'])->name('corporate.tables.real-data');
	});
