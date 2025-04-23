# Pages

This package provides a simple way to create dynamic pages with Filament admin panel and Inertia.js frontend.

<br/>

## Features

- Create and manage pages through Filament admin panel
- Render pages using Inertia.js and React
- SEO-friendly URLs with customizable slugs
- Full content management with rich text editor

<br/>

## Requirements

- PHP 8.1+
- Laravel 10+
- Filament 3+
- Inertia.js

<br/>

## Installation

1. Install the package via Composer:

```bash
composer require fitodac/pages
```

2. Publish migrations and resources:

```bash
php artisan vendor:publish --tag=pages-migrations
php artisan vendor:publish --tag=pages-resources
```

3. Run migrations:

```bash
php artisan migrate
```

4. Install permissions:

```bash
php artisan pages:install
```

<br/>

## Frontend setup

1. Make sure Inertia is configured correctly.

2. Add the react component to your `tsconfig.json` file:

```json
{
	"compilerOptions": {
		// ... existing code ...
		"paths": {
			// ... existing code ...
			"@/Pages/*": ["resources/js/Pages/*"]
		}
	},
	"include": [
		// ... existing code ...
		"resources/js/Pages/**/*.tsx"
	]
}
```

3. Import and register the dynamic page component in your Inertia setup:

```tsx
// In your app.tsx or similar entry file
import Page from '@/Pages/Dynamic/Page'

createInertiaApp({
	resolve: (name) => {
		// ... existing code ...

		// Register dynamic pages component
		if (name.startsWith('Pages/Dynamic')) {
			return Page
		}

		// ... existing code ...
	},
	// ... existing code ...
})
```

4. Compile your assets to include the new React component.

```bash
npm run dev
# or
yarn dev
```

<br/>

## Usage

1. Navigate to the Filament admin panel at `/admin` (or your configured path).

2. Look for the "Pages" section in the navigation menu.

3. Create a new page with title, content, and custom slug (optional).

4. Publish your page when ready.

5. Access your published pages at `/pages/{slug}` on your website.

<br/>

## Configuration

You can publish the configuration file to customize the package behavior:

```bash
php artisan vendor:publish --tag=pages-config
```

<br/>
<br/>

### License

This package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
