<?php

namespace App\Http\Controllers;

use App\Models\Activity_log;
use App\Models\Follower;
use Illuminate\Http\Request;

class FollowerController extends Controller
{
    public function store(Request $request)
    {
        $follow = Follower::create($request->all());
        $follow->log()->create([
            "loggable_id" => $follow->id,
            "title" => "Follow"
        ]);

        return response([
            'follow' => $follow,
            'message' => 'Followed Succesfully',
        ], 201);
    }

    public function destroy(Request $request, $id)
    {
        $follower = $request->user()->currentAccessToken()->tokenable_id;
        $follow = Follower::where("user_id", $follower)->where("following_id", $id)->first();
        Activity_log::where("loggable_id", $follow->id)->delete();
        $follow->delete();
        return response([
            'unfollow' => $follow,
            'message' => 'Unfollowed Succesfully',
        ], 201);
    }
}
