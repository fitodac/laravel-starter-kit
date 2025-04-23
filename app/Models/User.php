<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use Filament\Models\Contracts\FilamentUser;
use Filament\Models\Contracts\HasAvatar;
use Filament\Panel;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

use App\Data\AccountData;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Spatie\Permission\Traits\HasRoles;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class User extends Authenticatable implements FilamentUser, HasAvatar, MustVerifyEmail
{
	/** @use HasFactory<\Database\Factories\UserFactory> */
	use HasFactory, Notifiable, HasRoles;

	/**
	 * -------------------------------------------------------------------------------
	 * The "booted" method of the model.
	 * -------------------------------------------------------------------------------
	 */
	protected static function booted(): void
	{
		static::created(function (User $user) {
			$user->assignRole('User');

			if (!$user->account()->exists()) {
				$user->account()->create([
					'language' => config('app.locale'),
					'color_mode' => config('settings.general.color_mode'),
				]);
			}
		});
	}

	/**
	 * -------------------------------------------------------------------------------
	 * The attributes that are mass assignable.
	 * -------------------------------------------------------------------------------
	 */
	protected $fillable = [
		'name',
		'lastname',
		'username',
		'email',
		'email_verified_at',
		'password',
		'google_id',
		'profile_picture',
		'status',
	];

	/**
	 * -------------------------------------------------------------------------------
	 * The attributes that should be hidden for serialization.
	 * -------------------------------------------------------------------------------
	 */
	protected $hidden = [
		'password',
		'remember_token',
	];

	/**
	 * -------------------------------------------------------------------------------
	 * Get the attributes that should be cast.
	 * -------------------------------------------------------------------------------
	 */
	protected function casts(): array
	{
		return [
			'email_verified_at' => 'datetime',
			'password' => 'hashed',
		];
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Get the sessions associated with the user.
	 * -------------------------------------------------------------------------------
	 */
	public function sessions(): HasMany
	{
		return $this->hasMany(Session::class);
	}


	/**
	 * -------------------------------------------------------------------------------
	 * Determines if the user can access a specific Filament panel
	 * -------------------------------------------------------------------------------
	 */
	public function canAccessPanel(Panel $panel): bool
	{
		return true;
		return $panel->getId() !== 'admin' ||
			($this->hasVerifiedEmail() && Str::endsWith($this->email, config('settings.general.allowed_email_domains_can_access_admin')));
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Get the URL of the user's Filament avatar
	 * -------------------------------------------------------------------------------
	 */
	public function getFilamentAvatarUrl(): ?string
	{
		return $this->profile_picture ? Storage::url($this->profile_picture) : null;
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Get the user's full name for display in Filament admin panel
	 * -------------------------------------------------------------------------------
	 */
	public function getFilamentName(): string
	{
		return $this->name && $this->lastname
			? "{$this->name} {$this->lastname}"
			: $this->username ?? 'User';
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Determine if the user can impersonate other users.
	 * -------------------------------------------------------------------------------
	 */
	public function canImpersonate(): bool
	{
		if (config('settings.general.admin_can_impersonate')) {
			return $this->hasRole(['Admin', 'Super Admin']);
		} else {
			return $this->hasRole('Super Admin');
		}
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Get the account associated with the user.
	 * -------------------------------------------------------------------------------
	 */
	public function account(): HasOne
	{
		return $this->hasOne(Account::class);
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Get the user's roles.
	 * -------------------------------------------------------------------------------
	 */
	public function getRoles(): array
	{
		return $this->roles->map(fn($role) => ['id' => $role->id, 'name' => $role->name])->toArray();
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Get the user's account data.
	 * -------------------------------------------------------------------------------
	 */
	public function getAccount(): AccountData
	{
		return AccountData::from($this->account->toArray());
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Determine if two-factor authentication has been confirmed.
	 * -------------------------------------------------------------------------------
	 */
	public function hasConfirmedTwoFactor(): bool
	{
		return $this->hasEnabledTwoFactor() && $this->two_factor_confirmed_at !== null;
	}

	/**
	 * -------------------------------------------------------------------------------
	 * Determine if two-factor authentication is enabled.
	 * -------------------------------------------------------------------------------
	 */
	public function hasEnabledTwoFactor(): bool
	{
		return $this->two_factor_secret !== null;
	}
}
