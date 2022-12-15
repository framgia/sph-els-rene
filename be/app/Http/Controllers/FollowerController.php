<?php

namespace App\Http\Controllers;

use App\Models\Follower;
use Illuminate\Http\Request;

class FollowerController extends Controller
{
    protected $follower;

    public function __construct(Follower $follower)
    {
        $this->follower = $follower;
    }

    public function store(Request $request)
    {
        return response([
            'follow' => $this->follower->storeFollower($request),
            'message' => 'Followed Succesfully',
        ], 201);
    }

    public function destroy(Request $request, $id)
    {
        return response([
            'unfollow' => $this->follower->deleteFollower($request, $id),
            'message' => 'Unfollowed Succesfully',
        ], 201);
    }
}
