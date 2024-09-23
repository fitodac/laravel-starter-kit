<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Demo\TablesController;
use App\Http\Controllers\Admin\SettingsController;

/**
 * Demo pages
 */
$pages = [
	'ui' => [
		'accordion' => 'Accordion',
		'alerts' => 'Alerts',
		'avatar' => 'Avatar',
		'breadcrumbs' => 'Breadcrumbs',
		'buttons' => 'Buttons',
		'cards' => 'Cards',
		'chips' => 'Chips',
		'drawer' => 'Drawer',
		'dropdown' => 'Dropdown',
		'image' => 'Image',
		'listbox' => 'ListBox',
		'loading' => 'Loading indicators',
		'modal' => 'Modal',
		'pagination' => 'Pagination',
		'popover' => 'Popovers',
		'progress' => 'Progress',
		'tabs' => 'Tabs',
		'toasts' => 'Toasts',
		'tooltips' => 'Tooltips',
	],
	'utilities' => [
		'color' => 'Color',
		'image-uploader' => 'Image uploader',
		'icons' => 'Icons',
	],
	'form' => [
		'components' => 'Form components',
		'layouts' => 'Form layouts',
		'wysiwyg' => 'Wysiwyg',
	],
	'tables' => [
		'styles' => 'Tables styles',
		'real-data' => 'Real data',
	],
];



/**
 * Corporate
 */
Route::middleware('auth')
	->prefix('dashboard/corporate')
	->name('dashboard.')
	->group(function () use ($pages) {
		Route::inertia('/', 'demo/pages/corporate/DashboardPage')->name('corporate');

		foreach ($pages as $group => $pages) {
			foreach ($pages as $page => $title) {
				if ($group === 'ui') {
					Route::inertia("/$group/$page", "demo/pages/corporate/UiElementsPage", ['title' => $title])
						->name("corporate.$group.$page");
				} else {
					Route::inertia("/$group/$page", "demo/pages/corporate/$group/$page")
						->name("corporate.$group.$page");
				}
			}
		}
	});


/**
 * Executive
 */
Route::middleware('auth')
	->prefix('dashboard/executive')
	->name('dashboard.')
	->group(function () use ($pages) {
		Route::inertia('/', "demo/pages/executive/DashboardPage")->name('executive');

		foreach ($pages as $group => $pages) {
			foreach ($pages as $page => $title) {
				if ($group === 'ui') {
					Route::inertia("/$group/$page", "demo/pages/executive/UiElementsPage", ['title' => $title])
						->name("executive.$group.$page");
				} else {
					Route::inertia("/$group/$page", "demo/pages/executive/$group/$page")
						->name("executive.$group.$page");
				}
			}
		}
	});
