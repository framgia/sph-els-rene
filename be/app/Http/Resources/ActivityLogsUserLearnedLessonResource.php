<?php

namespace App\Http\Resources;

use App\Models\Lesson;
use App\Models\User;
use App\Services\QuizResult;
use Illuminate\Http\Resources\Json\JsonResource;

class ActivityLogsUserLearnedLessonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $user = User::find($this->user_id);
        $lesson = Lesson::find($this->lesson_id);

        return [
            "id" => $this->user_id . "" . $this->lesson_id,
            "avatar" => $user->avatar,
            "user_id" => $user->id,
            "name" => $user->first_name . " " . $user->last_name,
            "category" => $lesson->title,
            "category_id" => $lesson->id,
            "score" => (new QuizResult)->quizScore($this->user_id, $this->lesson_id),
            "created_at" => $this->created_at,
        ];
    }
}
