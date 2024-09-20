<?php

namespace App\Http\Controllers\Demo;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\demo\Product;

class TablesController extends Controller
{

	/**
	 * LIST
	 * 
	 * 
	 * 
	 */
	public function index(Request $request, $template)
	{
		$per_page = 16;

		if ($request->has('order')) {
			$direction = $request->has('dir') ? ($request->dir === 'ascending' ? 'asc' : 'desc') : 'asc';

			$products = Product::orderBy($request->order, $direction)->paginate($per_page);
		} else {
			$products = Product::paginate($per_page);
		}

		return Inertia::render("demo/pages/$template/RealDataTablesPage", compact('products'));
	}
}
