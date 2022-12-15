<?php

namespace App\Http\Controllers;

use App\Http\Resources\ActivityLogsFollowResource;
use App\Http\Resources\ActivityLogsQuizScoreResource;
use App\Models\Activity_log;
use App\Models\User;

class ActivityLogsController extends Controller
{

    public function index()
    {
        return response([
            "activities" => Activity_log::activityLogsSummary(),
            "data" => Activity_log::activityLogsSummary(),
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
