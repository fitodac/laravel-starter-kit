<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
	/** @use HasFactory<\Database\Factories\AccountFactory> */
	use HasFactory;

	protected $fillable = [
		'user_id',
		'language',
		'color_mode',
		'phone',
		'birth_date',
		'address',
		'city',
		'country',
		'zip_code',
		'job_title',
		'company',
		'bio'
	];

	/**
	 * The attributes that should be cast.
	 *
	 * @var array<string, string>
	 */
	protected $casts = [
		'birth_date' => 'datetime',
		'user_id' => 'integer',
	];
}
