<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\MediaManagerController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\Admin\DashboardController;

use Illuminate\Http\Request;


Route::get('/', function () {
	return Inertia::render('Welcome', [
		'canLogin' => Route::has('login'),
		'canRegister' => Route::has('register'),
		'laravelVersion' => Application::VERSION,
		'phpVersion' => PHP_VERSION,
	]);
});


Route::middleware(['auth', 'verified'])->group(function () {
	Route::get('profile', [ProfileController::class, 'edit'])
		->name('profile.edit');

	Route::match(['put', 'patch'], 'profile', [ProfileController::class, 'update'])
		->name('profile.update');

	Route::delete('profile', [ProfileController::class, 'destroy'])
		->name('profile.destroy');

	Route::post('profile/image-profile', [ProfileController::class, 'update_image'])
		->name('profile.update_image');

	Route::delete('profile/image-profile', [ProfileController::class, 'remove_image'])
		->name('profile.remove_image');

	Route::get('account', [AccountController::class, 'edit'])
		->name('account.edit');

	Route::match(['put', 'patch'], 'account', [AccountController::class, 'update'])
		->name('account.update');

	// Image uploader
	Route::post('media', [MediaManagerController::class, 'store'])->name('media.upload');
	Route::get('media', [MediaManagerController::class, 'index'])->name('media.list');
	Route::patch('media/{id}', [MediaManagerController::class, 'update'])->name('media.update');
	Route::delete('media/{id}', [MediaManagerController::class, 'destroy'])->name('media.delete');


	/**
	 * Notifications
	 * 
	 * 
	 * 
	 */
	Route::get('notifications', [NotificationController::class, 'index'])->name('notification.index');
	Route::post('notification-templates/{notification}/mark-as-read', [NotificationController::class, 'markAsRead'])->name('notification.markAsRead');
	Route::post('notification-templates/mark-all-as-read', [NotificationController::class, 'markAllAsRead'])->name('notification.markAllAsRead');


	/**
	 * Keep alive
	 */
	Route::get('keep-alive', function () {
		return response()->json(['status' => 'alive']);
	})->name('keepAlive');
});



Route::get('dashboard', [DashboardController::class, 'index'])
	->middleware(['auth', 'verified'])
	->name('dashboard');



require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/demo.php';
