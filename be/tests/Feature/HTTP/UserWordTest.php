<?php

namespace Tests\Feature\HTTP;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserWordTest extends TestCase
{

    public function test_get_user_word_api()
    {
        $this->resposeChainBuilder('/api/user_words/2');
    }

    public function test_store_word_for_user_api()
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
