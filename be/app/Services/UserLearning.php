<?php

namespace App\Services;

use App\Models\Lesson;
use App\Models\User_word;
use App\Models\Word;

class UserLearning
{
    public function words($userID)
    {
        $answers = User_word::where("user_id", $userID)->where("remark", 1)->get();

        $data = [];

        foreach ($answers as $key) {
            $word = Word::find($key->word_id);
            $translation = $word->choices->where("remark", 1);

            $format = (object)[
                "word_id" => $key->word_id,
                "word" =>  $word->title,
                "translation" => $translation[0]->word
            ];

            array_push($data, $format);
        }

        return $data;
    }

    public function wordsCount($userID)
    {
        return  User_word::Where("user_id", $userID)->where("remark", 1)->count();
    }

    public function categories($userID)
    {
        $categories = User_word::where("user_id", $userID)->get("lesson_id");

        $data = [];

        $categories_id = [];

        foreach ($categories as $key) {
            array_push($categories_id, $key->lesson_id);
        }

        foreach (array_unique($categories_id) as $key => $value) {
            $lesson = Lesson::find($value);
            array_push($data, $lesson);
        }


        return $data;
    }


    public function categoriesCount($userID)
    {
        $categories = User_word::where("user_id", $userID)->get("lesson_id");

        $categories_id = [];

        foreach ($categories as $key) {
            array_push($categories_id, $key->lesson_id);
        }

        return count(array_unique($categories_id));
    }
}
