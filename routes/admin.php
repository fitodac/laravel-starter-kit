<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\UserAdminController;


Route::middleware(['auth', 'can:admin_access'])
	->prefix('dashboard/corporate')
	->name('dashboard.')
	->group(function () {
		Route::resource('user', UserController::class)->names([
			'index' => 'users.list',
			'show' => 'user.show',
		]);
	});


Route::middleware(['auth', 'can:super_admin_access'])
	->prefix('dashboard/corporate')
	->name('dashboard.')
	->group(function () {
		Route::resource('administrator', UserAdminController::class)->names([
			'index' => 'admins.list',
			'show' => 'admin.show',
		]);
	});
