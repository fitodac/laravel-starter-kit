<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>{{ $title ?? 'Email Notification' }}</title>

	<style>
		a {
			color: #2563eb;
			text-decoration: none;
			transition: color 0.2s ease-in-out;
			white-space: normal;
			word-wrap: break-word;
			overflow-wrap: break-word;
		}

		a:hover {
			color: #1d4ed8;
			text-decoration: underline;
		}

		.button {
			background-color: #1d4ed8;
			color: #FFF;
			padding: 10px 20px;
			border-radius: 5px;
			text-decoration: none;
		}
	</style>
</head>

<body
	style="
		background-color: #edf2f7;
		color: #333; 
		font-size: 14px;
		font-family: sans-serif; 
		margin: 0; 
		padding: 0; 
		line-height: 1.6;
	">

	<div style="
		padding-top: 40px;
		padding-bottom: 30px;
		padding-left: 10px;
		padding-right: 10px;
	">
		<img
			src="{{ config('settings.general.email_logo') }}"
			alt="{{ config('app.name') }}"
			style="
				width: 100px;
				margin-left: auto;
				margin-right: auto;
				display: block;
			">
	</div>

	<div>
		<div style="
			background-color: #FFF;
			max-width: 600px;
			padding-left: 30px;
			padding-right: 30px;
			padding-top: 30px;
			padding-bottom: 30px;
			margin-left: auto;
			margin-right: auto;
			border-radius: 8px;
			box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015);
		">