<?php

namespace App\Policies;

use App\Models\User;

use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
	use HandlesAuthorization;

	/**
	 * Determine whether the user can view any models.
	 *
	 * @param  \App\Models\User  $user
	 * @return bool
	 */
	public function viewAny(User $user): bool
	{
		return $user->can('view_any_user') || $user->hasRole('Super Admin');
	}

	/**
	 * Determine whether the user can view the model.
	 *
	 * @param  \App\Models\User  $user
	 * @return bool
	 */
	public function view(User $user): bool
	{
		return $user->can('view_user') || $user->hasRole('Super Admin');
	}

	/**
	 * Determine whether the user can create models.
	 *
	 * @param  \App\Models\User  $user
	 * @return bool
	 */
	public function create(User $user): bool
	{
		return $user->can('create_user') || $user->hasRole('Super Admin');
	}

	/**
	 * Determine whether the user can update the model.
	 *
	 * @param  \App\Models\User  $user
	 * @return bool
	 */
	public function update(User $user): bool
	{
		return $user->can('update_user') || $user->hasRole('Super Admin');
	}

	/**
	 * Determine whether the user can delete the model.
	 *
	 * @param  \App\Models\User  $user
	 * @return bool
	 */
	public function delete(User $user): bool
	{
		return $user->can('delete_user') || $user->hasRole('Super Admin');
	}

	/**
	 * Determine whether the user can bulk delete.
	 *
	 * @param  \App\Models\User  $user
	 * @return bool
	 */
	public function deleteAny(User $user): bool
	{
		return $user->can('delete_any_user') || $user->hasRole('Super Admin');
	}
}
