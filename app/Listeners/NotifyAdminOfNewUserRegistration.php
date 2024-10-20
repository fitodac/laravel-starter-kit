<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Auth\Events\Registered;
use App\Models\User;
use App\Notifications\NewUserRegisteredNotification;


class NotifyAdminOfNewUserRegistration
{
	/**
	 * Create the event listener.
	 */
	public function __construct() {}

	/**
	 * Handle the event.
	 */
	public function handle(Registered $event): void
	{

		$admin = User::role('Super Admin')->first();

		if ($admin) {
			$admin->notify(new NewUserRegisteredNotification($event->user));
		}
	}
}
