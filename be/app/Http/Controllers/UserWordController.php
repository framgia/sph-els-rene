<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use App\Models\User_word;
use App\Services\QuizResult;
use Illuminate\Http\Request;

class UserWordController extends Controller
{
    public function store(Request $request)
    {
        $user_id = $request->user()->currentAccessToken()->tokenable_id;
        $lesson_id = $request->lesson_id;
        $answers = json_decode($request->answers);

        foreach ($answers as $answer) {
            $user_word =  User_word::create([
                "user_id" => $user_id,
                "lesson_id" => $lesson_id,
                "word_id" => $answer->word_id,
                "remark" => $answer->remark,
            ]);

            $user_word->log()->create([
                "loggable_id" => $user_word->id,
                "title" => "Quiz Answer"
            ]);
        };

        return response([
            "message" => "Finished Lesson Succesfully"
        ], 201);
    }

    public function show(Request $request, $id)
    {
        $user_id = $request->user()->currentAccessToken()->tokenable_id;

        $lesson = Lesson::find($id);

        $score = (new QuizResult)->quizScore($user_id, $id);

        $summary = (new QuizResult)->quizSummary($user_id, $id);

        return response([
            "lesson" => $lesson,
            "score" => $score,
            "summary" => $summary
        ]);
    }
}
