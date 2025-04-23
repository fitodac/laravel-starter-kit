<?php

namespace Fitodac\Pages\Policies;

use App\Models\User;
use Fitodac\Pages\Models\Page;
use Illuminate\Auth\Access\HandlesAuthorization;

class PagePolicy
{
	use HandlesAuthorization;

	public function viewAny(User $user): bool
	{
		return $user->hasPermissionTo('view_any_page') || $user->hasRole('Super Admin');
	}

	public function view(User $user, Page $page): bool
	{
		return $user->hasPermissionTo('view_page') || $user->hasRole('Super Admin');
	}

	public function create(User $user): bool
	{
		return $user->hasPermissionTo('create_page') || $user->hasRole('Super Admin');
	}

	public function update(User $user, Page $page): bool
	{
		return $user->hasPermissionTo('update_page') || $user->hasRole('Super Admin');
	}

	public function delete(User $user, Page $page): bool
	{
		return $user->hasPermissionTo('delete_page') || $user->hasRole('Super Admin');
	}

	public function deleteAny(User $user): bool
	{
		return $user->hasPermissionTo('delete_any_page') || $user->hasRole('Super Admin');
	}
}
