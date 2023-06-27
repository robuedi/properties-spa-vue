<?php

namespace App\Services\AuthServices;

use Illuminate\Validation\ValidationException;

class AuthLoginService implements AuthLoginServiceInterface
{
    public function loginApi(string $email, string $password, string $device_name) : string|ValidationException
    {
        //login user
        $user_logged = auth()->attempt([
            'email'     => $email,
            'password'  => $password,
        ],false);

        if(!$user_logged){
            throw ValidationException::withMessages(['The provided credentials are invalid.']);
        }

        return auth()->user()->createToken($device_name)->plainTextToken;
    }
}
