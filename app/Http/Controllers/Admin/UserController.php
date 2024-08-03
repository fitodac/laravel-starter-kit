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
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendUserDetails;

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

			// Assign a role for the user
			$role = Role::findById($request->role);
			$user->assignRole($role);

			// Send email with user details if send_details is true
			if ($request->has('send_details') && $request->send_details) {
				Mail::to($user->email)->send(new SendUserDetails($user, $request->password));
			}

			// Redirect to the user's profile page
			return redirect()->route('dashboard.user.show', $user);
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

			// Assign a role for the user
			$role = Role::findById($request->role);
			$user->syncRoles([$role]);

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
