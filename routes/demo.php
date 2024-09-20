<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Demo\TablesController;
use App\Http\Controllers\Admin\SettingsController;

/**
 * Corporate
 */
Route::middleware(['auth', 'can:Admin Access'])
	->prefix('dashboard/corporate')
	->name('dashboard.')
	->group(function () {
		user_routes();
	});


Route::middleware(['auth', 'role:Super Admin'])
	->prefix('dashboard/corporate')
	->name('dashboard.')
	->group(function () {
		roles_routes();
		permissions_routes();
		admins_routes();
	});


Route::middleware('auth')
	->prefix('dashboard/corporate')
	->name('dashboard.')
	->group(function () {
		Route::inertia('/', 'demo/pages/corporate/DashboardPage')->name('corporate');

		demo_pages('corporate');
	});


/**
 * Executive
 */
Route::middleware(['auth', 'can:Admin Access'])
	->prefix('dashboard/executive')
	->name('executive.')
	->group(function () {
		user_routes();
	});


Route::middleware(['auth', 'role:Super Admin'])
	->prefix('dashboard/executive')
	->name('executive.')
	->group(function () {
		roles_routes();
		permissions_routes();
		admins_routes();
	});

Route::middleware('auth')
	->prefix('dashboard/executive')
	->name('dashboard.')
	->group(function () {
		Route::inertia('/', "demo/pages/executive/DashboardPage")->name('executive');

		demo_pages('executive');
	});



// Demo pages
function demo_pages($template = 'corporate'): void
{

	// UI Elements
	Route::inertia("/ui/accordion", "demo/pages/$template/UiElementsPage", 		['title' => 'Accordion'])->name("$template.ui.accordion");
	Route::inertia("/ui/alerts", "demo/pages/$template/UiElementsPage", 			['title' => 'Alerts'])->name("$template.ui.alerts");
	Route::inertia("/ui/avatar", "demo/pages/$template/UiElementsPage", 			['title' => 'Avatar'])->name("$template.ui.avatar");
	Route::inertia("/ui/breadcrumbs", "demo/pages/$template/UiElementsPage", 	['title' => 'Breadcrumbs'])->name("$template.ui.breadcrumbs");
	Route::inertia("/ui/buttons", "demo/pages/$template/UiElementsPage", 			['title' => 'Buttons'])->name("$template.ui.buttons");
	Route::inertia("/ui/cards", "demo/pages/$template/UiElementsPage", 				['title' => 'Cards'])->name("$template.ui.cards");
	Route::inertia("/ui/chips", "demo/pages/$template/UiElementsPage", 				['title' => 'Chips'])->name("$template.ui.chips");
	Route::inertia("/ui/drawer", "demo/pages/$template/UiElementsPage", 			['title' => 'Drawer'])->name("$template.ui.drawer");
	Route::inertia("/ui/dropdown", "demo/pages/$template/UiElementsPage", 		['title' => 'Dropdown'])->name("$template.ui.dropdown");
	Route::inertia("/ui/images", "demo/pages/$template/UiElementsPage", 			['title' => 'Image'])->name("$template.ui.image");
	Route::inertia("/ui/listbox", "demo/pages/$template/UiElementsPage", 			['title' => 'ListBox'])->name("$template.ui.listbox");
	Route::inertia("/ui/loading", "demo/pages/$template/UiElementsPage", 			['title' => 'Loading indicators'])->name("$template.ui.loading");
	Route::inertia("/ui/modal", "demo/pages/$template/UiElementsPage", 				['title' => 'Modal'])->name("$template.ui.modal");
	Route::inertia("/ui/pagination", "demo/pages/$template/UiElementsPage", 	['title' => 'Pagination'])->name("$template.ui.pagination");
	Route::inertia("/ui/popover", "demo/pages/$template/UiElementsPage", 			['title' => 'Popovers'])->name("$template.ui.popover");
	Route::inertia("/ui/progress", "demo/pages/$template/UiElementsPage", 		['title' => 'Progress'])->name("$template.ui.progress");
	Route::inertia("/ui/tabs", "demo/pages/$template/UiElementsPage", 				['title' => 'Tabs'])->name("$template.ui.tabs");
	Route::inertia("/ui/toasts", "demo/pages/$template/UiElementsPage", 			['title' => 'Toasts'])->name("$template.ui.toasts");
	Route::inertia("/ui/tooltips", "demo/pages/$template/UiElementsPage", 		['title' => 'Tooltips'])->name("$template.ui.tooltips");


	// Utilities
	Route::inertia("/utilities/color", "demo/pages/$template/UtilitiesPage", 						['title' => 'Color'])->name("$template.utilities.color");
	Route::inertia("/utilities/image-uploader", "demo/pages/$template/UtilitiesPage", 	['title' => 'Image uploader'])->name("$template.utilities.image-uploader");
	Route::inertia("/utilities/icons", "demo/pages/$template/UtilitiesPage", 						['title' => 'Icons'])->name("$template.utilities.icons");


	// Forms
	Route::inertia('forms/components', "demo/pages/$template/FormsPage", 	['title' => 'Form components'])->name("$template.form.components");
	Route::inertia('forms/layouts', "demo/pages/$template/FormsPage", 		['title' => 'Form layouts'])->name("$template.form.layouts");
	Route::inertia('forms/wysiwyg', "demo/pages/$template/FormsPage", 		['title' => 'Wysiwyg'])->name("$template.form.wysiwyg");


	// Tables
	Route::inertia('tables/styles', "demo/pages/$template/TablesPage", 	['title' => 'Tables styles'])->name("$template.tables.styles");
	Route::get('tables/real-data', [TablesController::class, 'index'])->name("$template.tables.real-data")->defaults('template', $template);
}

// Super Admin
Route::middleware(['auth', 'role:Super Admin'])
	->prefix('admin')
	->name('admin')
	->group(function () {
		Route::get('settings', [SettingsController::class, 'index'])->name('settings');
	});
