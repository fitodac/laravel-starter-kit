<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAccountRequest extends FormRequest
{
	/**
	 * Determine if the user is authorized to make this request.
	 */
	public function authorize(): bool
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
	 */
	public function rules(): array
	{

		$rules = [];

		if ($this->has('preferences')) {
			$rules['colorMode'] = 'required|in:light,dark';
			$rules['language'] = 'required|in:en,sp';
		}

		return $rules;
	}


	public function messages(): array
	{
		return [
			'colorMode.in' => 'The color mode must be light or dark',
			'colorMode.required' => 'The color mode is required',
			'language.in' => 'The language must be en or es',
			'language.required' => 'The language is required',
		];
	}
}
