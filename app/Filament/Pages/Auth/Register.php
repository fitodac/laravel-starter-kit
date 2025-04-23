<?php

namespace App\Filament\Pages\Auth;

use Exception;
use Filament\Facades\Filament;
use Illuminate\Database\Eloquent\Model;
use Filament\Forms\Components\Component;
use Filament\Forms\Components\TextInput;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Notifications\VerifyEmailNotification;
use App\Notifications\NewUserRegisteredNotification;
use Filament\Pages\Auth\Register as BaseRegister;


class Register extends BaseRegister
{
	protected function getForms(): array
	{
		return [
			'form' => $this->form(
				$this->makeForm()
					->schema([
						$this->getUsernameFormComponent(),
						$this->getEmailFormComponent(),
						$this->getPasswordFormComponent(),
						$this->getPasswordConfirmationFormComponent(),
					])
					->statePath('data')
			)
		];
	}

	protected function getUsernameFormComponent(): Component
	{
		return TextInput::make('username')
			->label(__('Username'))
			->required()
			->maxLength(255)
			->autofocus();
	}

	protected function handleRegistration(array $data): Model
	{
		$data['name'] = $data['username']; // Map username to name field

		return $this->getUserModel()::create([
			'name' => $data['name'],
			'username' => $data['username'],
			'email' => $data['email'],
			'password' => $data['password'],
		]);
	}

	protected function sendEmailVerificationNotification(Model $user): void
	{
		if (! $user instanceof MustVerifyEmail) {
			return;
		}

		if ($user->hasVerifiedEmail()) {
			return;
		}

		if (! method_exists($user, 'notify')) {
			$userClass = $user::class;

			throw new Exception("Model [{$userClass}] does not have a [notify()] method.");
		}

		$notification = app(VerifyEmailNotification::class);
		$notification->url = Filament::getVerifyEmailUrl($user);

		$user->notify($notification);

		$notificationForAdmins = app(NewUserRegisteredNotification::class);
		$notificationForAdmins->newUser = $user;

		$admins = $this->getUserModel()::permission('receive_new_user_notifications')->get();

		foreach ($admins as $admin) $admin->notify($notificationForAdmins);
	}
}
