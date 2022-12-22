<?php

namespace Tests\Controllers;

use App\Models\User;
use Tests\TestCase;

class AuthenticationController extends TestCase
{
    /**
     * @test
     *
     * ... check if /api/register uri is accessbile with data
     */
    public function test_should_register_user_successfully()
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

    /**
     * @test
     *
     * ... check if /api/register uri is accessbile without data, response should be a 422 status
     */
    public function test_should_return_unprocessable_entity_error_with_validation_message()
    {
        // api/register uri require basic user information for registration
        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json',
        ])->json(
            'POST',
            '/api/register',
        );

        // expect that the status code return 422 since you didnt pass any field
        $res->assertStatus(422);
    }

    /**
     * @test
     *
     * ... check if /api/login uri is accessbile via passing a correct user credential
     */
    public function test_should_login_successfully()
    {
        // pass correct email and password credentials
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

        // status should return okay on log in
        $res->assertStatus(200);
    }

    /**
     * @test
     *
     * ... check if /api/login uri has an error handler for wrong credentials, the uri accept the request, but will request error message
     */
    public function test_should_return_error_validation_on_login()
    {
        // pass invalid email and password credentials
        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json',
        ])->json(
            'POST',
            '/api/login',
            [
                "email" => "invalid@gmail.com",
                "password" => 'password',
            ]
        );

        // status should still return 200 (okay), but cant proceed with the login
        $res->assertStatus(200);
    }

    /**
     * @test
     *
     * ... check if /api/login uri requires email & password field
     */
    public function test_login_should_return_unprocessable_content()
    {
        // pass empty email and password credentials
        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json',
        ])->json(
            'POST',
            '/api/login',
            [
                "email" => "",
                "password" => '',
            ]
        );

        // status should still return 200 (okay), with validation error
        $res->assertStatus(200);
    }


    /**
     * @test
     *
     * ... check if /api/logout uri is accessbile via logging out a logged in user
     */
    public function test_should_logout_user()
    {
        // create dummy user and generate token
        $user = $this->createDummyuser(fake()->unique()->safeEmail());
        $token = $user->createToken('permission')->plainTextToken;

        // pass token as reference of the active/user user
        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json',
            'Authorization' => 'Bearer ' . $token
        ])->json(
            'POST',
            '/api/logout'
        );

        // logout should return okay status
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
