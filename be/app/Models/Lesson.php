<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;

    public function user_words()
    {
        return $this->hasMany(User_word::class);
    }

    public function words()
    {
        return $this->hasMany(Word::class);
    }
}
