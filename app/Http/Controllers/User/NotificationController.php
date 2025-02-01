<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use App\Data\NotificationData;
use Illuminate\Http\RedirectResponse;

class NotificationController extends Controller
{
	
	/**
	 * Display a listing of notifications for the authenticated user
	 * 
	 * @return Response
	 */
	public function index(): Response
	{
		$per_page = config('settings.general.per_page');

		$user = Auth::user();
		$notifications = NotificationData::collect($user->unreadNotifications()->paginate($per_page));
		// dd($notifications);
		return Inertia::render('notification/NotificationsList', compact('notifications'));
	}

	
	/**
	 * Mark a single notification as read
	 * 
	 * @param Request $request
	 * @param string $id
	 * @return RedirectResponse
	 */
	public function markAsRead(Request $request, string $id): RedirectResponse
	{
		$notification = $request->user()->notifications()->findOrFail($id);
		$notification->markAsRead();

		return back()->with('success', 'Notification marked as read successfully.');
	}


	/**
	 * Mark all notifications as read for the authenticated user
	 * 
	 * @param Request $request
	 * @return RedirectResponse
	 */
	public function markAllAsRead(Request $request): RedirectResponse
	{
		$request->user()->unreadNotifications->markAsRead();
		return back()->with('success', 'All notifications marked as read successfully.');
	}
}
