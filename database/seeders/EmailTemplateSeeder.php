<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\EmailTemplate;
use App\Traits\NotificationShortcodeTrait;

class EmailTemplateSeeder extends Seeder
{

	use NotificationShortcodeTrait;

	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{

		$userShortcodes = array_merge([
			'[app.name]' => "Application name"
		], $this->userShortcodes());

		$roleShortcodes = array_merge([
			'[app.name]' => "Application name"
		], $this->roleShortcodes());

		$permissionShortcodes = array_merge([
			'[app.name]' => "Application name"
		], $this->permissionShortcodes());

		// User created
		EmailTemplate::create([
			'name' => 'User created',
			'subject' => '🎉 New User Created in [app.name]',
			'body' => "
				<p>Hi,</p>
				<p></p>
				<p>Hope you're doing well!</p>
				<p></p>
				<p>I wanted to let you know that a new <strong>User</strong> has been created.</p>
				<p>• Full Name: <strong>[user.name] [user.lastname]</strong></p>
				<p>• Username: <strong>[user.username]</strong></p>
				<p>• Email: <strong>[user.email]</strong></p>
				<p></p>
				<p>Thanks a bunch for your attention!</p>
			",
			'view' => 'mail.user',
			'type' => 'App\Notifications\UserCreated',
			'shortcodes' => json_encode($userShortcodes, true)
		]);

		// User updated
		EmailTemplate::create([
			'name' => 'User updated',
			'subject' => '🔄 User Data Updated in [app.name]',
			'body' => "
				<p>Hi,</p>
				<p></p>
				<p>Hope you're doing well!</p>
				<p></p>
				<p>I wanted to let you know that a new <strong>User</strong> has been updated.</p>
				<p>• Full Name: <strong>[user.name] [user.lastname]</strong></p>
				<p>• Username: <strong>[user.username]</strong></p>
				<p>• Email: <strong>[user.email]</strong></p>
				<p></p>
				<p>Thanks a bunch for your attention!</p>
			",
			'view' => 'mail.user',
			'type' => 'App\Notifications\UserUpdated',
			'shortcodes' => json_encode($userShortcodes, true)
		]);



		// Role created
		EmailTemplate::create([
			'name' => 'Role created',
			'subject' => '🎉 New Role Created in [app.name]',
			'body' => "
				<p>Hi,</p>
				<p></p>
				<p>Hope you're doing well!</p>
				<p></p>
				<p>I wanted to let you know that a new <strong>Role</strong> has been created.</p>
				<p>• Role Name: <strong>[role.name]</strong></p>
				<p></p>
				<p>Thanks a bunch for your attention!</p>
			",
			'view' => 'mail.role',
			'type' => 'App\Notifications\RoleCreated',
			'shortcodes' => json_encode($roleShortcodes, true)
		]);

		// Role updated
		EmailTemplate::create([
			'name' => 'Role updated',
			'subject' => '🔄 Role Updated in [app.name]',
			'body' => "
				<p>Hi,</p>
				<p></p>
				<p>Hope you're doing well!</p>
				<p></p>
				<p>I wanted to give you a heads-up that a <strong>Role</strong> has been updated.</p>
				<p>• Role Name: <strong>[role.name]</strong></p>
				<p></p>
				<p>Thanks a bunch for your attention!</p>
			",
			'view' => 'mail.role',
			'type' => 'App\Notifications\RoleUpdated',
			'shortcodes' => json_encode($roleShortcodes, true)
		]);



		// Permission created
		EmailTemplate::create([
			'name' => 'Permission created',
			'subject' => '🎉 New Permission Created in [app.name]',
			'body' => "
				<p>Hi,</p>
				<p></p>
				<p>Hope you're doing well!</p>
				<p></p>
				<p>I wanted to let you know that a new <strong>Permission</strong> has been created.</p>
				<p>• Permission Name: <strong>[permission.name]</strong></p>
				<p></p>
				<p>Thanks a bunch for your attention!</p>
			",
			'view' => 'mail.permission',
			'type' => 'App\Notifications\PermissionCreated',
			'shortcodes' => json_encode($permissionShortcodes, true)
		]);

		// Permission updated
		EmailTemplate::create([
			'name' => 'Permission updated',
			'subject' => '🔄 Permission Updated in [app.name]',
			'body' => "
				<p>Hi,</p>
				<p></p>
				<p>Hope you're doing well!</p>
				<p></p>
				<p>I wanted to give you a heads-up that a <strong>Permission</strong> has been updated.</p>
				<p>• Permission Name: <strong>[permission.name]</strong></p>
				<p></p>
				<p>Thanks a bunch for your attention!</p>
			",
			'view' => 'mail.permission',
			'type' => 'App\Notifications\PermissionUpdated',
			'shortcodes' => json_encode($permissionShortcodes, true)
		]);



		// New user registered
		EmailTemplate::create([
			'name' => 'New user registered',
			'subject' => '🎉 New User Registration in [App Name]',
			'body' => "
				
				<p><strong>Hi [Admin's Name],</strong></p>
				<p></p>
				<p>Hope you're having a fantastic day!</p>
				<p></p>
				<p>I wanted to let you know that a new <strong>User</strong> has <strong>registered</strong> in <strong>[App Name]</strong>. Here are the details:</p>
				<p>• <strong>Username:</strong> [Username]</p>
				<p>• <strong>Full Name:</strong> [Full Name]</p>
				<p>• <strong>Registration Date:</strong> [Date]</p>
				<p>• <strong>Email:</strong> [User's Email Address]</p>
				<p>• <strong>Role Assigned:</strong> [Role Name] (if applicable)</p>
				<p>• <strong>Department:</strong> [Department Name] (if applicable)</p>
				<p></p>
				<p><strong>What to Do Next:</strong></p>
				<p>1. <strong>Verify Information:</strong> Ensure that all the user details are accurate and complete.</p>
				<p>2. <strong>Assign Resources:</strong> Provide the new user with access to necessary tools and resources based on their role.</p>
				<p>3. <strong>Welcome the User:</strong> Consider sending a welcome message or setting up an onboarding session to help them get started.</p>
				<p></p>
				<p>If you have any questions or need assistance with anything, feel free to reach out to the support team at [support email] or give us a call at [support phone number].</p>
				<p></p>
				<p><strong>Thanks a bunch for your attention!</strong></p>
			",
			'view' => 'mail.new-user-registered',
			'type' => 'App\Notifications\NewUserRegisteredNotification',
			'shortcodes' => json_encode([], true)
		]);

		// Email address verification
		EmailTemplate::create([
			'name' => 'Email address verification',
			'subject' => '🔒 Verify Your Email Address',
			'body' => "
				<p><strong>Hello!</strong></p>
				<p></p>
        <p>Please use the link below to verify your email address.</p>
				<p></p>
				<p>[url]</p>
				<p></p>
        <p>If you did not create an account, no further action is required.</p>
				<p></p>
        <p>Best regards</p>
			",
			'view' => 'mail.verify-email',
			'type' => 'App\Providers\AppServiceProvider',
			'shortcodes' => json_encode([
				'[url]' => "The url for email verification"
			], true)
		]);

		// Reset password notification
		EmailTemplate::create([
			'name' => 'Reset password notification',
			'subject' => '🔒 Verify Your Email Address',
			'body' => "
				<p><strong>Hello!</strong></p>
				<p></p>
        <p>You are receiving this email because we received a password reset request for your account.</p>
				<p></p>
				<p>[url]</p>
				<p></p>
        <p>This password reset link will expire in 60 minutes.</p>
        <p>If you did not request a password reset, no further action is required.</p>
				<p></p>
        <p>Best regards</p>
			",
			'view' => 'mail.reset-password',
			'type' => 'App\Notifications\ResetPasswordNotification',
			'shortcodes' => json_encode([
				'[url]' => "The url for password reset"
			], true)
		]);
	}
}
