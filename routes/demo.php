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
	Route::inertia("/ui/buttons", "demo/pages/$template/ui/ButtonsPage")->name("$template.ui.buttons");
	Route::inertia("/ui/cards", "demo/pages/$template/ui/CardsPage")->name("$template.ui.cards");
	Route::inertia("/ui/chips", "demo/pages/$template/ui/ChipsPage")->name("$template.ui.chips");
	Route::inertia("/ui/images", "demo/pages/$template/ui/ImagePage")->name("$template.ui.image");
	Route::inertia("/ui/modal", "demo/pages/$template/ui/ModalPage")->name("$template.ui.modal");
	Route::inertia("/ui/drawer", "demo/pages/$template/ui/DrawerPage")->name("$template.ui.drawer");
	Route::inertia("/ui/dropdown", "demo/pages/$template/ui/DropdownPage")->name("$template.ui.dropdown");
	Route::inertia("/ui/listbox", "demo/pages/$template/ui/ListBoxPage")->name("$template.ui.listbox");
	Route::inertia("/ui/breadcrumbs", "demo/pages/$template/ui/BreadcrumbsPage")->name("$template.ui.breadcrumbs");
	Route::inertia("/ui/alerts", "demo/pages/$template/ui/AlertsPage")->name("$template.ui.alerts");
	Route::inertia("/ui/tabs", "demo/pages/$template/ui/TabsPage")->name("$template.ui.tabs");
	Route::inertia("/ui/pagination", "demo/pages/$template/ui/PaginationPage")->name("$template.ui.pagination");
	Route::inertia("/ui/popover", "demo/pages/$template/ui/PopoversPage")->name("$template.ui.popover");
	Route::inertia("/ui/progress", "demo/pages/$template/ui/ProgressPage")->name("$template.ui.progress");
	Route::inertia("/ui/loading", "demo/pages/$template/ui/LoadingIndicatorsPage")->name("$template.ui.loading");
	Route::inertia("/ui/toasts", "demo/pages/$template/ui/ToastsPage")->name("$template.ui.toasts");
	Route::inertia("/ui/tooltips", "demo/pages/$template/ui/TooltipsPage")->name("$template.ui.tooltips");
	Route::inertia("/ui/avatar", "demo/pages/$template/ui/AvatarPage")->name("$template.ui.avatar");


	// Utilities
	Route::inertia("/utilities/color", "demo/pages/$template/utilities/ColorPage")->name("$template.utilities.color");
	Route::inertia("/utilities/image-uploader", "demo/pages/$template/utilities/ImageUploaderPage")->name("$template.utilities.image-uploader");
	Route::inertia("/utilities/icons", "demo/pages/$template/utilities/IconsPage")->name("$template.utilities.icons");


	// Forms
	Route::inertia('forms/components', "demo/pages/$template/forms/ComponentsPage")->name("$template.form.components");
	Route::inertia('forms/layouts', "demo/pages/$template/forms/LayoutsPage")->name("$template.form.layouts");
	Route::inertia('forms/wysiwyg', "demo/pages/$template/forms/TipTapPage")->name("$template.form.wysiwyg");


	// Tables
	Route::inertia('tables', "demo/pages/$template/tables/TableStylesPage");
	Route::inertia('tables/styles', "demo/pages/$template/tables/TableStylesPage")->name("$template.tables.styles");
	Route::get('tables/real-data', [TablesController::class, 'index'])->name("$template.tables.real-data");
}

// Super Admin
Route::middleware(['auth', 'role:Super Admin'])
	->prefix('admin')
	->name('admin')
	->group(function () {
		Route::get('settings', [SettingsController::class, 'index'])->name('settings');
	});
