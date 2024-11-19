<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;

class DashboardController extends Controller
{

	public function index(): Response
	{
		$total_accounts = User::count();
		$total_users = User::whereRelation('roles', 'name', 'User')->count();
		$total_admins = User::whereRelation('roles', 'name', 'Admin')->count();

		// dd($total_users);

		return Inertia::render('Dashboard', compact('total_accounts', 'total_users', 'total_admins'));
	}
}
