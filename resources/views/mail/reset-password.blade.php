@include('mail.partials.header')

<div style="padding: 20px 0;">
	@foreach ($introLines as $line)
	<p style="font-size: 14px; margin-bottom: 15px; color: #374151;">
		{{ $line }}
	</p>
	@endforeach

	<div style="text-align:center; padding: 20px 0;">
		<a href="{{ $url }}" class="button">
			{{ $actionText }}
		</a>
	</div>

	<p style="font-size: 14px; margin-bottom: 15px; color: #374151;">
		{{ $expireText }}
	</p>

	@foreach ($outroLines as $line)
	<p style="font-size: 14px; margin-bottom: 15px; color: #374151;">
		{{ $line }}
	</p>
	@endforeach

	@include('mail.partials.subcopy')
</div>

@include('mail.partials.footer')