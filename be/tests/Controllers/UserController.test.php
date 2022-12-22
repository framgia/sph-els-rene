<?php

namespace Tests\Controllers;

use App\Models\User;
use Tests\TestCase;

class UserController extends TestCase
{
    /**
     * @test
     *
     * ... check if /api/users/ uri return all users
     */
    public function test_should_return_all_user()
    {
        // return 200 (okay) status
        $this->resposeChainBuilder('/api/users/');
    }

    /**
     * @test
     *
     * ... check if /api/users/visitable_users uri return the only avaialble visitable users for the current (tokenable) user
     */
    public function test_should_get_visitable_users_based_from_current_token_request()
    {
        // return 200 (okay) status
        $this->resposeChainBuilder('/api/users/visitable_users');
    }

    /**
     * @test
     *
     * ... check if /api/users/[id] uri return the selected user via ID
     */
    public function test_should_get_selected_user()
    {
        // select one user
        $user = User::first();

        // return 200 (okay) status
        $this->resposeChainBuilder('/api/users/' . $user->id);
    }

    /**
     * @test
     *
     * ... check if /api/users/{id} uri post method has error handler for empty fields
     */
    public function test_should_established_update_connection_with_unprocessable_content()
    {
        // select one user
        $user = User::first();

        // pass request with an empty field, should return 422 (unprocessable content) status
        $this->resposeChainBuilder('/api/users/' . $user->id, 'PUT', 422);
    }


    private function resposeChainBuilder($uri, $method = null, $statusCode = null,)
    {
        // request with token on header
        // GET method by default
        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json',
            'Authorization' => 'Bearer ' . env('API_TOKEN')
        ])->json(
            $method ?? "GET",
            $uri
        );

        // return status code | 200 status by default
        $res->assertStatus($statusCode ?? 200);
    }
}
