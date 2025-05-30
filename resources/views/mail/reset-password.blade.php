@include('mail.partials.header')

<div style="padding: 20px 0;">
	<p style="font-size: 14px; margin-bottom: 15px; color: #374151;">
		{{ __('You are receiving this email because we received a password reset request for your account.') }}
	</p>

	<div style="text-align:center; padding: 20px 0;">
		<a href="{{ $url }}" class="button">
			{{ __('Reset Password') }}
		</a>
	</div>

	<p style="font-size: 14px; margin-bottom: 15px; color: #374151;">
		{{ __((
		'This password reset link will expire in :count minutes.',
		['count' => config('auth.passwords.' . config('auth.defaults.passwords') . '.expire')]
		)) }}
	</p>

	<p style="font-size: 14px; margin-bottom: 15px; color: #374151;">
		{{ __('If you did not request a password reset, no further action is required.') }}
	</p>

	@include('mail.partials.subcopy')
</div>

@include('mail.partials.footer')