<?php

namespace App\Filament\Pages\Auth\EmailVerification;

use Exception;
use Filament\Facades\Filament;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Filament\Pages\Auth\EmailVerification\EmailVerificationPrompt as BaseEmailVerificationPrompt;
use App\Notifications\VerifyEmailNotification;

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

        $notification = app(VerifyEmailNotification::class);
        $notification->url = Filament::getVerifyEmailUrl($user);

        $user->notify($notification);
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
