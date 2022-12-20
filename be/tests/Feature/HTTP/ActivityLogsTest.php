<?php

namespace Tests\Feature\HTTP;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ActivityLogsTest extends TestCase
{
    public function test_get_activity_logs_api()
    {
        $this->resposeChainBuilder('/api/activity_logs/');
    }

    public function test_get_activity_logs_for_specific_user()
    {
        $user = User::first();
        $this->resposeChainBuilder('/api/activity_logs/' . $user->id);
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
