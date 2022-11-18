<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'first_name' => 'required | string',
            'last_name' => 'required | string',
            'email' => 'required | string',
            'password' => 'required | string | confirmed',
        ]);

        $user = User::create([
            'first_name' => $fields['first_name'],
            'middle_name' => $fields['middle_name'] ?? "",
            'last_name' => $fields['last_name'],
            'role' => 'user',
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
        ]);

        $token = $user->createToken('permission')->plainTextToken;

        return response([
            'user' => $user,
            'verified_email' => $user->email_verified_at,
            'token' => $token,
            'Message' => 'Registered Succesfully',
        ], 201);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['validation_errors' => $validator->messages()]);
        } else {
            $user = User::where('email', $request->email)->first();
            if (!$user || Hash::check(bcrypt($request->password), $user->password)) {
                return response()->json([
                    'message' => 'Invalid Credentials',
                ]);
            } else {
                $token = $user->createToken('permission')->plainTextToken;
                return response([
                    'user' => $user,
                    'role' => $user->role,
                    'verified_email' => $user->email_verified_at,
                    'token' => $token,
                    'Message' => 'Login Succesfully',
                ]);
            }
        }
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => "Logged Out Successfully",
        ]);
    }
}
