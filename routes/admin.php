<?php

use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

// Route::group([''])

// Route::middleware(['auth', 'permission:admin_access'])
// ->prefix('dashboard/corporate')
// ->name('dashboard.')
// ->group(function () {
// 	Route::resource('user', UserController::class)
// 		->names([
// 			'index' => 'users.list',
// 				'create' => 'user.create',
// 				'store' => 'user.store',
// 				'show' => 'user.show',
// 				'edit' => 'user.edit',
// 				'update' => 'user.update',
// 				'destroy' => 'user.destroy',
// 		]);
// });


Route::group(['middleware' => ['can:admin_access']], function () {
	Route::prefix('dashboard/corporate')->name('dashboard.')->group(function () {
		Route::resource('user', UserController::class)->names([
			'index' => 'users.list'
		]);
	});
});
