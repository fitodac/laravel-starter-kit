<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Form;
use App\Enums\UserStatusEnum;
use App\Notifications\SendUserDetailsOnCreateUserNotification;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Filament\Forms\Components\Placeholder;

class CreateUser extends CreateRecord
{
	protected static string $resource = UserResource::class;
	public bool $shouldNotifyUser = false;

	public function form(Form $form): Form
	{
		return $form
			->schema([
				Section::make('User Information')
					->schema([
						TextInput::make('name')
							->required()
							->maxLength(255),

						TextInput::make('lastname')
							->required()
							->maxLength(255),

						TextInput::make('username')
							->required()
							->unique()
							->maxLength(255),

						TextInput::make('email')
							->email()
							->required()
							->unique()
							->maxLength(255),

						FileUpload::make('profile_picture')
							->image()
							->directory('profile-pictures')
							->visibility('public')
							->imageResizeMode('cover')
							->imageCropAspectRatio('1:1')
							->imageResizeTargetWidth('200')
							->imageResizeTargetHeight('200'),

						Select::make('status')
							->options(UserStatusEnum::options())
							->default(UserStatusEnum::ACTIVE->value)
							->required(),

						Select::make('roles')
							->relationship('roles', 'name')
							->multiple()
							->preload()
							->required(),

						Placeholder::make('')
							->content(new \Illuminate\Support\HtmlString('<div class="border-t border-gray-500/50 pt-3 mt-3"></div>'))
							->columnSpan('full'),

						Checkbox::make('shouldNotifyUser')
							->label('Notify user about account changes')
							->helperText('Send an email notification to the user about these changes')
							->default($this->shouldNotifyUser)
							->live()
							->afterStateUpdated(function ($state, $set) {
								$this->shouldNotifyUser = $state;
							})
					]),
			]);
	}

	protected function mutateFormDataBeforeCreate(array $data): array
	{
		// Generate a random password
		$password = Str::password(10);

		// Store the password in the session for the notification
		session(['temp_user_password' => $password]);

		// Hash the password for storage
		$data['password'] = Hash::make($password);

		return $data;
	}

	protected function afterCreate(): void
	{
		// Get the password from the session
		$password = session('temp_user_password');

		// Clear the password from the session
		session()->forget('temp_user_password');

		// Send notification to the user with their credentials
		if ($this->shouldNotifyUser) {
			$this->record->notify(new SendUserDetailsOnCreateUserNotification($this->record, $password));
		}
	}
}
