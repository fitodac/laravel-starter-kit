<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{

	/**
	 * LIST
	 * 
	 * 
	 * 
	 */
	public function index()
	{
		$per_page = 15;

		$permissions = Permission::paginate($per_page);

		return Inertia::render('admin/permissions/Permissions', compact('permissions'));
	}

	/**
	 * CREATE
	 * 
	 * 
	 * 
	 */
	public function create()
	{
		//
	}

	/**
	 * STORE
	 * 
	 * 
	 * 
	 */
	public function store(Request $request)
	{
		//
	}

	/**
	 * SHOW
	 * 
	 * 
	 * 
	 */
	public function show(string $id)
	{
		//
	}

	/**
	 * EDIT
	 * 
	 * 
	 * 
	 */
	public function edit(string $id)
	{
		//
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
