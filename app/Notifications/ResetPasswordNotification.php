<?php

namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Lang;

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
			->markdown('mail.reset-password', [
				'url' => $url,
				'actionText' => Lang::get('Reset Password'),
				'introLines' => [
					Lang::get('You are receiving this email because we received a password reset request for your account.')
				],
				'expireText' => Lang::get(
					'This password reset link will expire in :count minutes.',
					['count' => config('auth.passwords.' . config('auth.defaults.passwords') . '.expire')]
				),
				'outroLines' => [
					Lang::get('If you did not request a password reset, no further action is required.')
				]
			]);
	}
}
