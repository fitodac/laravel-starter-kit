<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Spatie\Permission\Models\Permission;

class PermissionDeleted extends Notification
{
	use Queueable;

	/**
	 * Create a new notification instance.
	 */
	public function __construct(
		private readonly Permission $permission
	)
	{
		//
	}

	/**
	 * Get the notification's delivery channels.
	 *
	 * @return array<int, string>
	 */
	public function via(object $notifiable): array
	{
		return ['mail', 'database'];
	}

	/**
	 * Get the mail representation of the notification.
	 */
	public function toMail(object $notifiable): MailMessage
	{
		return (new MailMessage)
			->subject('Permission deleted')
			->view('mail.permission');
	}

	/**
	 * Get the array representation of the notification.
	 *
	 * @return array<string, mixed>
	 */
	public function toArray(object $notifiable): array
	{
		return [
			'title' => 'Permission updated',
			'content' => 'The permission <strong>' . $this->permission->name . '</strong> has been deleted.'
		];
	}
}
