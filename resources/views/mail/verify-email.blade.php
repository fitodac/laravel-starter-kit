@include('mail.partials.header')

<div>
	<p style="font-size: 14px;">{{ __('Please click the button below to verify your email address.') }}</p>

	<div class="action">
		<a href="{{ $url }}" class="button">{{ __('Verify Email Address') }}</a>
	</div>

	<p style="font-size: 14px;">{{ __('If you did not create an account, no further action is required.') }}</p>

	@include('mail.partials.subcopy')
</div>

@include('mail.partials.footer')