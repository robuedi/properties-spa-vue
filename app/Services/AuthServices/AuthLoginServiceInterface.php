<?php


namespace App\Services\AuthServices;


use Illuminate\Validation\ValidationException;

interface AuthLoginServiceInterface
{
    public function loginApi(string $email, string $password, string $device_name) : string|ValidationException;
}
