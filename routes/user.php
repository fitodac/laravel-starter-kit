<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;


Route::middleware('auth')->group(function () {

	Route::post('signout', [AuthenticatedSessionController::class, 'destroy'])
		->name('signout');
});

Route::middleware('guest')->group(function () {});
