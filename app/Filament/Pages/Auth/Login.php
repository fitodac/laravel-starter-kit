<?php

namespace App\Filament\Pages\Auth;

use Filament\Forms\Form;
use Filament\Actions\Action;
use Filament\Facades\Filament;
use Illuminate\Support\Facades\Auth;
use Filament\Forms\Components\TextInput;
use Filament\Pages\Auth\Login as BaseLogin;
use Illuminate\Validation\ValidationException;
use Filament\Http\Responses\Auth\Contracts\LoginResponse;
use DanHarrin\LivewireRateLimiting\Exceptions\TooManyRequestsException;


class Login extends BaseLogin
{
	/**
	 * -------------------------------------------------------------------------------
	 * Build the login form structure
	 * -------------------------------------------------------------------------------
	 * @param Form $form The form instance to be configured
	 * @return Form Returns the configured form with email/username, password and remember me fields
	 */
	public function form(Form $form): Form
	{
		return $form
			->schema([
				TextInput::make('login')
					->label(__('Email or Username'))
					->required()
					->autocomplete()
					->autofocus(),
				$this->getPasswordFormComponent(),
				$this->getRememberFormComponent(),
			]);
	}



	/**
	 * -------------------------------------------------------------------------------
	 * Authenticates the user login attempt
	 * -------------------------------------------------------------------------------
	 * This method handles the authentication process by:
	 * 1. Checking rate limiting
	 * 2. Validating credentials (email/username and password)
	 * 3. Attempting authentication
	 * 4. Redirecting based on user role
	 * 
	 * @throws ValidationException When authentication fails or rate limit is exceeded
	 * @throws TooManyRequestsException When too many login attempts are made
	 * @return LoginResponse|null Returns null after successful redirect, or LoginResponse
	 */
	public function authenticate(): ?LoginResponse
	{
		try {
			$this->rateLimit(5);
		} catch (TooManyRequestsException $exception) {
			throw ValidationException::withMessages([
				'login' => __('filament-panels::pages/auth/login.messages.throttled', [
					'seconds' => $exception->secondsUntilAvailable,
					'minutes' => ceil($exception->secondsUntilAvailable / 60),
				]),
			]);
		}

		$data = $this->form->getState();

		$credentials = [
			'password' => $data['password'],
		];

		$loginType = filter_var($data['login'], FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
		$credentials[$loginType] = $data['login'];

		if (! Auth::attempt($credentials, $data['remember'] ?? false)) {
			throw ValidationException::withMessages([
				'login' => __('filament-panels::pages/auth/login.messages.failed'),
			]);
		}

		Filament::auth()->login(Auth::user(), (bool) $data['remember']);

		$user = Auth::user();

		if ($user->hasRole(['Admin', 'Super Admin'])) {
			$this->redirect(route(config('settings.general.admin_authenticated_redirect_route')));
		} else {
			$this->redirect(route(config('settings.general.user_authenticated_redirect_route')));
		}

		return null;
	}
}
