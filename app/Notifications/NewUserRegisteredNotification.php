<?php

namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Lang;
use App\Models\User;

class NewUserRegisteredNotification extends Notification
{

	/**
	 * Create a new notification instance.
	 */
	public function __construct(protected User $newUser) {}

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
	 */
	public function toMail($notifiable): MailMessage
	{
		return (new MailMessage)
			->subject(Lang::get('New user registered'))
			->markdown('mail.new-user-registered', [
				'username' => $this->newUser->username,
				'email' => $this->newUser->email,
				'created_at' => $this->newUser->created_at->format('d/m/Y'),
			]);
	}
}
