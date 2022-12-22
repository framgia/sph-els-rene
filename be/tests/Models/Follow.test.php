<?php

namespace Tests\Unit\Model;

use App\Models\Activity_log;
use Tests\TestCase;

class Follow extends TestCase
{
    /**
     * @test
     *
     * ... check if logs are being saved on follow
     */
    public function test_given_that_user_follow_user_logs_must_be_inserted_in_db()
    {
        // trigger follow functionality
        $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json',
            'Authorization' => 'Bearer ' . env('API_TOKEN')
        ])->json(
            "POST",
            "api/followers",
            ["user_id" => 1, "following_id" => 2]

        );

        // get the last record in activity_logs
        $log = Activity_log::latest()->first();

        // check log if exist
        $this->assertDatabaseHas('activity_logs', [
            'id' => $log->id
        ]);
    }
}
