<?php

namespace App\Http\Controllers;

use App\Models\Activity_log;
use App\Models\Follower;
use App\Models\Lesson;
use App\Models\User;
use App\Models\User_word;
use App\Services\QuizResult;

class ActivityLogsController extends Controller
{

    public function index()
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

                    $user = User::find($user_word->user_id);
                    $lesson = Lesson::find($user_word->lesson_id);

                    $format = (object)[
                        "id" => $key->id,

                        "avatar" => $user->avatar,
                        "user_id" => $user->id,
                        "name" => $user->first_name . " " . $user->last_name,
                        "category" => $lesson->title,
                        "category_id" => $lesson->id,
                        "score" => (new QuizResult)->quizScore($user_word->user_id, $user_word->lesson_id),
                        "created_at" => $key->created_at
                    ];

                    array_push($data, $format);
                }
            }

            if ($key->loggable_type === "App\Models\Follower") {

                $follower = Follower::find($key->loggable_id);

                $follower_user = User::find($follower->user_id);

                $following_user = User::find($follower->following_id);

                $format = (object)[
                    "id" => $key->id,
                    "avatar" => $follower_user->avatar,
                    "user_id" => $follower_user->id,
                    "following_id" => $following_user->id,
                    "name" =>   $follower_user->first_name . " " . $follower_user->last_name,
                    "follower" => $follower_user->first_name . " " . $follower_user->last_name,
                    "follows" => $following_user->first_name . " " . $following_user->last_name,
                    "created_at" => $key->created_at
                ];

                array_push($data, $format);
            }
        }

        return response([
            "activities" => $data,
            "data" => $data,
        ]);
    }

    public function show($id)
    {
        $user = User::find($id);

        return response([
            "user" => $user,
            "follow" => [
                "following_count" =>  count($user->following),
                "follower_count" =>  $user->followerCount($id)
            ],
            "following" =>  $user->following,
            "follower" =>  $user->follower(),
            "logs_following" => $user->getUserActivityLogsFollow(),
            "logs_learned" => $user->getUserActivityLogsLearn($id),
        ]);
    }
}
