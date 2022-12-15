<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreWordRequest;
use App\Models\Word;

class WordController extends Controller
{
    protected $word;

    public function __construct(Word $word)
    {
        $this->word = $word;
    }

    public function index()
    {
        return response([
            'words' => $this->word::with(["lesson", "lesson.user_words", "choices"])->get()
        ]);
    }

    public function getWordsAndChoices($id)
    {
        return response([
            'words' => $this->word::where("lesson_id", $id)->with("choices")->get()
        ]);
    }

    public function store(StoreWordRequest $request)
    {
        $request->validated();
        return response([
            'word' => $this->word->storeWord($request),
            'message' => 'Words and Choices Added Succesfully',
        ], 201);
    }

    public function show($id)
    {
        return response([
            'word' =>  $this->word::with('choices')->find($id),
        ]);
    }

    public function update(StoreWordRequest $request, $id)
    {
        $request->validated();
        $this->word->updateWord($request, $id);
        return response([
            'message' => 'Words and Choices Updated Succesfully',
        ], 201);
    }

    public function destroy($id)
    {
        return response([
            "word" => $this->word->deleteWord($id),
            'message' => 'Words and Choices Deleted Succesfully',
        ], 201);
    }
}
