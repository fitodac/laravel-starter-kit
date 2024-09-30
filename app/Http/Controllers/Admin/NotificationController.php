<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Notifications\InAppNotification;
use App\Models\User;

class NotificationController extends Controller
{
	/**
	 * LIST
	 * 
	 * 
	 * 
	 */
	public function index()
	{
		return Inertia::render('admin/notifications/Notifications');
	}


	/**
	 * STORE
	 * 
	 * 
	 * 
	 */
	public function store(Request $request)
	{
		$request->validate([
			'body' => 'required'
		], [
			'body.required' => 'Notification body is required.',
		]);

		$title = is_null($request->title) ? '' : $request->title;

		// $user = User::find(1);
		// $user->notify(new InAppNotification($title, $request->body));
		// dd($user);

		if ($request->notification_for_all) {
			$users = User::all();

			foreach ($users as $user) {
				$user->notify(new InAppNotification($title, $request->body));
			}

			return back()->with('success', 'Notifications sent successfully.');
		} else {
			// 	dd($request->all());
			// 	$notification = new InAppNotification($title, $request->body, $request->user);
		}
	}


	/**
	 * UPDATE
	 * 
	 * 
	 * 
	 */
	public function update(Request $request, string $id)
	{
		//
	}

	/**
	 * DELETE
	 * 
	 * 
	 * 
	 */
	public function destroy(string $id)
	{
		//
	}
}
