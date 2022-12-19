<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function register(RegisterUserRequest $request)
    {
        $request->validated();
        return $this->user->storeUser($request);
    }

    public function login(Request $request)
    {
        return $this->user->loginUser($request);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => "Logged Out Successfully",
        ]);
    }
}
