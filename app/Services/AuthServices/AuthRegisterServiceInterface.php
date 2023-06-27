<?php


namespace App\Services\AuthServices;


interface AuthRegisterServiceInterface
{
    public function register(string $name, string $email, string $password) : void;
}
