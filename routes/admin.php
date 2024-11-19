<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\UserAdminController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\DashboardController;


Route::get('dashboard', [DashboardController::class, 'index'])
	->middleware(['auth', 'verified'])
	->name('dashboard');

Route::middleware(['auth', 'verified'])
	->prefix('dashboard/corporate')
	->name('dashboard.')
	->group(function () {

		/**
		 * Users
		 * 
		 * 
		 * 
		 */
		Route::get('users', [UserController::class, 'index'])
			->middleware(['role_or_permission:Super Admin|Can see users'])
			->name('users.list');

		Route::get('users/create', [UserController::class, 'create'])
			->middleware(['role_or_permission:Super Admin|Can create new user'])
			->name('user.create');

		Route::post('users', [UserController::class, 'store'])
			->middleware(['role_or_permission:Super Admin|Can create new user'])
			->name('user.store');

		Route::get('users/{user}', [UserController::class, 'show'])
			->middleware(['role_or_permission:Super Admin|Can see users'])
			->name('user.show');

		Route::get('users/{user}/edit', [UserController::class, 'edit'])
			->middleware(['role_or_permission:Super Admin|Can edit user'])
			->name('user.edit');

		Route::match(['put', 'patch'], 'users/{user}', [UserController::class, 'update'])
			->middleware(['role_or_permission:Super Admin|Can edit user'])
			->name('user.update');

		Route::delete('users/{user}', [UserController::class, 'destroy'])
			->middleware(['role_or_permission:Super Admin|Can edit user'])
			->name('user.destroy');

		Route::middleware(['role_or_permission:Super Admin|Can edit user'])->group(function () {
			Route::post('users/image-profile/{user}', [UserController::class, 'update_image_profile'])->name('user.update_image_profile');
			Route::delete('users/image-profile/{user}', [UserController::class, 'remove_image_profile'])->name('user.remove_image_profile');
		});


		/**
		 * Administrators
		 * 
		 * 
		 * 
		 */
		Route::get('administrators', [UserAdminController::class, 'index'])
			->middleware(['role_or_permission:Super Admin|Can see admins'])
			->name('admins.list');

		// Route::get('administrator/create', [UserAdminController::class, 'create'])->name('admin.create');
		// Route::post('administrator', [UserAdminController::class, 'store'])->name('admin.store');
		// Route::get('administrator/{user}', [UserAdminController::class, 'show'])->name('admin.show');
		// Route::get('administrator/{user}/edit', [UserAdminController::class, 'edit'])->name('admin.edit');
		// Route::match(['put', 'patch'], 'administrator/{user}', [UserAdminController::class, 'update'])->name('admin.update');
		// Route::delete('administrator/{user}', [UserAdminController::class, 'destroy'])->name('admin.destroy');

		/**
		 * Sessions
		 * 
		 * 
		 * 
		 */
		Route::delete('session/{id}/invalidate', [UserController::class, 'invalidate_session'])
			->middleware(['role_or_permission:Super Admin'])
			->name('session.invalidate');


		/**
		 * Roles
		 * 
		 * 
		 * 
		 */
		Route::get('roles', [RoleController::class, 'index'])
			->middleware(['role_or_permission:Super Admin|Can see roles and permissions'])
			->name('role.list');

		Route::post('roles', [RoleController::class, 'store'])
			->middleware(['role_or_permission:Super Admin|Can create new role'])
			->name('role.store');

		Route::middleware(['check_protected_role', 'role_or_permission:Super Admin|Can edit role'])->group(function () {
			Route::match(['put', 'patch'], 'roles/{role}', [RoleController::class, 'update'])
				->name('role.update');

			Route::delete('roles/{role}', [RoleController::class, 'destroy'])
				->name('role.destroy');
		});

		/**
		 * Permissions
		 * 
		 * 
		 * 
		 */
		Route::get('permissions', [PermissionController::class, 'index'])
			->middleware(['role_or_permission:Super Admin|Can see roles and permissions'])
			->name('permission.list');

		Route::post('permissions', [PermissionController::class, 'store'])
			->middleware(['role_or_permission:Super Admin|Can create new permission'])
			->name('permission.store');

		Route::match(['put', 'patch'], 'permissions/{permission}', [PermissionController::class, 'update'])
			->middleware(['role_or_permission:Super Admin|Can edit permission'])
			->name('permission.update');

		Route::delete('permissions/{permission}', [PermissionController::class, 'destroy'])
			->middleware(['role_or_permission:Super Admin|Can edit permission'])
			->name('permission.destroy');


		/**
		 * Notifications
		 * 
		 * 
		 * 
		 */
		Route::get('/notifications', [NotificationController::class, 'index'])->name('notification.list');
		Route::post('/notifications', [NotificationController::class, 'store'])->name('notification.store');
		Route::match(['put', 'patch'], 'notifications/{notification}', [NotificationController::class, 'update'])->name('notification.update');
		Route::delete('notifications/{notification}', [NotificationController::class, 'destroy'])->name('notification.destroy');

		Route::post('/notifications/{notification}/mark-as-read', [NotificationController::class, 'markAsRead'])->name('notification.markAsRead');
		Route::post('/notifications/mark-all-as-read', [NotificationController::class, 'markAllAsRead'])->name('notification.markAllAsRead');
	});


Route::impersonate();
