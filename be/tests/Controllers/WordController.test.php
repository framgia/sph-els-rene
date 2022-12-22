<?php

namespace Tests\Controllers;

use App\Models\Lesson;
use App\Models\word;
use Tests\TestCase;

class WordController extends TestCase
{

    /**
     * @test
     *
     * ... check if /api/words/ uri return all words
     */
    public function test_should_return_all_words()
    {
        // return 200 (okay) status
        $this->resposeChainBuilder('/api/words/');
    }

    /**
     * @test
     *
     * ... check if /api/words/words_and_choices/{id} uri return all word and choices of the selected lesson
     */
    public function test_should_return_word_and_options_of_the_selected_lesson()
    {
        // selected one lesson
        $lesson = Lesson::first();

        // return 200 (okay) status
        $this->resposeChainBuilder('/api/words/words_and_choices/' . $lesson->id);
    }

    /**
     * @test
     *
     * ... check if /api/words/{id} uri return all word and choices of the selected word
     */
    public function test_should_get_selected_word()
    {
        // select one word
        $word = Word::first();

        // return 200 (okay) status
        $this->resposeChainBuilder('/api/words/' . $word->id);
    }

    /**
     * @test
     *
     * ... check if /api/words/ uri post method has error handler for empty fields
     */
    public function test_should_established_store_connection_with_unprocessable_content()
    {
        $this->resposeChainBuilder('/api/words/', 'POST', 422);
    }

    /**
     * @test
     *
     * ... check if /api/words/ uri put method has error handler for empty fields
     */
    public function test_should_established_update_connection_with_unprocessable_content()
    {
        // select word to update
        $word = Word::first();

        // pass request with an empty field, should return 422 (unprocessable content) status
        $this->resposeChainBuilder('/api/words/' . $word->id, 'PUT', 422);
    }


    /**
     * @test
     *
     * ... check if /api/words/ uri delete metthod is accessible via deleting the selected record
     */
    public function test_should_delete_selected_word()
    {
        // select lesson
        $lesson = Lesson::first();

        // create new word | pass lesson ID
        $word = Word::create([
            'lesson_id' => $lesson->id,
            'title' => "Example Word",
            'hint' => "Example Hint",
            'option' => ["option1", "option2", "option3", "option4"],
        ]);

        // pass word ID to word's delete request, should return 201 (created / success) status
        $this->resposeChainBuilder('/api/words/' . $word->id, 'DELETE', 201);
    }

    private function resposeChainBuilder($uri, $method = null, $statusCode = null)
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
