<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\User;
use App\Models\Session;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\Admin\UpdateUserRequest;
use App\Http\Requests\Admin\CreateUserRequest;
use App\Services\UserService;
use Inertia\Response;


class UserController extends Controller
{

	private UserService $userService;

	public function __construct(UserService $userService)
	{
		$this->userService = $userService;
	}


	/**
	 * Display a listing of users
	 * 
	 * @return \Inertia\Response
	 */
	public function index(): Response
	{
		return Inertia::render(
			'admin/users/UsersList',
			$this->userService->userList()
		);
	}


	/**
	 * Display the user creation form
	 * 
	 * @return \Inertia\Response
	 */
	public function create(): Response
	{
		return Inertia::render('admin/users/Create');
	}


	/**
	 * Store a newly created user in storage
	 * 
	 * @param CreateUserRequest $request
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function store(CreateUserRequest $request): RedirectResponse
	{
		$user = $this->userService->storeUser($request);

		return redirect()->route('admin.user.show', $user);
	}


	/**
	 * Display the specified user
	 * 
	 * @param User $user
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function show(User $user): RedirectResponse
	{
		return redirect()->route('admin.user.edit', ['user' => $user]);
	}


	/**
	 * Display the user edit form
	 * 
	 * @param User $user
	 * @return \Inertia\Response
	 */
	public function edit(User $user): Response
	{
		return Inertia::render(
			'admin/users/Edit',
			$this->userService->editUser($user)
		);
	}


	/**
	 * Update the specified user in storage
	 * 
	 * @param UpdateUserRequest $request
	 * @param User $user
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function update(UpdateUserRequest $request, User $user): RedirectResponse
	{
		$user = $this->userService->updateUser($request, $user);

		if (!$user) return back()->with('error', 'User not updated.');

		return back()->with('success', 'User updated successfully.');
	}


	/**
	 * Update user profile image
	 * 
	 * @param User $user
	 * @param Request $request
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function updateImageProfile(User $user, Request $request): RedirectResponse
	{
		$this->userService->updateImageProfile($user, $request);
	}


	/**
	 * Remove the user's profile image
	 * 
	 * @param User $user
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function removeImageProfile(User $user): RedirectResponse
	{
		$this->userService->removeImageProfile($user);
		return back()->with('success', 'Image removed successfully.');
	}


	/**
	 * Invalidate a specific user session
	 * 
	 * @param int $id Session ID to invalidate
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function invalidate_session($id): RedirectResponse
	{
		Session::findOrFail($id)->delete();
		return back()->with('success', 'The session was closed.');
	}


	/**
	 * Remove the specified user from storage
	 * 
	 * @param User $user
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function destroy(User $user): RedirectResponse
	{

		return redirect()
			->route('admin.user.index')
			->with('success', 'The account was deleted.');
	}
}
