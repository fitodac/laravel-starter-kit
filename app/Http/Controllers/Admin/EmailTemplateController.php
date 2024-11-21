<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EmailTemplate;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Data\EmailTemplateData;

class EmailTemplateController extends Controller
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

		$templates = EmailTemplate::orderBy($request->order ?? 'id', $request->dir === 'ascending' ? 'asc' : 'desc')
			->paginate($per_page);

		$templates = EmailTemplateData::collect($templates);

		return Inertia::render('admin/emails/Index', compact('templates'));
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		//
	}

	/**
	 * Display the specified resource.
	 */
	public function show(EmailTemplate $emailTemplate)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(EmailTemplate $emailTemplate)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, EmailTemplate $emailTemplate)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(EmailTemplate $emailTemplate)
	{
		//
	}
}
