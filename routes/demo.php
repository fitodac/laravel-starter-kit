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
		Route::inertia('/ui/images', 'demo/pages/corporate/ui/ImagePage')->name('corporate.ui.image');
		Route::inertia('/ui/modal', 'demo/pages/corporate/ui/ModalPage')->name('corporate.ui.modal');
		Route::inertia('/ui/drawer', 'demo/pages/corporate/ui/DrawerPage')->name('corporate.ui.drawer');
		Route::inertia('/ui/dropdown', 'demo/pages/corporate/ui/DropdownPage')->name('corporate.ui.dropdown');
		Route::inertia('/ui/listbox', 'demo/pages/corporate/ui/ListBoxPage')->name('corporate.ui.listbox');
		Route::inertia('/ui/breadcrumbs', 'demo/pages/corporate/ui/BreadcrumbsPage')->name('corporate.ui.breadcrumbs');
		Route::inertia('/ui/alerts', 'demo/pages/corporate/ui/AlertsPage')->name('corporate.ui.alerts');
		Route::inertia('/ui/tabs', 'demo/pages/corporate/ui/TabsPage')->name('corporate.ui.tabs');
		Route::inertia('/ui/pagination', 'demo/pages/corporate/ui/PaginationPage')->name('corporate.ui.pagination');
		Route::inertia('/ui/popover', 'demo/pages/corporate/ui/PopoversPage')->name('corporate.ui.popover');
		Route::inertia('/ui/progress', 'demo/pages/corporate/ui/ProgressPage')->name('corporate.ui.progress');
		Route::inertia('/ui/loading', 'demo/pages/corporate/ui/LoadingIndicatorsPage')->name('corporate.ui.loading');
		Route::inertia('/ui/toasts', 'demo/pages/corporate/ui/ToastsPage')->name('corporate.ui.toasts');
		Route::inertia('/ui/tooltips', 'demo/pages/corporate/ui/TooltipsPage')->name('corporate.ui.tooltips');
		Route::inertia('/ui/avatar', 'demo/pages/corporate/ui/AvatarPage')->name('corporate.ui.avatar');


		// Utilities
		Route::inertia('/utilities/color', 'demo/pages/corporate/utilities/ColorPage')->name('corporate.utilities.color');
		Route::inertia('/utilities/image-uploader', 'demo/pages/corporate/utilities/ImageUploaderPage')->name('corporate.utilities.image-uploader');
		Route::inertia('/utilities/icons', 'demo/pages/corporate/utilities/IconsPage')->name('corporate.utilities.icons');


		// Forms
		Route::inertia('forms/components', 'demo/pages/corporate/forms/ComponentsPage')->name('corporate.form.components');
		Route::inertia('forms/layouts', 'demo/pages/corporate/forms/LayoutsPage')->name('corporate.form.layouts');
		Route::inertia('forms/wysiwyg', 'demo/pages/corporate/forms/TipTapPage')->name('corporate.form.wysiwyg');


		// Tables
		Route::inertia('tables', 'demo/pages/corporate/tables/TableStylesPage');
		Route::inertia('tables/styles', 'demo/pages/corporate/tables/TableStylesPage')->name('corporate.tables.styles');
		Route::get('tables/real-data', [TablesController::class, 'index'])->name('corporate.tables.real-data');
	});
