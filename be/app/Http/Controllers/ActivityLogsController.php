<?php

namespace App\Http\Controllers;

use App\Models\Follower;
use App\Models\User;
use Illuminate\Http\Request;

class ActivityLogsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $activities = array(
            [
                "id" => 1,
                "avatar" => "https://res.cloudinary.com/dyndobjql/image/upload/v1668861483/sels/users/avatar/d48kbsg1jaffknvhecfs.jpg",
                "user_id" => 2,
                "name" => "Rene Gunayon",
                "category" => "Example Category",
                "score" => 15,
                "created_at" => "2022-11-19 18:52:19"

            ],
            [
                "id" => 2,
                "avatar" => "https://res.cloudinary.com/dyndobjql/image/upload/v1668858199/sels/users/avatar/ctkgukpno0emeir63jti.jpg",
                "user_id" => 3,
                "name" => "Louise Lacosta",
                "category" => "Example Category",
                "score" => 18,
                "created_at" => "2022-11-19 18:52:19"

            ],
            [
                "id" => 3,
                "avatar" => "https://res.cloudinary.com/dyndobjql/image/upload/v1668861483/sels/users/avatar/d48kbsg1jaffknvhecfs.jpg",
                "user_id" => 2,
                "name" => "Louise Lacosta",
                "follower" => "Rene",
                "follows" => "Louise",
                "created_at" => "2022-11-15 18:52:19"


            ],

        );

        return response([
            "activities" => $activities
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return response([
            "user" => $user,
            "follow" => [
                "following" =>  count($user->following),
                "follower" =>  $user->follower($id),
            ]
        ]);
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
    public function destroy($id)
    {
        //
    }
}
