<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
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

        $this->postJson('api/v1/auth/register', $user)
        ->assertStatus(201);

        $this->assertDatabaseHas('users', [
            'name' => $user['name'],
            'email' => $user['email']
        ]);
    }

    public function test_user_register_fields_required(): void
    {
        $this->post('api/v1/auth/register')
        ->assertStatus(422)
        ->assertJson([
            'message' => 'The name field is required. (and 2 more errors)',
            'errors' => [
                'name'      => ['The name field is required.'],
                'email'     => ['The email field is required.'],
                'password'  => ['The password field is required.'],
            ]
        ]);
    }

    public function test_user_register_password_confirmation(): void
    {
        $user = User::factory()->make()->toArray();
        $user['password'] = Str::random(10);
        $user['password_confirmation'] = 'fail';

        $this->postJson('api/v1/auth/register', $user)
        ->assertStatus(422)
        ->assertJson([
            'message' => 'The password field confirmation does not match.',
            'errors' => [
                'password' => ['The password field confirmation does not match.']
            ]
        ]);
    }

    public function test_user_login_successfully(): void
    {
        $password = Str::random(10);
        $user = User::factory()->create(['password'=> $password]);

        $response = $this->postJson('api/v1/auth/login', [
            'email'=> $user->email,
            'password'=> $password,
            'device_name' => 'web'
        ])
        ->assertStatus(200)
        ->assertJsonStructure([
            'data' => [
                'token'
            ]
        ]);

        $this->assertNotEmpty($response->decodeResponseJson()['data']['token'] ?? null);
    }

    public function test_user_login_fields_required(): void
    {
        $this->post('api/v1/auth/login')
            ->assertStatus(422)
            ->assertJson([
                'message' => 'The email field is required. (and 2 more errors)',
                'errors' => [
                    'email'         => ['The email field is required.'],
                    'password'      => ['The password field is required.'],
                    'device_name'   => ['The device name field is required.'],
                ]
            ]);
    }

    public function test_unauthorized_logout_without_login(): void
    {
        $this->get('api/v1/auth/logout')
            ->assertStatus(401);
    }

    public function test_user_logout_successfully(): void
    {
        $password = Str::random(10);
        $user = User::factory()->create(['password'=> $password]);

        $response = $this->postJson('api/v1/auth/login', [
            'email'=> $user->email,
            'password'=> $password,
            'device_name' => 'spa'
        ]);
        $this->withHeaders([
            'Authorization' => 'Bearer '.$response->decodeResponseJson()['data']['token'],
            'Accept' => 'application/json'
        ]);

        //logout request successfully
        $this->get('api/v1/auth/logout')
            ->assertStatus(200);

        //token removed successfully
        $this->assertDatabaseMissing('personal_access_tokens', [
            'tokenable_id' => $user->id,
            'tokenable_type' => User::class,
        ]);

        //session/cookie removed successfully
        $this->get('api/v1/auth/logout')
            ->assertStatus(401);
    }

    public function test_user_data_returned_successfully(): void
    {
        $password = Str::random(10);
        $user = User::factory()->create(['password'=> $password]);

        $response = $this->postJson('api/v1/auth/login', [
            'email'=> $user->email,
            'password'=> $password,
            'device_name' => 'spa'
        ]);
        $this->withHeaders([
            'Authorization' => 'Bearer '.$response->decodeResponseJson()['data']['token'],
            'Accept' => 'application/json'
        ]);

        //logout request successfully
        $this->get('api/v1/auth/user')
            ->assertJson([
                'data' => [
                    'user' => [
                        'name' => $user->name,
                        'email' => $user->email
                    ]
                ]
            ]);

    }

}
