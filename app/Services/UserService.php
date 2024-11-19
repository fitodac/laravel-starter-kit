<?php

namespace App\Services;

use App\Models\User;
use App\Data\RoleData;
use Illuminate\Http\Request;
use App\Mail\SendUserDetails;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Admin\UpdateUserRequest;
use App\Http\Requests\Admin\CreateUserRequest;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image;


class UserService
{

	/**
	 * Retrieve a list of users.
	 *
	 * @return array
	 */
	public function userList()
	{
		$per_page = config('settings.general.per_page');

		$users = User::role('User')->with('sessions')->paginate($per_page);
		$total = User::count();

		return compact('users', 'total');
	}


	public function storeUser(CreateUserRequest $request)
	{
		$user = User::create($request->validated());

		// Assign a role for the user
		$role = Role::findById($request->role);
		$user->assignRole($role);

		// Send email with user details if send_details is true
		if ($request->has('send_details') && $request->send_details) {
			Mail::to($user->email)->send(new SendUserDetails($user, $request->password));
		}

		return $user;
	}


	public function editUser(User $user)
	{
		$auth = Auth::user();
		$permission = $auth->getPermissionsViaRoles()->pluck('name')->first();

		$user['role'] = $user->roles->pluck('name')->first();

		$sessions = $user->sessions;

		$roles = RoleData::collect(Role::all());

		return compact('user', 'sessions', 'permission', 'roles');
	}


	public function updateUser(UpdateUserRequest $request, User $user)
	{
		$data = $request->validated();

		// Encrypt password if it's provided
		if (!empty($data['password'])) {
			$data['password'] = bcrypt($data['password']);
		}

		$user->update($data);

		// Assign a role for the user
		if (!empty($data['role'])) {
			$role = Role::findById($data['role']);
			$user->syncRoles([$role]);
		}

		return $user;
	}


	public function updateImageProfile(User $user, Request $request)
	{
		if ($request->hasFile('profile_picture')) {
			$currentImagePath = '/public/img/users/avatars/' . $user->profile_picture;
			if (Storage::exists($currentImagePath)) {
				Storage::delete($currentImagePath);
			}


			$file = $request->file('profile_picture');
			$filename = time() . '.webp';
			$image = Image::read($file);
			$image
				->resize(256, 256)
				->toWebp(100)
				->save("storage/img/users/avatars/$filename");

			if ($filename) {
				$user->update(['profile_picture' => $filename]);
			}
		}
	}



	public function removeImageProfile(User $user){
		$imagePath = '/public/img/users/avatars/' . $user->profile_picture;

		if (Storage::exists($imagePath)) {
			Storage::delete($imagePath);
		}

		$user->update(['profile_picture' => null]);
	}



	public function adminList()
	{
		$per_page = config('settings.general.per_page');

		$users = User::role('Admin')->paginate($per_page);
		$total = User::count();

		return compact('users', 'total');
	}
}
