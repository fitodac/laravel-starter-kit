<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Spatie\Permission\Models\Role;


use App\Services\RoleService;

class RoleController extends Controller
{

	private RoleService $roleService;

	public function __construct(RoleService $roleService)
	{
		$this->roleService = $roleService;
	}


/**
 * Role Controller
 * 
 * This controller handles the CRUD operations for roles management
 * including listing, creating, updating and deleting roles.
 */
	public function index(Request $request): Response
	{
		return Inertia::render(
			'admin/roles/Roles',
			$this->roleService->roleList($request)
		);
	}

	
	/**
	 * Store a newly created role in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function store(Request $request): RedirectResponse
	{
		$page = $request->query('page', 1);

		$role = $this->roleService->storeRole($request);

		if (!$role) return back()->with('error', 'Role creation failed.');

		return redirect()
			->route('admin.role.list', compact('page'))
			->with('success', 'Role created successfully.');
	}

	
	/**
	 * Update the specified role in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Spatie\Permission\Models\Role  $role
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function update(Request $request, Role $role): RedirectResponse
	{
		$page = $request->query('page', 1);

		$role = $this->roleService->updateRole($request, $role);

		if (!$role) return back()->with('error', 'Role update failed.');

		return redirect()
			->route('admin.role.list', compact('page'))
			->with('success', 'Role updated successfully.');
	}

	
	/**
	 * Remove the specified role from storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Spatie\Permission\Models\Role  $role
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function destroy(Request $request, Role $role): RedirectResponse
	{
		$page = $request->query('page', 1);

		$role = $this->roleService->destroyRole($role);

		if (!$role) return back()->with('error', 'Role delete failed.');

		return redirect()
			->route('admin.role.list', compact('page'))
			->with('success', 'Role deleted successfully.');
	}
}
