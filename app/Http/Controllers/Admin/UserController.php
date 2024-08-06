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
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Laravel\Facades\Image;
use Illuminate\Support\Facades\Storage;


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
		return redirect()->route('dashboard.user.edit', ['user' => $user]);
	}


	public function edit(User $user)
	{

		$auth = Auth::user();
		$permission = $auth->getPermissionsViaRoles()->pluck('name')->first();

		$user['role'] = $user->roles->pluck('name')->first();
		return Inertia::render('admin/users/Edit', compact('user', 'permission'));
	}

	public function update(UpdateUserRequest $request, User $user): RedirectResponse
	{
		try {
			$data = $request->validated();

			// Encrypt password if it's provided
			if (!empty($data['password'])) {
				$data['password'] = bcrypt($data['password']);
			}

			// dd($data);

			$user->update($data);

			// Assign a role for the user
			if (!empty($data['role'])) {
				$role = Role::findById($data['role']);
				$user->syncRoles([$role]);
			}


			return back()->with('success', 'User updated successfully.');
		} catch (\Exception $e) {
			Log::error('Error updating user: ' . $e->getMessage());
			return back()->with('error', 'An error occurred while updating user information.');
		}
	}


	public function update_image_profile(User $user, Request $request)
	{
		// dd($request->hasFile('profile_picture'));

		try {
			if ($request->hasFile('profile_picture')) {
				$currentImagePath = '/public/img/users/avatars/' . $user->profile_picture;
				if (Storage::exists($currentImagePath)) {
					Storage::delete($currentImagePath);
				}


				$file = $request->file('profile_picture');
				// $filename = time() . '.' . $file->getClientOriginalExtension();
				$filename = time() . '.webp';
				$image = Image::read($file);
				$image
					->resize(256, 256)
					// ->encodeByMediaType('image/webp', progressive: true, quality: 100)
					->toWebp(90)
					->save("storage/img/users/avatars/$filename");

				if ($filename) {
					$user->update(['profile_picture' => $filename]);
				}
			}
			// dd($user->profile_picture);
		} catch (\Exception $e) {
			Log::error('Error updating image profile: ' . $e->getMessage());
			return back()->with('error', 'An error occurred while updating a user image profile.');
		}
	}


	public function remove_image_profile(User $user)
	{

		$imagePath = '/public/img/users/avatars/' . $user->profile_picture;

		try {
			if (Storage::exists($imagePath)) {
				Storage::delete($imagePath);
			}

			$user->update(['profile_picture' => null]);
			return back()->with('success', 'Image removed successfully.');
		} catch (\Exception $e) {
			Log::error('Error removing image profile: ' . $e->getMessage());
			return back()->with('error', 'An error occurred while removing a user image profile.');
		}
	}


	public function destroy(string $id)
	{
		//
	}
}
