<?php

namespace App\Services;

use App\Models\Account;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateAccountRequest;

class AccountService
{

	public function updateAccount(UpdateAccountRequest $request)
	{
		$user = $request->user();
		$data = $request->validated();
		$account = $user->account()->update($data);

		return $account;
	}
}
