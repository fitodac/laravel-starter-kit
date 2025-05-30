<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
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
use Filament\Navigation\NavigationItem;
use Jeffgreco13\FilamentBreezy\BreezyCore;
use Filament\Navigation\MenuItem;
use App\Filament\User\Pages\CustomPage;
use Filament\Forms\Components\FileUpload;
use App\Filament\Pages\Auth\Login;
use App\Filament\Pages\Auth\Register;
use App\Filament\Pages\Auth\EmailVerification\EmailVerificationPrompt;
use App\Filament\Pages\Auth\PasswordReset\RequestPasswordReset;


class UserPanelProvider extends PanelProvider
{
	public function panel(Panel $panel): Panel
	{
		return $panel
			->default()
			->id('user')
			->path('')
			->colors([
				// 'primary' => Color::Amber,
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

			->userMenuItems([
				MenuItem::make()
					->label(__('Account'))
					->url(fn(): string => route('filament.user.pages.account'))
					->icon('heroicon-o-cog-6-tooth'),
			])

			->databaseNotifications()

			->navigationItems([
				NavigationItem::make('Home page')
					->url('/')
					->icon('heroicon-o-home')
					->sort(-10),
			])


			/**
			 * ------------------------------------------------
			 * Resources
			 * ------------------------------------------------
			 */
			->discoverResources(in: app_path('Filament/User/Resources'), for: 'App\\Filament\\User\\Resources')
			->discoverPages(in: app_path('Filament/User/Pages'), for: 'App\\Filament\\User\\Pages')
			->pages([
				// Pages\Dashboard::class,
				'custom-page' => CustomPage::class,
			])
			->discoverWidgets(in: app_path('Filament/User/Widgets'), for: 'App\\Filament\\User\\Widgets')
			->widgets([
				Widgets\AccountWidget::class,
				Widgets\FilamentInfoWidget::class,
			])
			->plugins([
				BreezyCore::make()
					->myProfile(
						shouldRegisterUserMenu: true,
						userMenuLabel: __('Profile'),
						shouldRegisterNavigation: false,
						// navigationGroup: 'Settings',
						hasAvatars: true,
						slug: 'profile'
					)
					->enableTwoFactorAuthentication(true)
					->avatarUploadComponent(
						fn() => FileUpload::make('profile_picture')
							->avatar()
							->disk('public')
							->directory('avatars')
							->visibility('public')
							->maxSize(1024)
							->imageResizeMode('cover')
							->imageCropAspectRatio('1:1')
							->imageResizeTargetWidth('256')
							->imageResizeTargetHeight('256')
					)
				// ->myProfileComponents([UserPointsComponent::class, AccountFormComponent::class])
				// ->withoutMyProfileComponents(['personal_info'])
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
			->authMiddleware([
				Authenticate::class,
			])


			/**
			 * ------------------------------------------------
			 * Authentication
			 * ------------------------------------------------
			 */
			// Use conditional logic to apply custom auth pages
			->when(config('settings.general.login_enabled') ?? true, fn($panel) => $panel->login(Login::class))
			// Ensure the custom Register class is used here when registration is enabled
			->when(config('settings.general.registration_enabled') ?? true, fn($panel) => $panel->registration(Register::class))
			->when(config('settings.general.password_reset_enabled') ?? true, fn($panel) => $panel->passwordReset(RequestPasswordReset::class))
			->when(config('settings.general.email_verification_enabled') ?? true, fn($panel) => $panel->emailVerification(EmailVerificationPrompt::class)) // Added conditional for email verification too

			->loginRouteSlug('login')
			->registrationRouteSlug('register')
			->passwordResetRoutePrefix('password-reset')
			->passwordResetRequestRouteSlug('request')
			->passwordResetRouteSlug('reset')
			->emailVerificationRoutePrefix('email-verification')
			->emailVerificationPromptRouteSlug('prompt')
			->emailVerificationRouteSlug('verify')
			// Socialite
			->renderHook(
				'panels::auth.login.form.after',
				fn() => config('settings.general.google_authentication_enabled') ? view('auth.socialite.social-authentication') : null
			);
	}
}
