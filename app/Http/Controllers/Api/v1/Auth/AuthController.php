<?php

namespace App\Http\Controllers\Api\v1\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\v1\AuthLoginRequest;
use App\Http\Requests\v1\AuthLogoutRequest;
use App\Http\Requests\v1\AuthRegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    public function register(AuthRegisterRequest $request)
    {
        User::create([
            'name' => $request->name,
            'password' => $request->password,
            'email' => $request->email
        ]);

        return response()->json([])->setStatusCode(Response::HTTP_CREATED);
    }

    public function login(AuthLoginRequest $request)
    {
        //login user
        $user = auth()->attempt([
            'email'     => $request->email,
            'password'  => $request->password,
        ],false);

        if(!$user){
            throw ValidationException::withMessages(['The provided credentials are invalid.']);
        }

        //return token
        return response()->json([
            'token' => auth()->user()->createToken($request->device_name)->plainTextToken
        ])->setStatusCode(Response::HTTP_OK);
    }

    public function logout(AuthLogoutRequest $request)
    {
        //cookie logout
        auth('web')->logout();
        //token invalidation
        if($request->device_name)
        {
            auth()->user()->tokens()->where('name', $request->device_name)->delete();
        }
        else
        {
            auth()->user()->tokens()->delete();
        }

        return response()->json()->setStatusCode(Response::HTTP_OK);
    }
}
