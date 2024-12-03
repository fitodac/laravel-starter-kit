<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;

class AdminController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index(): Response
	{
		$total_accounts = User::count();
		$total_users = User::whereRelation('roles', 'name', 'User')->count();
		$total_admins = User::whereRelation('roles', 'name', 'Admin')->count();

		return Inertia::render('admin/Dashboard', compact('total_accounts', 'total_users', 'total_admins'));
	}
}
