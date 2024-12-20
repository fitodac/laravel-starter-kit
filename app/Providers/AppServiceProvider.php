<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use App\Traits\NotificationTrait;
use App\Models\EmailTemplate;

class AppServiceProvider extends ServiceProvider
{

	use NotificationTrait;

	/**
	 * Register any application services.
	 */
	public function register(): void
	{
		if ($this->app->environment('local')) {
			$this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
			$this->app->register(TelescopeServiceProvider::class);
		}
	}

	/**
	 * Bootstrap any application services.
	 */
	public function boot(): void
	{
		// Gate::before(function ($user, $ability) {
		// 	return $user->hasRole('Super Admin') ? true : null;
		// });

		VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
			$template = EmailTemplate::where('type', $this->getNameSpaceAndFileName())->first();

			return (new MailMessage)
				->subject($template->subject ?? 'Verify email address')
				->view($template->view ?? 'mail.verify-email', [
					'content' => $template->body ?? ''
				]);

			// ->line('Click the button below to verify your email address.')
			// ->action('Verify Email Address', $url);
		});
	}
}
