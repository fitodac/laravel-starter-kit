<?php

namespace App\Http\Responses\Auth;

use Filament\Http\Responses\Auth\LoginResponse as FilamentLoginResponse;
use Illuminate\Http\RedirectResponse;

class LoginResponse extends FilamentLoginResponse
{
	protected ?string $redirectUrl = null;

	public function redirectTo(string $url): static
	{
		$this->redirectUrl = $url;
		return $this;
	}

	public function toResponse($request): RedirectResponse
	{
		if ($this->redirectUrl) {
			return new RedirectResponse($this->redirectUrl);
		}

		return parent::toResponse($request);
	}
}
