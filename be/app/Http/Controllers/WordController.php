<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreWordRequest;
use App\Models\Word;
use App\Models\Word_choice;

class WordController extends Controller
{
    public function index()
    {
        return response([
            'words' => Word::with(["lesson", "lesson.user_words", "choices"])->get()
        ]);
    }

    public function getWordsAndChoices($id)
    {
        $words = Word::where("lesson_id", $id)->with("choices")->get();
        return response([
            'words' => $words
        ]);
    }

    public function store(StoreWordRequest $request)
    {

        $validated = $request->validated();

        if ($validated) {
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
        }

        return response([
            'word' => $words,
            'message' => 'Words and Choices Added Succesfully',
        ], 201);
    }

    public function show($id)
    {
        $word = Word::find($id);
        $word->choices;
        return response([
            'word' => $word,
        ]);
    }

    public function update(StoreWordRequest $request, $id)
    {
        $validated = $request->validated();

        if ($validated) {
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

        return response([
            'message' => 'Words and Choices Updated Succesfully',
        ], 201);
    }

    public function destroy($id)
    {
        $word = Word::find($id);
        $word->lesson->user_words;
        $word->choices()->delete();
        $word->delete();
        return response([
            "word" => $word,
            'message' => 'Words and Choices Deleted Succesfully',
        ], 201);
    }
}
