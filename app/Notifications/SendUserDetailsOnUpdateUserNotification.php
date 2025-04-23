<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Models\User;
use Illuminate\Support\Facades\Lang;

class SendUserDetailsOnUpdateUserNotification extends Notification implements ShouldQueue
{
	use Queueable;

	/**
	 * Create a new notification instance.
	 */
	public function __construct(
		private readonly User $user
	) {
		//
	}

	/**
	 * Get the notification's delivery channels.
	 *
	 * @return array<int, string>
	 */
	public function via(object $notifiable): array
	{
		// return ['mail'];
		return ['mail', 'broadcast'];
	}

	/**
	 * Get the mail representation of the notification.
	 */
	public function toMail(object $notifiable): MailMessage
	{
		return (new MailMessage)
			->subject(Lang::get('Your Account has been updated'))
			->view('mail.user-details-updated', [
				'greeting' => Lang::get('Hello '),
				'username' => $this->user->username,
				'content' => [
					Lang::get("We updated your account details."),
					Lang::get("I you have any questions, please contact support immediately."),
					Lang::get("Best regards.")
				]
			]);
	}

	/**
	 * Get the array representation of the notification.
	 *
	 * @return array<string, mixed>
	 */
	public function toArray(object $notifiable): array
	{
		return [
			'user_id' => $this->user->id,
			'message' => Lang::get('Your account details have been updated'),
		];
	}
}
