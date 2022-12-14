<?php

namespace App\Http\Resources;

use App\Models\Lesson;
use App\Models\User;
use App\Models\User_word;
use App\Services\QuizResult;
use Illuminate\Http\Resources\Json\JsonResource;

class ActivityLogsQuizScoreResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $user_word = User_word::find($this->loggable_id);
        $user = User::find($user_word->user_id);
        $lesson = Lesson::find($user_word->lesson_id);

        return [
            "id" => $this->id,
            "avatar" => $user->avatar,
            "user_id" => $user->id,
            "name" => $user->first_name . " " . $user->last_name,
            "category" => $lesson->title,
            "category_id" => $lesson->id,
            "score" => (new QuizResult)->quizScore($user_word->user_id, $user_word->lesson_id),
            "created_at" => $this->created_at
        ];
    }
}
