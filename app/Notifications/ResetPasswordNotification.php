<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Models\EmailTemplate;
use App\Traits\NotificationTrait;

class ResetPasswordNotification extends Notification implements ShouldQueue
{
	use Queueable, NotificationTrait;

	/**
	 * Create a new notification instance.
	 */
	public function __construct(
		private readonly string $resetUrl
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
		return ['mail'];
	}

	/**
	 * Get the mail representation of the notification.
	 */
	public function toMail(object $notifiable): MailMessage
	{
		$template = EmailTemplate::where('type', $this->getNameSpaceAndFileName())->first();

		if (str_contains($template->body, '[url]')) {
			$template->body = str_replace('[url]', $this->resetUrl, $template->body);
		}

		return (new MailMessage)
			->subject($template->subject ?? 'Reset password notification')
			->markdown('mail::message', [
				'content' => $template->body ?? '',
				'slot' => ''
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
			//
		];
	}
}
3xcels1or