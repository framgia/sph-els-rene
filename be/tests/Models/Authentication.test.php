<?php

namespace Tests\Models;

use App\Models\User;
use Tests\TestCase;

class Authentication extends TestCase
{

    /**
     * @test
     *
     * ... check if registration store data in database
     */
    public function test_when_registration_of_user_the_email_should_exist_in_db()
    {
        // create unique fake email
        $email = fake()->unique()->safeEmail();

        // create and register user using the newly created fake email
        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json'
        ])->json(
            'POST',
            '/api/register',
            $this->createUserPassableEmail($email),
        );

        // email should be in database
        $this->assertDatabaseHas('users', [
            'email' => $email
        ]);
    }

    /**
     * @test
     *
     * ... check if registration generate token on create
     */
    public function test_given_that_registration_works_response_must_carry_token()
    {
        // create unique fake email
        $email = fake()->unique()->safeEmail();

        // create and register user using the newly created fake email
        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json'
        ])->json(
            'POST',
            '/api/register',
            $this->createUserPassableEmail($email),
        );

        // response should have a token
        $this->assertTrue(isset($res->original["token"]));
    }

    /**
     * @test
     *
     * ... check if failed login return a validation error
     */
    public function  test_when_login_fails_the_reponse_must_be_an_array_of_validation_errors()
    {
        // pass empty fields in login
        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json',
        ])->json(
            'POST',
            '/api/login',
            [
                'email' => "",
                'password' => ""
            ],
        );

        // response should return validation errors
        $this->assertTrue(isset($res->original["validation_errors"]));
    }

    /**
     * @test
     *
     * ... check if failed login return a validation error
     */
    public function test_when_user_logs_in_response_must_carry_token()
    {
        // select random user
        $user = User::all()->random(1);

        // pass the credentials to login api
        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json'
        ])->json(
            'POST',
            '/api/login',
            [
                'email' => $user[0]->email,
                'password' => "password"
            ],
        );

        // response should have a token
        $this->assertTrue(isset($res->original["token"]));
    }

    private function createUserPassableEmail($email)
    {
        return [
            "first_name" => fake()->firstName(),
            "middle_name" => fake()->firstName(),
            "last_name" => fake()->lastName(),
            "email" => $email,
            "password_confirmation" => 'password',
            "password" => 'password',
        ];
    }
}
