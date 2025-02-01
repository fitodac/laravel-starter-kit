<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;

class DashboardController extends Controller
{
	
	/**
	 * Display the dashboard page with user statistics
	 * 
	 * @return Response
	 */
	public function index(): Response
	{
		$total_accounts = User::count();
		$total_users = User::whereRelation('roles', 'name', 'User')->count();
		$total_admins = User::whereRelation('roles', 'name', 'Admin')->count();

		return Inertia::render('Dashboard', compact('total_accounts', 'total_users', 'total_admins'));
	}
}
