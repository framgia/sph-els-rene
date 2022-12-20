<?php

namespace Tests\Feature\HTTP;

use App\Models\Lesson;
use App\Models\word;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class WordTest extends TestCase
{
    public function test_get_words_api()
    {
        $this->resposeChainBuilder('/api/words/');
    }

    public function test_get_words_and_choices_api()
    {
        $lesson = Lesson::first();
        $this->resposeChainBuilder('/api/words/words_and_choices/' . $lesson->id);
    }

    public function test_get_one_word_api()
    {
        $word = Word::first();
        $this->resposeChainBuilder('/api/words/' . $word->id);
    }

    public function test_store_word_api_connection_without_data()
    {
        $this->resposeChainBuilder('/api/words/', 'POST', 422);
    }

    public function test_update_word_api_connection_without_data()
    {
        $word = Word::first();
        $this->resposeChainBuilder('/api/words/' . $word->id, 'PUT', 422);
    }

    public function test_delete_word_api()
    {
        $lesson = Lesson::first();
        $word = Word::create([
            'lesson_id' => $lesson->id,
            'title' => "Example Word",
            'hint' => "Example Hint",
            'option' => ["option1", "option2", "option3", "option4"],
        ]);

        $this->resposeChainBuilder('/api/words/' . $word->id, 'DELETE', 201);
    }

    private function resposeChainBuilder($uri, $method = null, $statusCode = null)
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
