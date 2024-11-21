<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class EmailTemplateData extends Data
{
	public function __construct(
		public int $id,
		public string $name,
		public string $subject,
		public array $body,
		public string $view,
		public string $type,
	) {}
}
