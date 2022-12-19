<?php

namespace App\Models;

use App\Http\Resources\ActivityLogsFollowResource;
use App\Http\Resources\ActivityLogsQuizScoreResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity_log extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "loggable_id",
        "loggable_type",
    ];

    public function loggable()
    {
        return $this->morphTo();
    }

    public function scopeActivityLogsSummary()
    {
        $activities = Activity_log::orderBy("created_at", "DESC")->get();

        $data = [];
        $validate_user = "";
        $validate_lesson = "";

        foreach ($activities as $key) {
            if ($key->loggable_type === "App\Models\User_word") {
                $user_word = User_word::find($key->loggable_id);

                if ($validate_user != $user_word->user_id || $validate_lesson != $user_word->lesson_id) {
                    $validate_user = (int) $user_word->user_id;
                    $validate_lesson = (int) $user_word->lesson_id;
                    array_push($data, ActivityLogsQuizScoreResource::make($key));
                }
            }

            if ($key->loggable_type === "App\Models\Follower") {
                array_push($data, ActivityLogsFollowResource::make($key));
            }
        }


        return $data;
    }
}
