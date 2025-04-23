<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
	use HasFactory;

	protected $table = 'sessions';

	protected $primaryKey = 'id';

	public $incrementing = false;

	protected $keyType = 'string';

	public $timestamps = false;

	protected $fillable = [
		'id',
		'user_id',
		'ip_address',
		'user_agent',
		'payload',
		'last_activity'
	];

	protected $casts = [
		'last_activity' => 'datetime',
	];

	/**
	 * Get the user that owns the session.
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function user()
	{
		return $this->belongsTo(User::class);
	}
}
