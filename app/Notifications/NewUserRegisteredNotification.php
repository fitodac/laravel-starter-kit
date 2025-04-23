<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Lang;
use App\Models\User;

class NewUserRegisteredNotification extends Notification implements ShouldQueue
{
	use Queueable;


	public $newUser;

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
				'introLines' => [
					Lang::get("A new user has been registered on the application:")
				],
				'outroLines' => [
					Lang::get('Best regards, :appName team', ['appName' => config('app.name')]),
				],
			]);
	}
}
