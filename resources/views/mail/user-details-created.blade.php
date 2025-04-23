@include('mail.partials.header')

<div style="padding: 20px 0;">
	<p style="font-size: 14px; margin-bottom: 15px; color: #374151;">
		{{ $greeting }} <strong>{{ $username }}</strong>,
	</p>

	@foreach ($introLines as $line)
	<p style="font-size: 14px;">{{ $line }}</p>
	@endforeach

	<p style="font-size: 14px; margin-top: 15px; margin-bottom: 15px; color: #374151;">
		{{ __("Username: ") }}<strong>{{ $username }}</strong>
		<br />
		{{ __("Email: ") }}<strong>{{ $email }}</strong>
		<br />
		{{ __("Password: ") }}<strong>{{ $password }}</strong>
	</p>

	@foreach ($outroLines as $line)
	<p style="font-size: 14px;">{{ $line }}</p>
	@endforeach


</div>

@include('mail.partials.footer')