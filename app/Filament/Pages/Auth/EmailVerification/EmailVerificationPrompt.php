<?php

namespace App\Filament\Pages\Auth\EmailVerification;

use Exception;
use Filament\Facades\Filament;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Notifications\VerifyEmailNotification;
use Illuminate\Support\Facades\Log;
use Filament\Pages\Auth\EmailVerification\EmailVerificationPrompt as BaseEmailVerificationPrompt;

class EmailVerificationPrompt extends BaseEmailVerificationPrompt
{

	protected static string $view = 'filament.pages.auth.email-verification.email-verification-prompt';

	protected function sendEmailVerificationNotification(MustVerifyEmail $user): void
	{
		if ($user->hasVerifiedEmail()) {
			return;
		}

		if (! method_exists($user, 'notify')) {
			$userClass = $user::class;

			throw new Exception("Model [{$userClass}] does not have a [notify()] method.");
		}

		try {
			$notification = app(VerifyEmailNotification::class, [
				'url' => Filament::getVerifyEmailUrl($user)
			]);

			$user->notify($notification);
		} catch (\Throwable $th) {
			Log::error('Failed to send email verification notification to user: ' . $user->email, [
				'error' => $th->getMessage(),
				'trace' => $th->getTraceAsString()
			]);
		}
	}

	public function getTitle(): string | Htmlable
	{
		return __('filament-panels::pages/auth/email-verification/email-verification-prompt.title');
	}

	public function getHeading(): string | Htmlable
	{
		return __('filament-panels::pages/auth/email-verification/email-verification-prompt.heading');
	}
}
