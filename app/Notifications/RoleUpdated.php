<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Spatie\Permission\Models\Role;

class RoleUpdated extends Notification
{
	use Queueable;

	/**
	 * Create a new notification instance.
	 */
	public function __construct(
		private readonly Role $role
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
		return (new MailMessage)
			->subject('Role updated')
			->view('mail.role');
	}

	/**
	 * Get the array representation of the notification.
	 *
	 * @return array<string, mixed>
	 */
	public function toArray(object $notifiable): array
	{
		return [
			'title' => 'Role updated',
			'content' => 'The role <strong>' . $this->role->name . '</strong> has been updated.'
			// 'content' => str_replace('[role.name]', $this->role->name, 'The role <strong>[role.name]</strong> has been updated.')
		];
	}
}
