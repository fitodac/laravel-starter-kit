@include('mail.partials.header')

<div>
	@foreach ($introLines as $line)
	<p style="font-size: 14px;">{{ $line }}</p>
	@endforeach

	<div class="action">
		<a href="{{ $url }}" class="button">{{ $actionText }}</a>
	</div>

	@foreach ($outroLines as $line)
	<p style="font-size: 14px;">{{ $line }}</p>
	@endforeach

	@include('mail.partials.subcopy')
</div>

@include('mail.partials.footer')