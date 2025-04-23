@include('mail.partials.header')

<div>
	@foreach ($introLines as $line)
	<p style="font-size: 14px;">{{ $line }}</p>
	@endforeach

	<p style="font-size: 14px;">
		{{ __('Username') }}: <strong>{{ $username }}</strong><br />
		{{ __('Email') }}: <strong>{{ $email }}</strong><br />
		{{ __('Registered on') }}: <strong>{{ $created_at }}</strong>
	</p>

	@foreach ($outroLines as $line)
	<p style="font-size: 14px;">{{ $line }}</p>
	@endforeach
</div>

@include('mail.partials.footer')