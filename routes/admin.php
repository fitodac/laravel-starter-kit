<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\UserAdminController;
use App\Http\Middleware\CheckRoleAccess;

Route::middleware(['auth', 'can:admin_access'])
	->prefix('dashboard/corporate')
	->name('dashboard.')
	->group(function () {
		Route::get('users', [UserController::class, 'index'])->name('users.list');
		Route::get('user/create', [UserController::class, 'create'])->name('user.create');
		Route::post('user', [UserController::class, 'store'])->name('user.store');
		Route::get('user/{user}', [UserController::class, 'show'])->name('user.show');
		Route::get('user/{user}/edit', [UserController::class, 'edit'])
			->middleware(CheckRoleAccess::class)
			->name('user.edit');
		Route::match(['put', 'patch'], 'user/{user}', [UserController::class, 'update'])->name('user.update');
		Route::delete('user/{user}', [UserController::class, 'destroy'])->name('user.destroy');
	});



Route::middleware(['auth', 'can:super_admin_access'])
	->prefix('dashboard/corporate')
	->name('dashboard.')
	->group(function () {

		Route::get('administrators', [UserAdminController::class, 'index'])->name('admins.list');
		// Route::get('administrator/create', [UserAdminController::class, 'create'])->name('admin.create');
		// Route::post('administrator', [UserAdminController::class, 'store'])->name('admin.store');
		// Route::get('administrator/{user}', [UserAdminController::class, 'show'])->name('admin.show');
		// Route::get('administrator/{user}/edit', [UserAdminController::class, 'edit'])->name('admin.edit');
		// Route::match(['put', 'patch'], 'administrator/{user}', [UserAdminController::class, 'update'])->name('admin.update');
		// Route::delete('administrator/{user}', [UserAdminController::class, 'destroy'])->name('admin.destroy');
	});
