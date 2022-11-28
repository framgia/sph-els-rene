<?php

namespace App\Services;

use App\Models\User_word;
use App\Models\Word;

class QuizResult
{
    public function quizSummary($userID, $categoryID)
    {
        $answers = User_word::Where("lesson_id", $categoryID)->where("user_id", $userID)->get();

        $data = [];

        foreach ($answers as $key) {
            $word = Word::find($key->word_id);
            $translation = $word->choices->where("remark", 1);

            $format = (object)[
                "word_id" => $key->word_id,
                "word" =>  $word->title,
                "remark" => $key->remark,
                "translation" => $translation[0]->word
            ];

            array_push($data, $format);
        }

        return $data;
    }

    public function quizScore($userID, $categoryID)
    {
        return User_word::Where("lesson_id", $categoryID)->where("user_id", $userID)->where("remark", 1)->count();
    }
}
