<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Services\UserService;

class UserAdminController extends Controller
{

	private UserService $userService;

	public function __construct(UserService $userService)
	{
		$this->userService = $userService;
	}


	/**
	 * Display a listing of administrators
	 * 
	 * @return \Inertia\Response
	 */
	public function index(): Response
	{

		return Inertia::render(
			'admin/users/AdministratorsList',
			$this->userService->adminList()
		);
	}


	/**
	 * Display the specified administrator
	 * 
	 * @param User $user The user instance
	 * @return \Inertia\Response
	 */
	public function show(User $user): Response
	{
		$user['role'] = $user->roles->pluck('name')->first();
		return Inertia::render('admin/users/Edit', compact('user'));
	}
}
