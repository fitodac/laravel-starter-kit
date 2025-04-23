<?php

use Illuminate\Support\Facades\Route;
use Fitodac\Pages\Http\Controllers\PageController;

Route::get('/page/{slug}', [PageController::class, 'show'])->name('page');
