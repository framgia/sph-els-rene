<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use App\Services\UserLearning;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function index()
    {
        return response([
            'users' =>  $this->user->whereNot("role", "admin")->get(),
        ]);
    }

    public function getVisitableUser(Request $request)
    {
        return response([
            'users' => $this->user->whereNot("role", "admin")
                ->whereNot("id", $request->user()->currentAccessToken()->tokenable_id)
                ->get(),
        ]);
    }

    public function show($id)
    {
        return response([
            'user' => User::find($id),
            'learned' => [
                'words' => (new UserLearning)->words($id),
                'wordsCount' => (new UserLearning)->wordsCount($id),
                'categories' => (new UserLearning)->categories($id),
                'categoriesCount' => (new UserLearning)->categoriesCount($id),
            ],
        ]);
    }

    public function update(StoreUserRequest $request, $id)
    {
        $request->validated();
        return response([
            'user' => $this->user->updateUser($request, $id),
            'message' => 'User Updated Successfully',
        ], 201);
    }
}
