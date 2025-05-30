@include('mail.partials.header')

<div style="padding: 20px 0;">
	<p style="font-size: 14px; margin-bottom: 15px; color: #374151;">
		{{ __("Hello") }} <strong>{{ $username }}</strong>,
	</p>

	<p style="font-size: 14px;">{{ __('We created an account for you on ' . config('app.name') . '.') }}</p>
	<p style="font-size: 14px;">{{ __('Here are your login details:') }}</p>

	<p style="font-size: 14px; margin-top: 15px; margin-bottom: 15px; color: #374151;">
		{{ __("Username: ") }}<strong>{{ $username }}</strong>
		<br />
		{{ __("Email: ") }}<strong>{{ $email }}</strong>
		<br />
		{{ __("Password: ") }}<strong>{{ $password }}</strong>
	</p>

	<p style="font-size: 14px;">{{ __('Please change your password after your first login.') }}</p>
	<p style="font-size: 14px;">{{ __('Thank you for using our application!') }}</p>

</div>

@include('mail.partials.footer')