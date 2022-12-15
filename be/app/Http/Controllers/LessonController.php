<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLessonRequest;
use App\Models\Lesson;
use App\Models\User;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    protected $lesson;
    protected $user;

    public function __construct(Lesson $lesson, User $user)
    {
        $this->lesson = $lesson;
        $this->user = $user;
    }

    public function index()
    {
        return response([
            'lessons' => $this->lesson->with("words")->get()
        ]);
    }

    public function getAvailableUserLesson(Request $request)
    {
        return response([
            'lessons' => $this->user->getAvialableLesson($request->user()->currentAccessToken()->tokenable_id),
        ]);
    }

    public function store(StoreLessonRequest $request)
    {
        $validated = $request->validated();
        return response([
            'lesson' => $this->lesson->create($validated),
            'message' => 'Lesson Created Successfully',
        ], 201);
    }

    public function show($id)
    {
        return response([
            'lesson' => $this->lesson->find($id),
        ]);
    }

    public function update(StoreLessonRequest $request, $id)
    {
        $request->validated();
        return response([
            'lesson' => $this->lesson->updateLesson($request, $id),
            'message' => 'Lesson Updated Successfully',
        ], 201);
    }

    public function destroy($id)
    {
        return response([
            'lesson' => $this->lesson->find($id)->delete(),
            'message' => 'Lesson Deleted Successfully',
        ], 201);
    }
}
