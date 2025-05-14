<?php

namespace App\Filament\Pages\Auth;

use Filament\Forms\Form;
use Filament\Facades\Filament;
use Illuminate\Support\Facades\Auth;
use Filament\Forms\Components\TextInput;
use Filament\Pages\Auth\Login as BaseLogin;
use Illuminate\Validation\ValidationException;
use Filament\Http\Responses\Auth\Contracts\LoginResponse;
use DanHarrin\LivewireRateLimiting\Exceptions\TooManyRequestsException;
use Filament\Forms\Components\Component;
use Filament\Notifications\Notification;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Facades\Blade;


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
				$this->getLoginFormComponent(),
				$this->getPasswordFormComponent(),
				$this->getRememberFormComponent(),
			])
			->statePath('data');
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Get the login form component configuration
	 * -------------------------------------------------------------------------------
	 */
	protected function getLoginFormComponent(): Component
	{
		return TextInput::make('login')
			->label('Login')
			->autocomplete()
			->autofocus()
			->extraInputAttributes(['tabindex' => 1]);
	}


	/**
	 * -------------------------------------------------------------------------------
	 * Get the password form component configuration
	 * -------------------------------------------------------------------------------
	 */
	protected function getPasswordFormComponent(): Component
	{
		return TextInput::make('password')
			->label(__('filament-panels::pages/auth/login.form.password.label'))
			->hint(filament()->hasPasswordReset() ? new HtmlString(Blade::render('<x-filament::link :href="filament()->getRequestPasswordResetUrl()" tabindex="3"> {{ __(\'filament-panels::pages/auth/login.actions.request_password_reset.label\') }}</x-filament::link>')) : null)
			->password()
			->revealable(filament()->arePasswordsRevealable())
			->autocomplete('current-password')
			->extraInputAttributes(['tabindex' => 2]);
	}


	/**
	 * -------------------------------------------------------------------------------
	 * Handle validation errors during form submission
	 * -------------------------------------------------------------------------------
	 */
	protected function onValidationError(ValidationException $exception): void
	{
		Notification::make()
			->title($exception->getMessage())
			->danger()
			->send();
	}


	/**
	 * -------------------------------------------------------------------------------
	 * Authenticates the user login attempt
	 * -------------------------------------------------------------------------------
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

		if (! Filament::auth()->attempt($this->getCredentialsFromFormData($data), $data['remember'] ?? false)) {
			$this->throwFailureValidationException();
		}

		$user = Filament::auth()->user();

		// Check if user is suspended
		if ($user->status === 'suspended') {
			Auth::logout();
			throw ValidationException::withMessages([
				'data.login' => 'Your account has been suspended. Contact us for more information',
			]);
		}

		Filament::auth()->login(Auth::user(), (bool) $data['remember']);

		if ($user->hasRole(['Admin', 'Super Admin'])) {
			$this->redirect(route(config('settings.general.admin_authenticated_redirect_route')));
		} else {
			$this->redirect(route(config('settings.general.user_authenticated_redirect_route')));
		}

		session()->regenerate();
		return null;

		// return app(LoginResponse::class);
	}


	/**
	 * -------------------------------------------------------------------------------
	 * Extracts and formats credentials from form data
	 * -------------------------------------------------------------------------------
	 */
	protected function getCredentialsFromFormData(array $data): array

	{
		$login_type = filter_var($data['login'], FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

		return [
			$login_type => $data['login'],
			'password'  => $data['password'],
		];
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Throws validation exception for failed login attempts
	 * -------------------------------------------------------------------------------
	 */
	protected function throwFailureValidationException(): never
	{
		throw ValidationException::withMessages([
			'data.login' => __('filament-panels::pages/auth/login.messages.failed'),
		]);
	}
}
