<?php

namespace App\Services\AuthServices;

use App\Models\User;

class AuthRegisterService implements AuthRegisterServiceInterface
{
    public function register(string $name, string $email, string $password) : void
    {
        User::create([
            'name' => $name,
            'password' => $password,
            'email' => $email
        ]);
    }
}
