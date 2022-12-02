<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\StoreLessonRequest;
use App\Models\Lesson;
use App\Services\UserLearning;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lessons = Lesson::with("words")->get();
        return response([
            'lessons' => $lessons
        ]);
    }

    public function getAvailableUserLesson(Request $request)
    {
        $done_categories = (new UserLearning)->categories($request->user()->currentAccessToken()->tokenable_id);
        $done_categories_id = [];
        foreach ($done_categories as $key) {
            array_push($done_categories_id, $key->id);
        }
        $lessons = Lesson::whereNotIn('id', $done_categories_id)->with("words")->get();
        return response([
            'lessons' => $lessons
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLessonRequest $request)
    {
        $validated = $request->validated();

        $lesson = Lesson::create($validated);

        return response([
            'lesson' => $lesson,
            'message' => 'Lesson Created Successfully',
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
        $lesson = Lesson::find($id);
        return response([
            'lesson' => $lesson,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreLessonRequest $request, $id)
    {
        $request->validated();

        $lesson = Lesson::find($id);
        $lesson->title = $request->title;
        $lesson->description = $request->description;
        $lesson->save();

        return response([
            'lesson' => $lesson,
            'message' => 'Lesson Updated Successfully',
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $lesson = Lesson::find($id)->delete();
        return response([
            'lesson' => $lesson,
            'message' => 'Lesson Deleted Successfully',
        ], 201);
    }
}
