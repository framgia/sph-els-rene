<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use App\Models\User;
use App\Services\QuizResult;
use Illuminate\Http\Request;

class UserWordController extends Controller
{
    protected $user;
    protected $lesson;

    public function __construct(User $user, Lesson $lesson)
    {
        $this->user = $user;
        $this->lesson = $lesson;
    }

    public function store(Request $request)
    {
        $this->user->storeLearnedWords($request);
        return response([
            "message" => "Finished Lesson Succesfully"
        ], 201);
    }

    public function show(Request $request, $id)
    {
        $user_id = $request->user()->currentAccessToken()->tokenable_id;
        return response([
            "lesson" => $this->lesson->find($id),
            "score" => (new QuizResult)->quizScore($user_id, $id),
            "summary" => (new QuizResult)->quizSummary($user_id, $id)
        ]);
    }
}
