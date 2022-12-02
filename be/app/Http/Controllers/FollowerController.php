<?php

namespace App\Http\Controllers;

use App\Models\Activity_log;
use App\Models\Follower;
use App\Models\User;
use Illuminate\Http\Request;

class FollowerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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
