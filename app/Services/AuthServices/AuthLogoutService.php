<?php

namespace App\Services\AuthServices;

use Laravel\Sanctum\PersonalAccessToken;

class AuthLogoutService implements AuthLogoutServiceInterface
{
    public function logoutApi(string|null $bearer_token) : void
    {
        //clear the current token if found, if not then clear all
        $token = PersonalAccessToken::findToken($bearer_token);

        //token invalidation
        if($token)
        {
            $token->delete();
        }
        else
        {
            auth()->user()->tokens()->delete();
        }

        //remove session/cookie based auth
        auth()->forgetGuards()->guard('web')->logout();
    }
}
