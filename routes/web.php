<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StaticPagesController;
use App\Http\Controllers\Auth\SocialiteController;


Route::get('/', [StaticPagesController::class, 'homePage'])
	->name('home');
// ->middleware(['web'])  // Add web middleware group for session, CSRF protection etc.
// ->middleware(['cache.headers:public;max_age=3600;etag']); // Add cache headers for better performance

/**
 * ----------------------------------------------------------------------------
 * Social login
 * ----------------------------------------------------------------------------
 */
Route::get('/auth/{provider}/redirect', [SocialiteController::class, 'redirect'])
	->name('socialite.redirect');
Route::get('/auth/{provider}/callback', [SocialiteController::class, 'callback'])
	->name('socialite.callback');


/**
 * ----------------------------------------------------------------------------
 * Demo pages
 * ----------------------------------------------------------------------------
 * You can remove these pages if you want
 */
Route::get('/dashboard', [StaticPagesController::class, 'dashboardDemoPage'])
	->name('demo.dashboard');

Route::get('/mobile', [StaticPagesController::class, 'mobileDemoPage'])
	->name('demo.mobile');

Route::get('/mobile-web-app', [StaticPagesController::class, 'webAppMobilePage'])
	->name('demo.mobile.webApp');

Route::get('/ui', fn() => redirect('/ui/index.html'));
