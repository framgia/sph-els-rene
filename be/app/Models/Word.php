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

    public function storeWord($request)
    {
        $words = new Word();
        $words->lesson_id = $request->lessons_id;
        $words->title = $request->title;
        $words->hint = $request->hint;
        $words->save();

        for ($i = 0; $i < count($request->option); $i++) {
            $remark = false;
            if ($i == 0) {
                $remark = true;
            }

            $options = new Word_choice();
            $options->word_id = $words->id;
            $options->word = $request->option[$i];
            $options->remark = $remark;
            $options->save();
        }
        return $words;
    }

    public function updateWord($request, $id)
    {
        $words = Word::find($id);
        $words->lesson_id = $words->lesson_id;
        $words->title = $request->title;
        $words->hint = $request->hint;
        $words->save();

        $options = explode(",", $request->option);
        $counter = 0;
        foreach ($words->choices as $key) {
            $option = Word_choice::find($key->id);
            $option->word = $options[$counter];
            $option->save();
            $counter++;
        }
    }

    public function deleteWord($id)
    {
        $word = Word::find($id);
        $word->lesson->user_words;
        $word->choices()->delete();
        $word->delete();
        return $word;
    }
}
