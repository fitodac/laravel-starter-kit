<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MediaManager;

class MediaManagerController extends Controller
{

	/**
	 * Get a list of media items from the 'images' collection.
	 *
	 * @return \Illuminate\Http\JsonResponse
	 * 
	 * 
	 * 
	 */
	public function index()
	{
		$manager = MediaManager::first();
		$images = $manager->getMedia('images');
		$images_total = $manager->getMedia('images')->count();

		return response()->json(compact('images', 'images_total'));
	}

	/**
	 * Store media files in the 'images' collection.
	 *
	 * @param \Illuminate\Http\Request $request
	 * @return void
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


	/**
	 * Delete a media item from the 'images' collection.
	 *
	 * @param string $uuid The UUID of the media item to be deleted.
	 * @return \Illuminate\Http\JsonResponse
	 * 
	 * 
	 * 
	 */
	public function destroy($uuid)
	{
		$mediaManager = MediaManager::first();
		$media = $mediaManager->getMediaByUuid($mediaManager, $uuid);

		if ($media) {
			$media->delete();
			return response()->json(['message' => 'Image deleted successfully']);
		}

		return response()->json(['message' => 'Image not found'], 404);
	}
}
