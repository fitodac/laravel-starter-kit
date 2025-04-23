<?php

namespace App\Enums;

enum UserStatusEnum: string
{
	case ACTIVE = 'active';
	case INACTIVE = 'inactive';
	case SUSPENDED = 'suspended';

	public function label(): string
	{
		return match ($this) {
			self::ACTIVE => 'Active',
			self::INACTIVE => 'Inactive',
			self::SUSPENDED => 'Suspended',
		};
	}

	public static function options(): array
	{
		return [
			self::ACTIVE->value => 'Active',
			self::INACTIVE->value => 'Inactive',
			self::SUSPENDED->value => 'Suspended',
		];
	}
}
