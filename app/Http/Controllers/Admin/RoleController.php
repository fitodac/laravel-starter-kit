<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
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

		$roles = Role::paginate($per_page);

		return Inertia::render('admin/roles/Roles', compact('roles'));
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
