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
        return $this->morphOne(Activity_log::class, 'loggale');
    }

    public function follows($id)
    {
        return $this;
    }
}
