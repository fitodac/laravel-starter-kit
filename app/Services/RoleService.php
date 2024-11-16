<?php

namespace App\Services;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Data\RoleData;
use App\Data\PermissionData;
use App\Notifications\RoleCreated;
use App\Notifications\RoleUpdated;
use App\Notifications\RoleDeleted;

class RoleService
{


	public function roleList(Request $request): array
	{
		$per_page = config('settings.general.per_page');

		$roles = Role::with('permissions')
			->withCount('users')
			->orderBy($request->order ?? 'created_at', $request->dir === 'ascending' ? 'asc' : 'desc')
			->paginate($per_page)
			->toArray();

		foreach ($roles['data'] as $key => $role) {
			if (isset($role->permissions) && count($role->permissions) > 0) {
				$role['permissions'] = array_map(fn($permission) => PermissionData::from($permission), $role['permissions']);
			}

			$roles['data'][$key] = RoleData::from($role);
		}

		$protected_roles = config('settings.auth.protected_roles');
		$permissions = $this->getPermissionsByGuard();

		return compact(
			'roles',
			'protected_roles',
			'permissions'
		);
	}



	public function storeRole(Request $request): Role
	{
		$request->validate([
			'name' => 'required|unique:roles,name',
		], [
			'name.required' => 'Role name is required.',
			'name.unique' => 'Role name already exists.'
		]);

		$name = preg_replace('/\s+/', ' ', $request->name);
		$name = preg_replace('/[^A-Za-z0-9\s]/', '', $name);

		$role = Role::create(['name' => trim($name)]);
		$role->givePermissionTo($request->permissions);

		$this->notifyByMail('create', $role);

		return $role;
	}


	public function updateRole(Request $request, Role $role): Role
	{
		$request->validate([
			'name' => 'required|unique:roles,name,' . $role->id,
		], [
			'name.required' => 'Role name is required.',
			'name.unique' => 'Role name already exists.'
		]);

		$name = preg_replace('/\s+/', ' ', $request->name);
		$name = preg_replace('/[^A-Za-z0-9\s]/', '', $name);

		$role->update([
			'name' => trim($name)
		]);
		$role->syncPermissions($request->permissions);

		$this->notifyByMail('update', $role);

		return $role;
	}


	public function destroyRole(Role $role): bool
	{
		$deletedRole = $role->delete();
		if ($deletedRole) $this->notifyByMail('delete', $role);

		return $deletedRole;
	}




	protected function notifyByMail($case, Role $role)
	{
		$superadmin = Role::findByName('Super Admin');

		switch ($case) {
			case 'create':
				foreach ($superadmin->users as $user) {
					$user->notify(new RoleCreated($role));
				}
				break;
			case 'update':
				foreach ($superadmin->users as $user) {
					$user->notify(new RoleUpdated($role));
				}
				break;
			case 'delete':
				foreach ($superadmin->users as $user) {
					$user->notify(new RoleDeleted($role));
				}
				break;
		}
	}


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
}
