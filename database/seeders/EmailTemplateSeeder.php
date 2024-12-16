<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\EmailTemplate;

class EmailTemplateSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		// User created
		EmailTemplate::create([
			'name' => 'User created',
			'subject' => '🎉 New User Created in [App Name]',
			'body' => "
				<p><strong>Hi [Admin\u2019s Name],<\/strong><\/p>
				<p><\/p><p>Hope you\u2019re having a fantastic day!<\/p>
				<p><\/p><p>I wanted to let you know that a new <strong>User<\/strong> has been created in <strong>[App Name]<\/strong>. Here are the details:<\/p>
				<p>\u2022 <strong>Username:<\/strong> [Username]<\/p><p>\u2022 <strong>Full Name:<\/strong> [Full Name]<\/p>
				<p>\u2022 <strong>Created by:<\/strong> [Creator\u2019s Name]<\/p>
				<p>\u2022 <strong>Creation Date:<\/strong> [Date]<\/p>
				<p>\u2022 <strong>Role Assigned:<\/strong> [Role Name]<\/p>
				<p>\u2022 <strong>Department:<\/strong> [Department Name]<\/p>
				<p>\u2022 <strong>Email:<\/strong> [User\u2019s Email Address]<\/p>
				<p><\/p><p><strong>What to Do Next:<\/strong><\/p>
				<p>1. <strong>Verify Information:<\/strong> Make sure all the user details are correct and complete.<\/p>
				<p>2. <strong>Assign Resources:<\/strong> Ensure the new user has access to the necessary tools and resources based on their role.<\/p>
				<p>3. <strong>Welcome the User:<\/strong> Consider sending a welcome message or setting up an onboarding session to help them get started.<\/p>
				<p><\/p>
				<p>If you have any questions or need assistance with anything, feel free to reach out to the support team at [support email] or give us a call at [support phone number].<\/p>
				<p><\/p>
				<p><strong>Thanks a bunch for your attention!<\/strong><\/p>",
			'view' => 'mail.user',
			'type' => 'App\Notifications\UserCreated'
		]);

		// User updated
		EmailTemplate::create([
			'name' => 'User updated',
			'subject' => '🔄 User Data Updated in [App Name]',
			'body' => "
				<p><strong>Hi [Admin\u2019s Name],<\/strong><\/p>
				<p><\/p>
				<p>Hope you\u2019re doing well!<\/p>
				<p><\/p>
				<p>I wanted to give you a heads-up that a <strong>user\u2019s data<\/strong> has been <strong>updated<\/strong> in <strong>[App Name]<\/strong>. Here are the details:<\/p>
				<p>\u2022 <strong>Username:<\/strong> [Username]<\/p>
				<p>\u2022 <strong>Edited by:<\/strong> [User\u2019s Name]<\/p>
				<p>\u2022 <strong>Edit Date:<\/strong> [Date]<\/p>
				<p>\u2022 <strong>Previous Data:<\/strong><\/p>
				<p>\u2022 [Previous Data Field 1]: [Previous Value 1]<\/p>
				<p>\u2022 [Previous Data Field 2]: [Previous Value 2]<\/p>
				<p>\u2022 [Add more fields as necessary]<\/p>
				<p>\u2022 <strong>New Data:<\/strong><\/p>
				<p>\u2022 [New Data Field 1]: [New Value 1]<\/p>
				<p>\u2022 [New Data Field 2]: [New Value 2]<\/p>
				<p>\u2022 [Add more fields as necessary]<\/p>
				<p><\/p>
				<p><strong>Next Steps:<\/strong><\/p>
				<p>1. <strong>Review the Changes:<\/strong> Ensure the updated data is accurate and complies with our data policies.<\/p>
				<p>2. <strong>Notify the User:<\/strong> If necessary, inform the user about the changes made to their account.<\/p>
				<p>3. <strong>Monitor for Issues:<\/strong> Keep an eye on the user\u2019s account to ensure everything is functioning as expected.<\/p>
				<p><\/p>
				<p>If you have any questions or need assistance with anything, feel free to reach out to the support team at [support email] or give us a call at [support phone number].<\/p>
				<p><\/p>
				<p><strong>Thanks for your attention to this update!<\/strong><\/p>
			",
			'view' => 'mail.user',
			'type' => 'App\Notifications\UserUpdated'
		]);



		// Role created
		EmailTemplate::create([
			'name' => 'Role created',
			'subject' => '🎉 New Role Created in [App Name]',
			'body' => "
				<p><strong>Hi [Admin\u2019s Name],<\/strong><\/p>
				<p><\/p>
				<p>Hope you\u2019re having a fantastic day!<\/p>
				<p><\/p>
				<p>I wanted to let you know that a new <strong>Role<\/strong> has been created in <strong>[App Name]<\/strong>. Here are the details:<\/p>
				<p>\u2022 <strong>Role Name:<\/strong> [Role Name]<\/p>
				<p>\u2022 <strong>Created by:<\/strong> [User\u2019s Name]<\/p>
				<p>\u2022 <strong>Creation Date:<\/strong> [Date]<\/p>
				<p>\u2022 <strong>Description:<\/strong> [Brief description of the role and its responsibilities]<\/p>
				<p><\/p>
				<p><strong>What to Do Next:<\/strong><\/p>
				<p>1. <strong>Review the Role:<\/strong> Take a moment to ensure the new role aligns with our team\u2019s structure and objectives.<\/p>
				<p>2. <strong>Assign It:<\/strong> Allocate this role to the appropriate team members who fit the responsibilities.<\/p>
				<p>3. <strong>Communicate:<\/strong> Inform the assigned users about their new role and any changes in their permissions or responsibilities.<\/p>
				<p><\/p>
				<p>If you have any questions or need assistance with anything, feel free to reach out to the support team at [support email] or give us a call at [support phone number].<\/p>
				<p><\/p>
				<p><strong>Thanks a bunch for your attention!<\/strong><\/p>
			",
			'view' => 'mail.role',
			'type' => 'App\Notifications\RoleCreated'
		]);

		// Role updated
		EmailTemplate::create([
			'name' => 'Role updated',
			'subject' => '🔄 Role Updated in [App Name]',
			'body' => "
				<p><strong>Hi [Admin\u2019s Name],<\/strong><\/p>
				<p><\/p>
				<p>Hope you\u2019re doing well!<\/p>
				<p><\/p>
				<p>I wanted to give you a heads-up that a <strong>Role<\/strong> has been <strong>updated<\/strong> in <strong>[App Name]<\/strong>. Here are the updated details:<\/p>
				<p>\u2022 <strong>Role Name:<\/strong> [Role Name]<\/p>
				<p>\u2022 <strong>Edited by:<\/strong> [User\u2019s Name]<\/p>
				<p>\u2022 <strong>Edit Date:<\/strong> [Date]<\/p>
				<p>\u2022 <strong>Previous Description:<\/strong> [Previous Description]<\/p>
				<p>\u2022 <strong>New Description:<\/strong> [New Description]<\/p>
				<p><\/p>
				<p><strong>Next Steps:<\/strong><\/p>
				<p>1. <strong>Review the Changes:<\/strong> Ensure the updated role aligns with our team\u2019s structure and objectives.<\/p>
				<p>2. <strong>Inform Affected Users:<\/strong> Notify users who are impacted by these changes.<\/p>
				<p>3. <strong>Monitor Usage:<\/strong> Keep an eye on how the updated role is being utilized to ensure it\u2019s working as intended.<\/p>
				<p><\/p>
				<p>If you have any questions or need assistance with anything, feel free to reach out to the support team at [support email] or give us a call at [support phone number].<\/p>
				<p><\/p>
				<p><strong>Thanks for your attention to this update!<\/strong><\/p>
			",
			'view' => 'mail.role',
			'type' => 'App\Notifications\RoleUpdated'
		]);



		// Permission created
		EmailTemplate::create([
			'name' => 'Permission created',
			'subject' => '🎉 New Permission Created in [App Name]',
			'body' => "
				<p><strong>Hi [Admin\u2019s Name],<\/strong><\/p>
				<p><\/p>
				<p>Hope you\u2019re having a great day!<\/p>
				<p><\/p>
				<p>I wanted to let you know that a new <strong>Permission<\/strong> has been created in <strong>[App Name]<\/strong>. Here are the details:<\/p>
				<p>\u2022 <strong>Permission Name:<\/strong> [Permission Name]<\/p>
				<p>\u2022 <strong>Created by:<\/strong> [User\u2019s Name]<\/p>
				<p>\u2022 <strong>Creation Date:<\/strong> [Date]<\/p>
				<p>\u2022 <strong>Description:<\/strong> [Brief description of the permission and its functionalities]<\/p>
				<p><\/p>
				<p><strong>What to Do Next:<\/strong><\/p>
				<p>1. <strong>Take a Look:<\/strong> Review the new permission to ensure it aligns with our team\u2019s needs.<\/p>
				<p>2. <strong>Assign It:<\/strong> Grant this permission to the relevant team members who need access.<\/p>
				<p>3. <strong>Keep an Eye:<\/strong> Monitor the usage to make sure everything is running smoothly.<\/p>
				<p><\/p>
				<p>If you have any questions or need a hand with anything, feel free to reach out to the support team at [support email] or give us a call at [support phone number].<\/p>
				<p><\/p>
				<p><strong>Thanks a bunch for your attention!<\/strong><\/p>
			",
			'view' => 'mail.permission',
			'type' => 'App\Notifications\PermissionCreated'
		]);

		// Permission updated
		EmailTemplate::create([
			'name' => 'Permission updated',
			'subject' => '🔄 Permission Updated in [App Name]',
			'body' => "
				<p><strong>Hi [Admin\u2019s Name],<\/strong><\/p>
				<p><\/p>
				<p>Hope you\u2019re doing well!<\/p>
				<p><\/p>
				<p>I wanted to give you a heads-up that a <strong>Permission<\/strong> has been <strong>edited<\/strong> in <strong>[App Name]<\/strong>. Here are the updated details:<\/p>
				<p>\u2022 <strong>Permission Name:<\/strong> [Permission Name]<\/p>
				<p>\u2022 <strong>Edited by:<\/strong> [User\u2019s Name]<\/p>
				<p>\u2022 <strong>Edit Date:<\/strong> [Date]<\/p>
				<p>\u2022 <strong>Previous Description:<\/strong> [Previous Description]<\/p>
				<p>\u2022 <strong>New Description:<\/strong> [New Description]<\/p>
				<p><\/p>
				<p><strong>Next Steps:<\/strong><\/p>
				<p>1. <strong>Review the Changes:<\/strong> Take a moment to go through the updated permission to ensure everything looks good.<\/p>
				<p>2. <strong>Notify Affected Users:<\/strong> If necessary, inform the users who are impacted by these changes.<\/p>
				<p>3. <strong>Monitor Usage:<\/strong> Keep an eye on how the updated permission is being utilized to ensure it\u2019s working as intended.<\/p>
				<p><\/p>
				<p>If you have any questions or need assistance with anything, feel free to reach out to the support team at [support email] or give us a call at [support phone number].<\/p>
				<p><\/p>
				<p><strong>Thanks for your attention to this update!<\/strong><\/p>
			",
			'view' => 'mail.permission',
			'type' => 'App\Notifications\PermissionUpdated'
		]);

		// New user registered
		EmailTemplate::create([
			'name' => 'New user registered',
			'subject' => '🎉 New User Registration in [App Name]',
			'body' => "
				
				<p><strong>Hi [Admin\u2019s Name],<\/strong><\/p>
				<p><\/p>
				<p>Hope you\u2019re having a fantastic day!<\/p>
				<p><\/p>
				<p>I wanted to let you know that a new <strong>User<\/strong> has <strong>registered<\/strong> in <strong>[App Name]<\/strong>. Here are the details:<\/p>
				<p>\u2022 <strong>Username:<\/strong> [Username]<\/p>
				<p>\u2022 <strong>Full Name:<\/strong> [Full Name]<\/p>
				<p>\u2022 <strong>Registration Date:<\/strong> [Date]<\/p>
				<p>\u2022 <strong>Email:<\/strong> [User\u2019s Email Address]<\/p>
				<p>\u2022 <strong>Role Assigned:<\/strong> [Role Name] (if applicable)<\/p>
				<p>\u2022 <strong>Department:<\/strong> [Department Name] (if applicable)<\/p>
				<p><\/p>
				<p><strong>What to Do Next:<\/strong><\/p>
				<p>1. <strong>Verify Information:<\/strong> Ensure that all the user details are accurate and complete.<\/p>
				<p>2. <strong>Assign Resources:<\/strong> Provide the new user with access to necessary tools and resources based on their role.<\/p>
				<p>3. <strong>Welcome the User:<\/strong> Consider sending a welcome message or setting up an onboarding session to help them get started.<\/p>
				<p><\/p>
				<p>If you have any questions or need assistance with anything, feel free to reach out to the support team at [support email] or give us a call at [support phone number].<\/p>
				<p><\/p>
				<p><strong>Thanks a bunch for your attention!<\/strong><\/p>
			",
			'view' => 'mail.newUserRegistered',
			'type' => 'App\Notifications\NewUserRegisteredNotification'
		]);
	}
}
