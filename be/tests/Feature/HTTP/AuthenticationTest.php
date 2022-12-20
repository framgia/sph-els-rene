<?php

namespace Tests\Feature\HTTP;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    public function test_registration_api_with_processable_content()
    {
        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json'
        ])->json(
            'POST',
            '/api/register',
            [
                "first_name" => fake()->firstName(),
                "middle_name" => fake()->firstName(),
                "last_name" => fake()->lastName(),
                "email" => fake()->unique()->safeEmail(),
                "password_confirmation" => 'password',
                "password" => 'password',
            ]
        );
        $res->assertStatus(201);
    }

    public function test_registration_api_with_unprocessable_content_return_validation_message()
    {
        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json',
        ])->json(
            'POST',
            '/api/register',
        );
        $res->assertStatus(422);
    }



    public function test_login_api()
    {
        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json',
        ])->json(
            'POST',
            '/api/login',
            [
                "email" => "admin@gmail.com",
                "password" => 'password',
            ]
        );
        $res->assertStatus(200);
    }


    public function test_logout_api()
    {

        $user = $this->createDummyuser(fake()->unique()->safeEmail());
        $token = $user->createToken('permission')->plainTextToken;

        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json',
            'Authorization' => 'Bearer ' . $token
        ])->json(
            'POST',
            '/api/logout'
        );
        $res->assertStatus(200);
    }

    private function createDummyuser($email = null, $fname = null, $mname = null, $lanme = null)
    {
        return User::create([
            'first_name' => $fname ?? "sampple",
            'middle_name' => $mname ?? "sampple",
            'last_name' => $lanme ?? "sampple",
            'role' => 'user',
            'email' => $email ?? "sampple@gmail.com",
            'password' => bcrypt("password"),
        ]);
    }
}
