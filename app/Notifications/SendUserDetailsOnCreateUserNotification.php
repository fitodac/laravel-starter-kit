<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Models\User;
use Illuminate\Support\Facades\Lang;

class SendUserDetailsOnCreateUserNotification extends Notification implements ShouldQueue
{
	use Queueable;

	/**
	 * Create a new notification instance.
	 */
	public function __construct(
		private readonly User $user,
		private readonly string $password
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
		return ['mail', 'broadcast'];
	}

	/**
	 * Get the mail representation of the notification.
	 */
	public function toMail(object $notifiable): MailMessage
	{
		return (new MailMessage)
			->subject(Lang::get('Welcome to ' . config('app.name')))
			->view('mail.user-details-created', [
				'greeting' => Lang::get('Hello '),
				'email' => $this->user->email,
				'username' => $this->user->username,
				'password' => $this->password,
				'introLines' => [
					Lang::get('We created an account for you on ' . config('app.name') . '.'),
					Lang::get('Here are your login details:'),
				],
				'outroLines' => [
					Lang::get('Please change your password after your first login.'),
					Lang::get('Thank you for using our application!')
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
			'message' => Lang::get('Your account has been created'),
		];
	}
}
