<?php

namespace Fitodac\Pages\Filament\Resources\PageResource\Pages;

use Fitodac\Pages\Filament\Resources\PageResource;
use Filament\Resources\Pages\ListRecords;
use Filament\Actions\CreateAction;

class ListPages extends ListRecords
{
	protected static string $resource = PageResource::class;

	protected function getHeaderActions(): array
	{
		return [
			CreateAction::make(),
		];
	}
}
