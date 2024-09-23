<?php

return [
	'color_mode' => env('VITE_COLOR_MODE', 'light'),
	'auth_layout' => env('VITE_AUTH_LAYOUT', 'layout1'), // layout1 | layout2 | layout3

	'og_description' => env('VITE_OG_DESCRIPTION', 'Laravel Vite Boilerplate'),
	'og_image' => env('VITE_OG_IMAGE', 'og-image.jpg'),
	'x_user' => env('VITE_X_USER', '@twitter_X_user'),
	'msapplication_color' => env('VITE_MSAPPLICATION_COLOR', '#000000'),
];
