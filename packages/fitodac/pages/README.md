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

<br/>

2. Publish migrations and resources:

```bash
php artisan vendor:publish --tag=pages-migrations
php artisan vendor:publish --tag=pages-resources
```

<br/>

3. Run migrations:

```bash
php artisan migrate
```

<br/>

4. Install permissions:

```bash
php artisan pages:install
```

<br/>

5. Open `app/Providers/Filament/AdminPanelProvider.php` and add the following code:

```php
use Fitodac\Pages\PagesPlugin;
```

Search for the `$panel` variable and register the plugin at the end of the list:

```php
$panel->plugins([
	//... existing plugins...
	PagesPlugin::make(),
]);
```

<br/>

## Frontend

Remember to ompile your assets to include the new React component.

```bash
npm run dev
# or
npm run build
```

<br/>

## Usage

1. Navigate to the Filament admin panel at `/admin` (or your configured path).

2. Look for the "Pages" section in the navigation menu.

3. Create a new page with title, content, and custom slug (optional).

4. Publish your page when ready.

5. Access your published pages at `/pages/{slug}` on your website.

<br/>
<br/>

### License

This package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
