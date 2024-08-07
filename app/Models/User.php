<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
	use HasFactory, Notifiable, HasRoles;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array<int, string>
	 */
	protected $fillable = [
		// Basic information
		'name',
		'lastname',
		'username',
		'email',
		'password',
		'phone',

		// Personal information
		'birth_date',
		'address',
		'city',
		'country',
		'zip',

		// Professional information
		'job_title',
		'company',
		'bio',

		// Prefferences and settings
		'profile_picture',
		'status',
	];

	/**
	 * The attributes that should be hidden for serialization.
	 *
	 * @var array<int, string>
	 */
	protected $hidden = [
		'password',
		'remember_token',
	];

	/**
	 * Get the attributes that should be cast.
	 *
	 * @return array<string, string>
	 */
	protected function casts(): array
	{
		return [
			'email_verified_at' => 'datetime',
			'password' => 'hashed',
		];
	}

	public function sessions()
	{
		return $this->hasMany(Session::class);
	}

	public function getPermissionsAttribute()
	{
		if ($this->id) {
			return $this->getPermissionsViaRoles()->pluck('name');
		}

		return [];
	}
}
