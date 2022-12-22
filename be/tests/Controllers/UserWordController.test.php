<?php

namespace Tests\Controllers;

use Tests\TestCase;

class UserWordController extends TestCase
{

    /**
     * @test
     *
     * ... check if /api/user_words/{id} uri is accessible
     */
    public function test_should_return_user_stored_words()
    {
        // return 200 (okay) status
        $this->resposeChainBuilder('/api/user_words/2');
    }

    /**
     * @test
     *
     * ... check if /api/user_words uri post method has a working connection via inserting data
     */

    public function test_user_word_store_connection_via_submitting_answers()
    {
        $res = $this->withHeaders([
            'Accept' => 'application/json',
            'Content-type' => 'application/json',
            'Authorization' => 'Bearer ' . env('API_TOKEN')
        ])->json(
            "POST",
            '/api/user_words',
            [
                "lesson_id" => 10,
                "answers" => '[{"word_id":1,"remark":1},{"word_id":2,"remark":1},{"word_id":3,"remark":0},{"word_id":4,"remark":0},{"word_id":5,"remark":0},{"word_id":6,"remark":0},{"word_id":7,"remark":0},{"word_id":8,"remark":1},{"word_id":9,"remark":1},{"word_id":10,"remark":1},{"word_id":11,"remark":0},{"word_id":12,"remark":0},{"word_id":13,"remark":0},{"word_id":14,"remark":1},{"word_id":15,"remark":0},{"word_id":16,"remark":1},{"word_id":17,"remark":0},{"word_id":18,"remark":1},{"word_id":19,"remark":0},{"word_id":20,"remark":1}]'
            ]
        );


        $res->assertStatus(201);
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
