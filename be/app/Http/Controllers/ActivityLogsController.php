<?php

namespace App\Http\Controllers;

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
                "avatar" => "https://res.cloudinary.com/dyndobjql/image/upload/v1668858199/sels/users/avatar/ctkgukpno0emeir63jti.jpg",
                "id" => 2,
                "name" => "Rene Gunayon",
                "category" => "Example Category",
                "score" => 15,

            ],
            [
                "avatar" => "https://res.cloudinary.com/dyndobjql/image/upload/v1668861483/sels/users/avatar/d48kbsg1jaffknvhecfs.jpg",
                "id" => 3,
                "name" => "Louise Lacosta",
                "category" => "Example Category",
                "score" => 18,

            ],
            [
                "avatar" => "https://res.cloudinary.com/dyndobjql/image/upload/v1668861483/sels/users/avatar/d48kbsg1jaffknvhecfs.jpg",
                "id" => 2,
                "name" => "Louise Lacosta",
                "follower" => "Rene",
                "follows" => "Louise",

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
    public function destroy($id)
    {
        //
    }
}
