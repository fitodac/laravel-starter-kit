<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\InAppNotification;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class NotificationController extends Controller
{
	/**
	 * LIST
	 * 
	 * 
	 * 
	 */
	public function index(Request $request): Response
	{
		$per_page = config('settings.general.per_page');

		$notifications = InAppNotification::orderBy($request->order ?? 'id', $request->dir === 'ascending' ? 'asc' : 'desc')
			->paginate($per_page);

		return Inertia::render('admin/notifications/Notifications', compact('notifications'));
	}


	/**
	 * STORE
	 * 
	 * 
	 * 
	 */
	public function store(Request $request): RedirectResponse
	{

		$request->validate([
			'body' => 'required',
		], [
			'body.required' => 'Notification body is required.',
		]);

		InAppNotification::create($request->all());

		return back()->with('success', 'Notification created successfully.');

		// if ($request->notification_for_all) {
		// 	$users = User::all();

		// 	foreach ($users as $user) {
		// 		$user->notify(new InAppNotification($title, $request->body));
		// 	}

		// 	return back()->with('success', 'Notifications sent successfully.');
		// } else {
		// 	dd($request->all());
		// 	$notification = new InAppNotification($title, $request->body, $request->user);
		// }
	}


	/**
	 * UPDATE
	 * 
	 * 
	 * 
	 */
	public function update(Request $request, InAppNotification $notification): RedirectResponse
	{
		$request->validate([
			'body' => 'required',
		], [
			'body.required' => 'Notification body is required.',
		]);

		$notification->update($request->all());

		return back()->with('success', 'Notification updated successfully.');
	}

	/**
	 * DELETE
	 * 
	 * 
	 * 
	 */
	public function destroy(InAppNotification $notification): RedirectResponse
	{
		$notification->delete();
		return back()->with('success', 'Notification deleted successfully.');
	}



	// public function markAsRead(InAppNotification $notification)
	// {
	// 	$notification->markAsRead();
	// 	return back()->with('success', 'Notification marked as read successfully.');
	// }

	public function markAllAsRead(): RedirectResponse
	{
		$user = auth()->user();

		$user->unreadNotifications()->update(['read_at' => now()]);
		return back()->with('success', 'All notifications marked as read successfully.');
	}
}
