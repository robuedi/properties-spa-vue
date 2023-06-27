<?php


namespace App\Services\AuthServices;


interface AuthLogoutServiceInterface
{
    public function logoutApi(string|null $bearer_token) : void;
}
