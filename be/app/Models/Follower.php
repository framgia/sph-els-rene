<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follower extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'following_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function log()
    {
        return $this->morphOne(Activity_log::class, 'loggable');
    }

    public function storeFollower($request)
    {
        $follow = Follower::create($request->all());
        $follow->log()->create([
            "loggable_id" => $follow->id,
            "title" => "Follow"
        ]);
        return $follow;
    }

    public function deleteFollower($request, $id)
    {
        $follower = $request->user()->currentAccessToken()->tokenable_id;
        $follow = Follower::where("user_id", $follower)->where("following_id", $id)->first();
        Activity_log::where("loggable_id", $follow->id)->delete();
        $follow->delete();
        return $follow;
    }
}
