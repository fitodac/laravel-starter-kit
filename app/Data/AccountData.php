<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class AccountData extends Data
{
	public function __construct(
		public int $id,
		public int $user_id,
		public ?string $colorMode,
		public ?string $language,
	) {}
}
