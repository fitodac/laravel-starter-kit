<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use App\Http\Requests\Admin\UpdateUserRequest;
use App\Http\Requests\Admin\CreateUserRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;

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
		return Inertia::render('admin/users/Create');
	}


	public function store(CreateUserRequest $request)
	{
		try {
			$user = User::create($request->validated());
			return redirect()->route('dashboard.user.show', $user);
			// return back()->with('success', 'User created successfully.');
		} catch (\Exception $e) {
			Log::error('Error updating user: ' . $e->getMessage());
			return back()->with('error', 'An error occurred while storing user information.');
		}
	}


	public function show(User $user)
	{
		$user['role'] = $user->roles->pluck('name')->first();
		return Inertia::render('admin/users/Edit', compact('user'));
	}


	public function edit(User $user)
	{
		$user['role'] = $user->roles->pluck('name')->first();
		return Inertia::render('admin/users/Edit', compact('user'));
	}

	public function update(UpdateUserRequest $request, User $user): RedirectResponse
	{
		try {
			$user->update($request->validated());
			return back()->with('success', 'User updated successfully.');
		} catch (\Exception $e) {
			Log::error('Error updating user: ' . $e->getMessage());
			return back()->with('error', 'An error occurred while updating user information.');
		}
	}


	public function destroy(string $id)
	{
		//
	}
}
