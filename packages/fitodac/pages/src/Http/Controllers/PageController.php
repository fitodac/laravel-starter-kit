<?php

namespace Fitodac\Pages\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Fitodac\Pages\Models\Page;
use Inertia\Inertia;

class PageController extends Controller
{
	/**
	 * -------------------------------------------------------------------------------
	 * Display the specified page.
	 * -------------------------------------------------------------------------------
	 *
	 * @param string $slug The URL slug of the page
	 * @return \Inertia\Response Returns an Inertia response with the page data
	 * @throws \Illuminate\Database\Eloquent\ModelNotFoundException When page is not found
	 */
	public function show($slug)
	{
		$page = Page::where('slug', $slug)->firstOrFail();

		return Inertia::render('dynamicPage/Index', [
			'page' => [
				'title' => $page->title,
				'content' => $page->content,
				'featured_image' => $page->featured_image,
				'slug' => $page->slug
			]
		]);
	}
}
