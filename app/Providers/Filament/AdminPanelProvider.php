<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use BezhanSalleh\FilamentShield\FilamentShieldPlugin;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Jeffgreco13\FilamentBreezy\BreezyCore;
use App\Filament\Pages\Auth\Login;
use App\Http\Middleware\FilamentMiddleware;
use Fitodac\Pages\PagesPlugin;

class AdminPanelProvider extends PanelProvider
{
	public function panel(Panel $panel): Panel
	{
		return $panel
			->id('admin')
			->path('admin')
			->authGuard('web')
			->registration(false)
			->login()
			->authMiddleware([
				'role:Admin|Super Admin'
			])
			->colors([
				// 'primary' => Color::Blue,
				// 'danger' => Color::Rose,
				'gray' => Color::Gray,
				'info' => Color::Blue,
				'success' => Color::Emerald,
				'warning' => Color::Orange,
			])
			->font('Inter')
			->brandLogo(asset('img/brand.svg'))
			->brandLogoHeight('1.4rem')

			->viteTheme('resources/css/filament/admin/theme.css')
			->darkMode(false)

			->favicon('favicon.ico')
			->sidebarCollapsibleOnDesktop(true)

			->userMenuItems([])

			->databaseNotifications()


			/**
			 * ------------------------------------------------
			 * Resources
			 * ------------------------------------------------
			 */
			->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
			->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
			->pages([
				// Pages\Dashboard::class,
			])
			->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
			->widgets([
				Widgets\AccountWidget::class,
				Widgets\FilamentInfoWidget::class,
			])
			->middleware([
				EncryptCookies::class,
				AddQueuedCookiesToResponse::class,
				StartSession::class,
				AuthenticateSession::class,
				ShareErrorsFromSession::class,
				VerifyCsrfToken::class,
				SubstituteBindings::class,
				DisableBladeIconComponents::class,
				DispatchServingFilamentEvent::class,
			])
			->plugins([
				FilamentShieldPlugin::make(),
			])
			->authMiddleware([
				Authenticate::class,
			])


			/**
			 * ------------------------------------------------
			 * Plugins
			 * ------------------------------------------------
			 */
			->plugin(
				BreezyCore::make()
					->myProfile(
						shouldRegisterUserMenu: true,
						userMenuLabel: __('Profile'),
						shouldRegisterNavigation: false,
						navigationGroup: 'Settings',
						hasAvatars: true,
						slug: 'profile'
					)
					->enableTwoFactorAuthentication(true)
			)

			->plugin(
				PagesPlugin::make()
			)

			->middleware([
				FilamentMiddleware::class
			])
			->authMiddleware([
				FilamentMiddleware::class
			])

			/**
			 * ------------------------------------------------
			 * Authentication
			 * ------------------------------------------------
			 */
			->when(config('settings.general.login_enabled') ?? true, fn($panel) => $panel->login(Login::class));
	}
}
