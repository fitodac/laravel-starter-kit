<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Filament\Notifications\Notification;
use App\Notifications\VerifyEmailNotification;
use BezhanSalleh\FilamentShield\Contracts\HasShieldPermissions;

class UserResource extends Resource implements HasShieldPermissions
{
	protected static ?string $model = User::class;
	protected static ?string $slug = 'admin/users';
	protected static ?string $navigationIcon = 'heroicon-o-users';
	protected static bool $shouldRegisterNavigation = true;
	protected static ?int $navigationSort = 300;

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
	 * Filter users to only show those with the 'User' role
	 */
	public static function getEloquentQuery(): Builder
	{
		return parent::getEloquentQuery()->whereHas('roles', function (Builder $query) {
			$query->where('name', 'User');
		});
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
				//
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
				Tables\Columns\TextColumn::make('username')
					->sortable()
					->searchable(),
				Tables\Columns\TextColumn::make('email')
					->sortable()
					->searchable(),
				Tables\Columns\TextColumn::make('email_verified_at')
					->label('Email Verified')
					->dateTime('d m Y H:i'),
				Tables\Columns\TextColumn::make('created_at')
					->label('Registered At')
					->dateTime('d m Y H:i'),
			])
			->filters([
				Tables\Filters\TernaryFilter::make('verified')
					->label(__('Verified email'))
					->attribute('email_verified_at')
					->nullable(),
				Tables\Filters\Filter::make('unverified')
					->label('Email Not Verified')
					->query(fn(Builder $query) => $query->whereNull('email_verified_at')),
			])
			->actions([
				Tables\Actions\EditAction::make(),

				Tables\Actions\Action::make('resend_verification_email')
					->label('Resend Verification Email')
					->icon('heroicon-o-envelope')
					->authorize(fn(User $record) => !$record->hasVerifiedEmail())
					->action(function (User $record) {
						$notification = app(VerifyEmailNotification::class);
						$notification->url = filament()->getVerifyEmailUrl($record);
						$record->notify($notification);

						Notification::make()
							->title(__("Verification email has been resent."))
							->send();
					})
					->requiresConfirmation(),
			])
			->bulkActions([
				Tables\Actions\BulkActionGroup::make([
					Tables\Actions\DeleteBulkAction::make(),
				]),
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
	 * Defines the available pages for the User resource
	 * -------------------------------------------------------------------------------
	 * This method configures the routing and page components for the User resource,
	 * including list, create and edit pages in the admin panel.
	 * 
	 * @return array An array of page configurations
	 */
	public static function getPages(): array
	{
		return [
			'index' => Pages\ListUsers::route('/'),
			'create' => Pages\CreateUser::route('/create'),
			'edit' => Pages\EditUser::route('/{record}/edit'),
		];
	}
}
