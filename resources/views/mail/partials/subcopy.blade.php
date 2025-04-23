@if(isset($url) && isset($actionText))
<div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
	<p style="font-size: 13px; color: #6b7280;">
		@lang(
		"If you're having trouble clicking the \":actionText\" button, copy and paste the URL below\n".
		'into your web browser:',
		[
		'actionText' => $actionText,
		]
		)<br>
		<a href="{{ $url }}" style="color: #2563eb; text-decoration: none;">{{ $url }}</a>
	</p>
</div>
@endif