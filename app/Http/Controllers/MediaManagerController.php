<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MediaManager;

class MediaManagerController extends Controller
{

	/**
	 * LIST FILES
	 * 
	 * 
	 * 
	 */
	public function index()
	{
		$manager = MediaManager::first();
		$images = $manager->getMedia('images');
		

		return response()->json(compact('images'));
	}

	/**
	 * STORE
	 * 
	 * 
	 * 
	 */
	public function store(Request $request)
	{
		$files = $request->file('files');
		$manager = MediaManager::first();

		foreach ($files as $file) {
			$manager->addMedia($file)->toMediaCollection('images');
		}
	}
}
