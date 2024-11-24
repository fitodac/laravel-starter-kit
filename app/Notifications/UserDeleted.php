<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Models\User;
use App\Models\NotificationTemplate;
use App\Models\EmailTemplate;
use App\Traits\NotificationTrait;

class UserDeleted extends Notification implements ShouldQueue
{
	use Queueable, NotificationTrait;

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
		return [
			'mail',
			'database',
			'broadcast'
		];
	}

	/**
	 * Get the mail representation of the notification.
	 */
	public function toMail(object $notifiable): MailMessage
	{
		$template = EmailTemplate::where('type', $this->getNameSpaceAndFileName())->first();

		return (new MailMessage)
			->subject($template->subject ?? 'User deleted')
			->view($template->view ?? 'mail.user', [
				'content' => $template->body ?? ''
			]);
	}

	/**
	 * Get the array representation of the notification.
	 *
	 * @return array<string, mixed>
	 */
	public function toArray(object $notifiable): array
	{
		$template = NotificationTemplate::where('type', $this->getNameSpaceAndFileName())->firstOrFail();

		return [
			'title' => $this->replaceShortcodes($template->title, 'user.') ?? 'User deleted',
			'content' => $this->replaceShortcodes($template->content, 'user.') ?? 'User deleted successfully'
		];
	}
}
