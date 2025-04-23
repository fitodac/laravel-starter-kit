<?php

namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Filament\Notifications\Auth\VerifyEmail;
use Illuminate\Support\Facades\Lang;

class VerifyEmailNotification extends VerifyEmail
{
	/**
	 * Get the verify email notification mail message for the given URL.
	 *
	 * @param  string  $url
	 * @return \Illuminate\Notifications\Messages\MailMessage
	 */
	protected function buildMailMessage($url)
	{
		return (new MailMessage)
			->subject(Lang::get('Verify Email Address'))
			->markdown('mail.verify-email', [
				'url' => $url,
				'actionText' => Lang::get('Verify Email Address'),
				'introLines' => [Lang::get('Please click the button below to verify your email address.')],
				'outroLines' => [Lang::get('If you did not create an account, no further action is required.')],
			]);
	}
}
