<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Word_choice extends Model
{
    use HasFactory;

    public function word()
    {
        return $this->belongsTo(Word::class);
    }
}
