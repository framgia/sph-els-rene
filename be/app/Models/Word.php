<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    use HasFactory;

    public function choices()
    {
        return $this->hasMany(Word_choice::class);
    }

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }
}
