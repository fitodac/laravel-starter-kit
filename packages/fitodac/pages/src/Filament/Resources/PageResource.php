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
	protected static ?string $slug = 'admin/pages';
	protected static ?string $navigationIcon = 'heroicon-o-tv';
	protected static ?string $navigationGroup = 'Content';
	protected static bool $shouldRegisterNavigation = true;
	protected static ?int $navigationSort = -2;


	/**
	 * -------------------------------------------------------------------------------
	 * Get the permission prefixes for this resource
	 * -------------------------------------------------------------------------------
	 * 
	 * This method defines the available permission prefixes that can be used to control
	 * access to different operations on this resource. These prefixes are used by
	 * FilamentShield to generate the appropriate permissions.
	 * 
	 * @return array An array of permission prefix strings
	 */
	public static function getPermissionPrefixes(): array
	{
		return [
			'view',
			'view_any',
			'create',
			'update',
			'delete',
			'delete_any'
		];
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Get the navigation badge to display in the sidebar
	 * -------------------------------------------------------------------------------
	 * 
	 * This method returns a string that will be shown as a badge in the navigation menu
	 * next to this resource's label. In this case, it displays the total count of User records.
	 * 
	 * @return string|null The badge text to display, or null if no badge should be shown
	 */
	public static function getNavigationBadge(): ?string
	{
		return static::getModel()::count();
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Configure the form for creating/editing pages
	 * -------------------------------------------------------------------------------
	 * This method defines the form fields and their layout for the Page resource.
	 * It includes fields for the page title, URL slug, featured image, and content.
	 * 
	 * @param Form $form The form instance to configure
	 * @return Form The configured form instance
	 */
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

	/**
	 * -------------------------------------------------------------------------------
	 * Configures the table display for the User resource
	 * -------------------------------------------------------------------------------
	 * This method defines how user data is displayed in the admin panel table,
	 * including columns, filters, and available actions.
	 * 
	 * @param Table $table The table instance to configure
	 * @return Table The configured table instance
	 */
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

	/**
	 * -------------------------------------------------------------------------------
	 * Get the pages that make up the resource.
	 * -------------------------------------------------------------------------------
	 * 
	 * This method defines the available pages/routes for this resource:
	 * - index: List view of all pages
	 * - create: Form to create new pages
	 * - edit: Form to modify existing pages
	 * 
	 * @return array Array of page classes and their corresponding routes
	 */
	public static function getPages(): array
	{
		return [
			'index' => Pages\ListPages::route('/'),
			'create' => Pages\CreatePage::route('/create'),
			'edit' => Pages\EditPage::route('/{record}/edit'),
		];
	}
}
