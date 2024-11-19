<?php

namespace App\Data;

use Spatie\LaravelData\Data;
use App\Data\RoleData;
use App\Data\AccountData;

class UserData extends Data
{
	public function __construct(
		public int $id,
		public string $name,
		public string $lastname,
		public string $username,
		public string $email,
		public string $phone,
		public string $birth_date,
		public string $address,
		public string $city,
		public string $country,
		public string $zip,
		public string $job_title,
		public string $company,
		public string $bio,
		public string $profile_picture,
		public bool $status,
		// public string $remember_token,
		public ?array $roles = [],
		public ?AccountData $account,
	) {}
}
