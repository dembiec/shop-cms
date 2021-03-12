<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = array_map(function ($value) {
            return htmlspecialchars($value);
        }, $request->validated());

        if (!Auth::attempt($credentials)) {
            return response([
                'email' => ['Incorrect email or password.']
            ], 401);
        }

        return response(Auth::user());
    }

    public function logout()
    {
        Auth::logout();
    }
}
