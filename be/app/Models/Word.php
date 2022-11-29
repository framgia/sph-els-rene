<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    use HasFactory;

    protected $fillable = [
        'lesson_id',
        'title',
        'hint',
    ];

    public function choices()
    {
        return $this->hasMany(Word_choice::class);
    }

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = strtoupper($value);
    }
}
