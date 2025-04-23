<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use Filament\Actions\RestoreAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Resources\Pages\EditRecord;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Form;
use App\Notifications\SendUserDetailsOnUpdateUserNotification;
use App\Enums\UserStatusEnum;
use Filament\Forms\Components\Placeholder;


class EditUser extends EditRecord
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
							->unique(ignoreRecord: true)
							->maxLength(255),

						TextInput::make('email')
							->email()
							->required()
							->unique(ignoreRecord: true)
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

	protected function getHeaderActions(): array
	{
		return [
			DeleteAction::make(),
			ForceDeleteAction::make(),
			RestoreAction::make(),
			// Action::make('impersonate')
			// 	->visible(fn($record) => Auth::user()->canImpersonate())
			// 	->action(fn($record) => Auth::user()->impersonate($record)),
		];
	}


	protected function mutateFormDataBeforeFill(array $data): array
	{
		// Ensure we're not exposing sensitive data
		unset($data['password']);

		return $data;
	}

	protected function afterSave(): void
	{
		// Refresh user's account data if needed
		$this->record->refresh();

		// Send notification to the user about the update
		if ($this->shouldNotifyUser) {
			$this->record->notify(new SendUserDetailsOnUpdateUserNotification($this->record));
		}
	}
}
