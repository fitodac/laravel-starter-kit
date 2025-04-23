<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Validator;


class SocialiteController extends Controller
{
	/**
	 * ----------------------------------------------------------------------------
	 * Redirect the user to the specified OAuth provider's authentication page.
	 * ----------------------------------------------------------------------------
	 * @param string $provider The OAuth provider (e.g., 'google')
	 * @return \Symfony\Component\HttpFoundation\RedirectResponse
	 */
	public function redirect(string $provider)
	{
		$this->validateProvider($provider);

		return Socialite::driver($provider)->redirect();
	}


	/**
	 * ----------------------------------------------------------------------------
	 * Handle the callback from the OAuth provider after user authentication.
	 * ----------------------------------------------------------------------------
	 * @param string $provider The OAuth provider (e.g., 'google')
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function callback(string $provider)
	{
		$this->validateProvider($provider);

		$response = Socialite::driver($provider)->user();

		$user = User::firstWhere(['email' => $response->getEmail()]);

		if ($user) {
			$user->update([$provider . '_id' => $response->getId()]);
		} else {
			$user = User::create([
				$provider . '_id' => $response->getId(),
				'username'        => explode('@', $response->getEmail())[0],
				'email'           => $response->getEmail(),
				'email_verified_at' => now(),
				'password'        => '',
			]);
		}

		auth()->login($user);

		return redirect()->intended(route('home'));
	}

	/**
	 * ----------------------------------------------------------------------------
	 * Validate that the provided OAuth provider is supported.
	 * ----------------------------------------------------------------------------
	 * @param string $provider The OAuth provider to validate
	 * @return array The validated provider data
	 * @throws \Illuminate\Validation\ValidationException If provider is invalid
	 */
	protected function validateProvider(string $provider): array
	{
		return Validator::make(
			['provider' => $provider],
			['provider' => 'in:google']
		)->validate();
	}
}
