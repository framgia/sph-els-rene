<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLessonRequest;
use App\Models\Lesson;
use App\Services\UserLearning;
use Illuminate\Http\Request;

class LessonController extends Controller
{
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

    public function store(StoreLessonRequest $request)
    {
        $validated = $request->validated();

        $lesson = Lesson::create($validated);

        return response([
            'lesson' => $lesson,
            'message' => 'Lesson Created Successfully',
        ], 201);
    }

    public function show($id)
    {
        $lesson = Lesson::find($id);
        return response([
            'lesson' => $lesson,
        ]);
    }

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

    public function destroy($id)
    {
        $lesson = Lesson::find($id)->delete();
        return response([
            'lesson' => $lesson,
            'message' => 'Lesson Deleted Successfully',
        ], 201);
    }
}
