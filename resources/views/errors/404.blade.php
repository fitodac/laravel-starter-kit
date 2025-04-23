<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"
	class="{{ config('settings.general.color_mode') === 'dark' ? 'dark' : '' }}">

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Page Not Found</title>

		@vite(['resources/css/app.css'])
	</head>

	<body class="antialiased">
		<main class="grid place-items-center h-screen px-6 2xl:px-0">

			<div class="w-full max-w-5xl">
				<div class="text-center md:text-left md:pl-3.5">
					<div class="text-primary/50 text-xl font-semibold">404</div>

					<h3 class="text-3xl font-light mt-1 md:text-5xl">{{__("Page not found")}}</h3>

					<p class="text-foreground/50 text-xl mt-6">
						{{__("Sorry, we couldn't find the page you're looking for.")}}
					</p>
				</div>

				<div class="mt-10 flex justify-center md:justify-start">
					<a href="{{ url('/') }}"
						class="text-primary inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3 select-none">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z">
							</path>
						</svg>
						{{ __('Back to Home') }}
					</a>
				</div>
			</div>
		</main>
	</body>

</html>