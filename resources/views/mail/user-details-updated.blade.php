@include('mail.partials.header')

<div style="padding: 20px 0;">
	<p style="font-size: 14px; margin-bottom: 15px; color: #374151;">
		{{ $greeting }} <strong>{{ $username }}</strong>,
	</p>

	@foreach ($content as $line)
	<p style="font-size: 14px;">{{ $line }}</p>
	@endforeach

</div>

@include('mail.partials.footer')