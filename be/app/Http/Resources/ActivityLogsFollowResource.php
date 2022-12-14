<?php

namespace App\Http\Resources;

use App\Models\Follower;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class ActivityLogsFollowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $follower = Follower::find($this->loggable_id);
        $follower_user = User::find($follower->user_id);
        $following_user = User::find($follower->following_id);

        return [
            "id" => $this->id,
            "avatar" => $follower_user->avatar,
            "user_id" => $follower_user->id,
            "following_id" => $following_user->id,
            "name" =>   $follower_user->first_name . " " . $follower_user->last_name,
            "follower" => $follower_user->first_name . " " . $follower_user->last_name,
            "follows" => $following_user->first_name . " " . $following_user->last_name,
            "created_at" => $this->created_at
        ];
    }
}
