<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
    ];

    public function user_words()
    {
        return $this->hasMany(User_word::class);
    }

    public function words()
    {
        return $this->hasMany(Word::class);
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = strtoupper($value);
    }

    public function updateLesson($request, $id)
    {
        $lesson = Lesson::find($id);
        $lesson->title = $request->title;
        $lesson->description = $request->description;
        $lesson->save();
        return $lesson;
    }
}
