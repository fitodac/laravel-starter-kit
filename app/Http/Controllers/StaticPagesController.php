<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class StaticPagesController extends Controller
{


	public function homePage(): Response
	{
		return Inertia::render('home/Index');
	}

	/**
	 * --------------------------------------------------
	 * Demo pages
	 * --------------------------------------------------
	 * You can remove these pages if you want
	 */
	public function mobileDemoPage(): Response
	{
		return Inertia::render('demo/WebMobile');
	}

	public function dashboardDemoPage(): Response
	{
		return Inertia::render('demo/Dashboard');
	}

	public function webAppMobilePage(): Response
	{
		return Inertia::render('demo/WebAppMobile');
	}
}
