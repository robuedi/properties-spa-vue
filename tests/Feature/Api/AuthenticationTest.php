<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Tests\TestCase;
use App\Models\User;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    /**
     * user can register
     */
    public function test_user_register_successfully(): void
    {
        $user = User::factory()->make()->toArray();
        $user['password'] = Str::random(10);
        $user['password_confirmation'] = $user['password'];

        $this->post('api/v1/auth/register', [
            'form_params' => $user,
        ])
        ->assertStatus(201);

        $this->assetDabaseHas('users', [
            'name' => $user['name'],
            'email' => $user['email']
        ]);
    }

    public function test_user_register_fields_required(): void
    {
        $this->post('api/v1/auth/register')
        ->assertStatus(422)
        ->assertJsonStructure([
            'message' => 'The given data was invalid.',
            'errors' => [
                'name' => ['The name field is required.'],
                'email' => ['The email field is required.'],
                'password' => ['The password field is required.'],
            ]
        ]);
    }

    public function test_user_register_password_confirmation(): void
    {
        $user = User::factory()->make()->toArray();
        $user['password'] = Str::random(10);
        $user['password_confirmation'] = 'fail';

        $this->post('api/v1/auth/register', [
            'form_params' => $user,
        ])
        ->assertStatus(422)
        ->assertJsonStructure([
            'message' => 'The given data was invalid.',
            'errors' => [
                'password' => ['The password confirmation does not match.']
            ]
        ]);
    }

    public function test_user_login_successfully(): void
    {
        $password = Str::random(10);
        $user = User::factory()->create(['password'=> $password]);

        $this->post('api/v1/auth/login', [
            'form_params' => [
                'email'=> $user->email,
                'password'=> $password,
                'password_confirmation'=> $password,
                'device_name' => 'web'
            ],
        ])
        ->assertStatus(200)
        ->assertJsonStructure([
            'token'
        ]);
    }

    public function test_user_login_fields_required(): void
    {
        $this->post('api/v1/auth/login')
            ->assertStatus(422)
            ->assertJson([
                'message' => 'The given data was invalid.',
                'errors' => [
                    'email' => ['The email field is required.'],
                    'password' => ['The password field is required.']
                ]
            ]);
    }

    public function test_user_logout_successfully(): void
    {
        $password = Str::random(10);
        $user = User::factory()->create(['password'=> $password]);

        Auth::attempt([
            'email'=>$user->email,
            'password'=>$password
        ]);
        $token = $user->createToken('web')->plainTextToken;
        $headers = ['Authorization' => "Bearer $token"];

        $this->get('api/v1/auth/logout', $headers)
            ->assertStatus(200);

        $this->assertEquals(0, $user->token()->count());
    }

}
