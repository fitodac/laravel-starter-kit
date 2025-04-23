<?php

return [
	'allowed_email_domains_can_access_admin' => array_filter(
		is_string(env('ALLOWED_EMAIL_DOMAINS_CAN_ACCESS_ADMIN'))
			? explode(',', env('ALLOWED_EMAIL_DOMAINS_CAN_ACCESS_ADMIN'))
			: ['@gmail.com', '@local.com']
	),

	/**
	 * Configure the default color mode for the site.
	 */
	'color_mode' => env('COLOR_MODE', 'dark'),

	/**
	 * Configure the default pagination amount.
	 */
	'per_page' => 15,

	// Configure Open Graph settings for the site.
	'og_description' => env('VITE_OG_DESCRIPTION', 'Laravel Dashboard'),
	'og_image' => env('VITE_OG_IMAGE', 'og-image.jpg'),
	'x_user' => env('VITE_X_USER', '@twitter_X_user'),
	'msapplication_color' => env('VITE_MSAPPLICATION_COLOR', '#000000'),


	// Determine if the admin should be able to impersonate other users.
	// @link https://github.com/lab404/laravel-impersonate
	'admin_can_impersonate' => env('VITE_ADMIN_CAN_IMPERSONATE', false),

	/**
	 * Configure the path to the logo image used in emails.
	 * The path is constructed by concatenating the application URL with the image path.
	 * 
	 * @var string
	 */
	'email_logo' => config('app.url') . '/img/mail/brand.png',

	/**
	 * Determines if only super administrators can access permission settings.
	 * When set to true, regular administrators will not be able to modify permissions.
	 * 
	 * @var boolean
	 */
	'only_super_admin_can_access_to_permissions' => true,


	// Controls login functionality
	'login_enabled' => true,
	// Enable/disable new user registration
	'registration_enabled' => true,
	// Enable/disable password reset functionality
	'password_reset_enabled' => true,
	// Enable/disable Google OAuth authentication
	'google_authentication_enabled' => true,


	/**
	 * The route where regular users are redirected after authentication
	 */
	'user_authenticated_redirect_route' => 'home',

	/**
	 * The route where admin users are redirected after authentication
	 */
	'admin_authenticated_redirect_route' => 'filament.admin.resources.users.index',

	'date_picker_format' => 'd/m/Y'

];
