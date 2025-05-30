<?php

namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Auth;

use Filament\Notifications\Auth\ResetPassword;

class ResetPasswordNotification extends ResetPassword
{

	/**
	 * Get the reset password notification mail message for the given URL.
	 *
	 * @param  string  $url
	 * @return \Illuminate\Notifications\Messages\MailMessage
	 */
	protected function buildMailMessage($url)
	{

		return (new MailMessage)
			->subject(Lang::get('Reset Password Notification'))
			->markdown('mail.reset-password', ['url' => $url]);
	}
}
