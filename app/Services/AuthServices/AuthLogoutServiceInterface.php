<?php


namespace App\Services\AuthServices;


interface AuthLogoutServiceInterface
{
    public function logoutApi(?string $bearer_token = null) : void;
}
