<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Demo\TablesController;


Route::middleware('auth')->prefix('dashboard/corporate')
	->name('dashboard.')
	->group(function () {

		Route::inertia('/', 'demo/pages/corporate/DashboardPage')->name('corporate');


		// UI Elements
		Route::inertia('/ui/buttons', 'demo/pages/corporate/ui/ButtonsPage')->name('corporate.ui.buttons');
		Route::inertia('/ui/cards', 'demo/pages/corporate/ui/CardsPage')->name('corporate.ui.cards');


		// Utilities
		Route::inertia('/utilities/color', 'demo/pages/corporate/utilities/ColorPage')->name('corporate.utilities.color');


		// Forms
		Route::inertia('forms/components', 'demo/pages/corporate/forms/ComponentsPage')->name('corporate.form.components');
		Route::inertia('forms/layouts', 'demo/pages/corporate/forms/LayoutsPage')->name('corporate.form.layouts');


		// Tables
		Route::get('tables/basic', [TablesController::class, 'index'])->name('corporate.tables.basic');

		Route::get('tables', [TablesController::class, 'index']);
		Route::get('tables/striped', [TablesController::class, 'index'])->name('corporate.tables.striped');
		Route::get('tables/borderless', [TablesController::class, 'index'])->name('corporate.tables.borderless');
		Route::get('tables/dividers', [TablesController::class, 'index'])->name('corporate.tables.dividers');
		Route::get('tables/bordered', [TablesController::class, 'index'])->name('corporate.tables.bordered');
		Route::get('tables/card', [TablesController::class, 'index'])->name('corporate.tables.card');
		Route::get('tables/card2', [TablesController::class, 'index'])->name('corporate.tables.card2');
	});
