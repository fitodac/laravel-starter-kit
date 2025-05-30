@include('mail.partials.header')

<div style="padding: 20px 0;">
	<p style="font-size: 14px; margin-bottom: 15px; color: #374151;">
		{{ __('Hello') }} <strong>{{ $username }}</strong>,
	</p>

	<p style="font-size: 14px;">{{ __("We updated your account details.") }}</p>
	<p style="font-size: 14px;">{{ __("I you have any questions, please contact support immediately.") }}</p>
	<p style="font-size: 14px;">{{ __("Best regards.") }}</p>

</div>

@include('mail.partials.footer')