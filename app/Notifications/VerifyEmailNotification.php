<?php

namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Lang;

class VerifyEmailNotification extends Notification
{

	/**
	 * Create a new notification instance.
	 */
	public function __construct(protected string $url) {}

	/**
	 * Get the notification's delivery channels.
	 *
	 * @return array<int, string>
	 */
	public function via(object $notifiable): array
	{
		return ['mail'];
	}

	/**
	 * Get the mail representation of the notification.
	 *
	 * @param  object  $notifiable
	 * @return \Illuminate\Notifications\Messages\MailMessage
	 */
	public function toMail(object $notifiable): MailMessage
	{
		return (new MailMessage)
			->subject(Lang::get('Verify Email Address'))
			->markdown('mail.verify-email', ['url' => $this->url]);
	}
}
