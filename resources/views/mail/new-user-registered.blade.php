@include('mail.partials.header')

<div>
	<p style="font-size: 14px;">{{ __("A new user has been registered on the application:") }}</p>

	<p style="font-size: 14px;">
		{{ __('Username') }}: <strong>{{ $username }}</strong><br />
		{{ __('Email') }}: <strong>{{ $email }}</strong><br />
		{{ __('Registered on') }}: <strong>{{ $created_at }}</strong>
	</p>

	<p style="font-size: 14px;">{{ __('Best regards, :appName team', ['appName' => config('app.name')]) }}</p>
</div>

@include('mail.partials.footer')