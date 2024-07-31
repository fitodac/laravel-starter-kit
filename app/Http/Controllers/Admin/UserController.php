<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{

	public function index(Request $request)
	{
		$per_page = 15;

		$users = User::role('user')->paginate($per_page);
		$total = User::count();
		return Inertia::render('admin/users/UsersList', compact('users', 'total'));
	}


	public function create()
	{
		//
	}


	public function store(Request $request)
	{
		//
	}


	public function show(User $user)
	{
		return Inertia::render('admin/users/CreateEdit', compact('user'));
	}


	public function edit(string $id)
	{
		//
	}


	public function update(Request $request, string $id)
	{
		//
	}


	public function destroy(string $id)
	{
		//
	}

}
