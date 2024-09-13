<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

use App\Models\User;

class RoleController extends Controller
{

	/**
	 * getPermissionsByGuard
	 */
	protected function getPermissionsByGuard()
	{
		$guards = config('settings.auth.guard_permissions');
		$permissions = [];

		foreach ($guards as $guard_name) {
			$permissions[$guard_name] = Permission::where('guard_name', $guard_name)->get();
		}

		return $permissions;
	}

	/**
	 * LIST
	 * 
	 * 
	 * 
	 */
	public function index()
	{
		$per_page = 15;
		$roles = Role::with('permissions')->withCount('users')->paginate($per_page);
		$undeletable_roles = config('settings.auth.undeletable_roles');

		return Inertia::render('admin/roles/Roles', compact('roles', 'undeletable_roles'));
	}

	/**
	 * CREATE
	 * 
	 * 
	 * 
	 */
	public function create()
	{
		$permissions = $this->getPermissionsByGuard();
		return Inertia::render('admin/roles/CreateEdit', compact('permissions'));
	}

	/**
	 * STORE
	 * 
	 * 
	 * 
	 */
	public function store(Request $request)
	{

		$request->validate([
			'name' => 'required|unique:roles,name',
		], [
			'name.required' => 'Role name is required.',
			'name.unique' => 'Role name already exists.'
		]);


		$role = Role::create([
			'name' => $request->name
		]);

		$role->givePermissionTo($request->permissions);

		return redirect()->route('dashboard.roles.list')->with('success', 'Role created successfully.');
	}

	/**
	 * EDIT
	 * 
	 * 
	 * 
	 */
	public function edit(Role $role)
	{
		$role = $role->loadCount('users')->load('permissions');
		$permissions = $this->getPermissionsByGuard();
		$protected_roles = config('settings.auth.protected_roles');

		return Inertia::render('admin/roles/CreateEdit', compact('role', 'permissions', 'protected_roles'));
	}

	/**
	 * UPDATE
	 * 
	 * 
	 * 
	 */
	public function update(Request $request, string $id)
	{

		$request->validate([
			'name' => 'required|unique:roles,name,' . $id,
		], [
			'name.required' => 'Role name is required.',
			'name.unique' => 'Role name already exists.',
		]);

		$role = Role::find($id);
		$role->update(['name' => $request->name]);
		$role->syncPermissions($request->permissions);

		return redirect()->route('dashboard.roles.list')->with('success', 'Role updated successfully.');
	}

	/**
	 * DELETE
	 * 
	 * 
	 * 
	 */
	public function destroy(Role $role)
	{
		$role->delete();
		return redirect()->route('dashboard.roles.list')->with('success', 'Role deleted successfully.');
	}
}
