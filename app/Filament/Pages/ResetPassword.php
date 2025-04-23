<?php

namespace App\Filament\Pages;

use Filament\Pages\Auth\PasswordReset\ResetPassword as BaseResetPassword;

class ResetPassword extends BaseResetPassword
{
	protected static string $view = 'filament.app.auth.password-reset.reset';
}
