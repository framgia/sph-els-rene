<?php

namespace Tests\Controllers;

use App\Models\Lesson;
use Tests\TestCase;

class LessonController extends TestCase
{
    /**
     * @test
     *
     * ... check if /api/lessons/ uri return all lesson
     */
    public function test_should_return_all_lesson()
    {
        // return 200 (okay) status
        $this->resposeChainBuilderHasToken('/api/lessons/');
    }

    /**
     * @test
     *
     * ... check if /api/lessons/user_available_lesson uri return the only avaialble lesson for the current (tokenable) user
     */
    public function test_should_return_lesson_avaialble_only_to_current_user()
    {
        // return 200 (okay) status
        $this->resposeChainBuilderHasToken('/api/lessons/user_available_lesson');
    }

    /**
     * @test
     *
     * ... check if /api/lessons/{id} uri return the selected lesson via ID
     */
    public function test_should_get_selected_lesson()
    {
        // select any lesson
        $lesson = Lesson::first();

        // pass id to the uri, should return 200 (okay) status
        $this->resposeChainBuilderHasToken('/api/lessons/' . $lesson->id);
    }

    /**
     * @test
     *
     * ... check if /api/lessons/ uri post method has error handler for empty fields
     */
    public function test_should_established_store_connection_with_unprocessable_content()
    {
        // pass request with an empty field, should return 422 (unprocessable content) status
        $this->resposeChainBuilderHasToken('/api/lessons/', 'POST', 422);
    }

    /**
     * @test
     *
     * ... check if /api/lessons/{id} uri is accessible with error handler
     */
    public function test_should_established_update_connection_with_unprocessable_content()
    {
        // select any lesson
        $lesson = Lesson::first();

        // pass request with an empty field, should return 422 (unprocessable content) status
        $this->resposeChainBuilderHasToken('/api/lessons/' . $lesson->id, 'PUT', 422);
    }

    /**
     * @test
     *
     * ... check if /api/lessons/ uri delete metthod is accessible
     */
    public function test_should_delete_selected_lesson()
    {
        // create new lesson
        $lesson = Lesson::create([
            'title' => "Example Lesson",
            'description' => "Description"
        ]);

        // pass lesson ID to lesson's delete request, should return 201 (created / success) status
        $this->resposeChainBuilderHasToken('/api/lessons/' . $lesson->id, 'DELETE', 201);
    }

    private function resposeChainBuilderHasToken($uri, $method = null, $statusCode = null)
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
