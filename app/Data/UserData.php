<?php

namespace App\Data;

use Spatie\LaravelData\Data;
use App\Data\AccountData;
use App\Models\User;
use App\Enums\UserStatusEnum;
use Illuminate\Support\Facades\Storage;

class UserData extends Data
{
	public function __construct(
		public int $id,
		public ?string $name,
		public ?string $lastname,
		public string $username,
		public string $email,
		public ?string $phone,
		public ?string $birth_date,
		public ?string $address,
		public ?string $city,
		public ?string $country,
		public ?string $zip_code,
		public ?string $profile_picture,
		public UserStatusEnum $status,
		public ?string $remember_token,
		public ?array $roles = [],
		public ?array $permissions = [],
		public ?AccountData $account,
	) {}


	/**
	 * Crear una instancia de UserData desde un modelo User
	 *
	 * @param User $user El modelo de usuario
	 * @return static
	 */
	public static function fromUser(User $user): self
	{
		return new self(
			id: $user->id,
			name: $user->name,
			lastname: $user->lastname,
			username: $user->username,
			email: $user->email,
			phone: $user->phone,
			birth_date: $user->birth_date,
			address: $user->address,
			city: $user->city,
			country: $user->country,
			zip_code: $user->zip_code,
			profile_picture: $user->profile_picture ? Storage::url($user->profile_picture) : null,
			status: UserStatusEnum::from($user->status),
			roles: $user->roles->pluck('name')->toArray(),
			permissions: $user->getAllPermissions()->pluck('name')->toArray(),
			remember_token: $user->remember_token,
			account: $user->account ? AccountData::from($user->account->toArray()) : null,
		);
	}
}
