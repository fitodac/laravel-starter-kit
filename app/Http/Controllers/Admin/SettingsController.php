<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class SettingsController extends Controller
{

	// create an index funtion

	public function index(): Response
	{

		$settings = [
			'general' => config('settings.general')
		];

		return Inertia::render('admin/Settings', compact('settings'));
	}
}
