<?php

namespace Tests\Feature\HTTP;

use App\Models\Lesson;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LessonTest extends TestCase
{
    public function test_get_lessons_api()
    {
        $this->resposeChainBuilder('/api/lessons/');
    }

    public function test_get_avaialable_lesson_for_user_api()
    {
        $this->resposeChainBuilder('/api/lessons/user_available_lesson');
    }

    public function test_get_one_lesson_api()
    {
        $lesson = Lesson::first();

        $this->resposeChainBuilder('/api/lessons/' . $lesson->id);
    }

    public function test_store_lesson_api_connection_without_data()
    {
        $this->resposeChainBuilder('/api/lessons/', 'POST', 422);
    }

    public function test_update_lesson_api_connection_without_data()
    {
        $lesson = Lesson::first();
        $this->resposeChainBuilder('/api/lessons/' . $lesson->id, 'PUT', 422);
    }

    public function test_delete_lesson_api()
    {
        $lesson = Lesson::create([
            'title' => "Example Lesson",
            'description' => "Description"
        ]);

        $this->resposeChainBuilder('/api/lessons/' . $lesson->id, 'DELETE', 201);
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
