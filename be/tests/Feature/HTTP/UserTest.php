<?php

namespace Tests\Feature\HTTP;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    public function test_get_users_api()
    {
        $this->resposeChainBuilder('/api/users/');
    }

    public function test_get_available_user_based_from_token_api()
    {
        $this->resposeChainBuilder('/api/users/visitable_users');
    }

    public function test_get_one_user_api()
    {
        $user = User::first();
        $this->resposeChainBuilder('/api/users/' . $user->id);
    }

    public function test_update_user_api_connection_without_data()
    {
        $user = User::first();
        $this->resposeChainBuilder('/api/users/' . $user->id, 'PUT', 422);
    }


    private function resposeChainBuilder($uri, $method = null, $statusCode = null,)
    {
        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json',
            'Authorization' => 'Bearer ' . env('API_TOKEN')
        ])->json(
            $method ?? "GET",
            $uri
        );
        $res->assertStatus($statusCode ?? 200);
    }
}
