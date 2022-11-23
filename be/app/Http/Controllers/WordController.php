<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreWordRequest;
use App\Models\Word;
use App\Models\Word_choice;
use Illuminate\Http\Request;

class WordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $words = Word::all();
        return response([
            'lessons' => $words
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreWordRequest $request)
    {

        $validated = $request->validated();

        if ($validated) {
            $words = new Word();
            $words->lessons_id = $request->lessons_id;
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
