<?php

namespace Fitodac\Pages\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class Page extends Model
{
	use HasFactory;

	protected $fillable = [
		'title',
		'content',
		'featured_image',
		'slug',
	];

	protected static function boot()
	{
		parent::boot();

		/**
		 * ---------------------------------------------------------------------------
		 * Handle the Page "creating" event.
		 * Automatically generates a URL-friendly slug from the title if not provided
		 * ---------------------------------------------------------------------------
		 * 
		 * @param \YourVendor\DynamicPages\Models\Page $page
		 * @return void
		 */
		static::creating(function ($page) {
			if (empty($page->slug)) {
				$page->slug = Str::slug($page->title);
			}
		});

		/**
		 * ---------------------------------------------------------------------------
		 * Handle the Page "updating" event.
		 * Automatically updates the slug when the title changes and no slug is provided
		 * ---------------------------------------------------------------------------
		 * 
		 * @param \YourVendor\DynamicPages\Models\Page $page
		 * @return void
		 */
		static::updating(function ($page) {
			if ($page->isDirty('title') && empty($page->slug)) {
				$page->slug = Str::slug($page->title);
			}
		});
	}
}
