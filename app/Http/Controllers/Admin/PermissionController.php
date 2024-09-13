<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{

	/**
	 * LIST
	 * 
	 * 
	 * 
	 */
	public function index()
	{
		$per_page = 15;

		$permissions = Permission::paginate($per_page);
		$guards = config('settings.auth.guard_permissions');
		$protected_permissions = config('settings.auth.protected_permissions');

		return Inertia::render(
			'admin/permissions/Permissions',
			compact(
				'permissions',
				'guards',
				'protected_permissions'
			)
		);
	}

	/**
	 * STORE
	 * 
	 * 
	 * 
	 */
	public function store(Request $request): RedirectResponse
	{

		$request->validate([
			'name' => 'required|unique:permissions,name'
		], [
			'name.required' => 'Permission name is required.',
			'name.unique' => 'Permission name already exists.',
		]);

		Permission::create(['name' => $request->name]);

		return back()->with('success', 'Permission created successfully.');
	}

	/**
	 * UPDATE
	 * 
	 * 
	 * 
	 */
	public function update(Request $request, Permission $permission): RedirectResponse
	{

		$request->validate([
			'name' => 'required|unique:permissions,name',
		], [
			'name.required' => 'Permission name is required.',
			'name.unique' => 'Permission name already exists.'
		]);

		$permission->update([
			'name' => $request->name,
		]);

		return back()->with('success', 'Permission updated successfully.');
	}

	/**
	 * DELETE
	 * 
	 * 
	 * 
	 */
	public function destroy(Permission $permission): RedirectResponse
	{
		$permission->delete();

		return back()->with('success', 'Permission deleted successfully.');
	}
}
