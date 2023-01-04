<?php

namespace Tests\Controllers;

use App\Models\User;
use Tests\TestCase;

class ActivityLogsController extends TestCase
{
    /**
     * @test
     *
     * ... check if /api/activity_logs uri is accessbile with token
     */
    public function test_it_should_return_ok_status_on_accessing_activity_logs()
    {
        // return okay (200) status
        $this->resposeChainBuilder('/api/activity_logs/');
    }

    /**
     * @test
     *
     * ... check if /api/activity_logs/{id} uri is accessbile with token
     */
    public function test_it_should_return_ok_status_on_accessing_activity_logs_for_specific_user()
    {
        // select user to get the ID
        $user = User::first();

        // return okay (200) status
        $this->resposeChainBuilder('/api/activity_logs/' . $user->id);
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
