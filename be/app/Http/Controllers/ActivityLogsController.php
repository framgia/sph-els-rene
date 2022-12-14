<?php

namespace App\Http\Controllers;

use App\Http\Resources\ActivityLogsFollowResource;
use App\Http\Resources\ActivityLogsQuizScoreResource;
use App\Models\Activity_log;
use App\Models\User;
use App\Models\User_word;

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
                    array_push($data, ActivityLogsQuizScoreResource::make($key));
                }
            }

            if ($key->loggable_type === "App\Models\Follower") {
                array_push($data, ActivityLogsFollowResource::make($key));
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
