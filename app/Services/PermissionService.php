<?php

namespace App\Services;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Data\PermissionData;
use App\Data\RoleData;
use App\Notifications\PermissionCreated;
use App\Notifications\PermissionUpdated;
use App\Notifications\PermissionDeleted;

class PermissionService
{

	public function permissionList(Request $request): array
	{
		$per_page = config('settings.general.per_page');

		$permissions = Permission::with('roles')
			->orderBy($request->order ?? 'created_at', $request->dir === 'ascending' ? 'asc' : 'desc')
			->paginate($per_page)
			->toArray();

		foreach ($permissions['data'] as $key => $permission) {
			if (isset($permission['roles']) && count($permission['roles']) > 0) {
				$permission['roles'] = array_map(fn($role) => RoleData::from($role), $permission['roles']);
			}

			$permissions['data'][$key] = PermissionData::from($permission);
		}

		$guards = config('settings.auth.guard_permissions');
		$protected_permissions = config('settings.auth.protected_permissions');

		$roles = RoleData::collect(Role::all()->toArray());

		return compact(
			'permissions',
			'guards',
			'protected_permissions',
			'roles'
		);
	}


	public function storePermission(Request $request): Permission
	{
		$request->validate([
			'name' => 'required|unique:permissions,name'
		], [
			'name.required' => 'Permission name is required.',
			'name.unique' => 'Permission name already exists.',
		]);

		$name = preg_replace('/\s+/', ' ', $request->name);
		$name = preg_replace('/[^A-Za-z0-9\s]/', '', $name);

		$permission = Permission::create(['name' => $name]);

		$this->notifyByMail('create', $permission);

		return $permission;
	}


	public function updatePermission(Request $request, Permission $permission): Permission
	{
		$request->validate([
			'name' => 'required|unique:permissions,name',
		], [
			'name.required' => 'Permission name is required.',
			'name.unique' => 'Permission name already exists.'
		]);

		$name = preg_replace('/\s+/', ' ', $request->name);
		$name = preg_replace('/[^A-Za-z0-9\s]/', '', $name);

		$permission->update(['name' => $name]);

		$this->notifyByMail('update', $permission);

		return $permission;
	}


	public function destroyPermission(Permission $permission): bool
	{
		$user = auth()->user();
		$user->notify(new PermissionDeleted($permission));

		$deletedPermission = $permission->delete();
		if ($deletedPermission) $this->notifyByMail('delete', $permission);

		return $deletedPermission;
	}


	/**
	 * Send email notifications to all users with the Super Admin role.
	 *
	 * @param string $case
	 * @param Permission $permission
	 * @return void
	 */
	protected function notifyByMail($case, Permission $permission)
	{
		$superadmin = Role::findByName('Super Admin');

		switch ($case) {
			case 'create':
				foreach ($superadmin->users as $user) {
					$user->notify(new PermissionCreated($permission));
				}
				break;
			case 'update':
				foreach ($superadmin->users as $user) {
					$user->notify(new PermissionUpdated($permission));
				}
				break;
			case 'delete':
				foreach ($superadmin->users as $user) {
					$user->notify(new PermissionDeleted($permission));
				}
				break;
		}
	}
}
