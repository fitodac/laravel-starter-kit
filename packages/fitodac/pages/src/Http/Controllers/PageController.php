<?php

namespace Fitodac\Pages\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Fitodac\Pages\Models\Page;
use Inertia\Inertia;

class PageController extends Controller
{
	public function show($slug)
	{
		$page = Page::where('slug', $slug)->firstOrFail();

		return Inertia::render('Index', [
			'page' => [
				'title' => $page->title,
				'content' => $page->content,
				'featured_image' => $page->featured_image,
				'slug' => $page->slug
			]
		]);
	}
}
