<?php

namespace Fitodac\Pages\Filament\Resources;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Fitodac\Pages\Models\Page;
use Fitodac\Pages\Filament\Resources\PageResource\Pages;

class PageResource extends Resource
{
	protected static ?string $model = Page::class;

	protected static ?string $navigationIcon = 'heroicon-o-document-text';

	protected static ?string $navigationGroup = 'Content';

	public static function form(Form $form): Form
	{
		return $form
			->schema([
				Section::make()
					->schema([
						TextInput::make('title')
							->required()
							->maxLength(255)
							->reactive()
							->afterStateUpdated(fn($state, callable $set) =>
							$set('slug', \Illuminate\Support\Str::slug($state))),

						TextInput::make('slug')
							->required()
							->maxLength(255)
							->unique(Page::class, 'slug', ignoreRecord: true),

						FileUpload::make('featured_image')
							->image()
							->directory('pages')
							->visibility('public')
							->maxSize(2048),

						RichEditor::make('content')
							->required()
							->columnSpan('full'),
					])
					->columns(2)
			]);
	}

	public static function table(Table $table): Table
	{
		return $table
			->columns([
				TextColumn::make('title')
					->searchable()
					->sortable(),

				TextColumn::make('slug')
					->searchable()
					->sortable(),

				ImageColumn::make('featured_image')
					->square(),

				TextColumn::make('created_at')
					->dateTime()
					->sortable(),
			])
			->filters([
				//
			])
			->actions([
				EditAction::make(),
				DeleteAction::make(),
			])
			->bulkActions([
				DeleteBulkAction::make(),
			]);
	}

	public static function getRelations(): array
	{
		return [
			//
		];
	}

	public static function getPages(): array
	{
		return [
			'index' => Pages\ListPages::route('/'),
			'create' => Pages\CreatePage::route('/create'),
			'edit' => Pages\EditPage::route('/{record}/edit'),
		];
	}
}
