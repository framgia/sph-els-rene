<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_word extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'lesson_id',
        'word_id',
        'remark',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }

    public function log()
    {
        return $this->morphOne(Activity_log::class, 'loggable');
    }
}
