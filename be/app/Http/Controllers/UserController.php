<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use App\Services\UserLearning;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index()
    {
        $users = User::whereNot("role", "admin")
            ->get();
        return response([
            'users' => $users,
        ]);
    }

    public function getVisitableUser(Request $request)
    {
        $users = User::whereNot("role", "admin")
            ->whereNot("id", $request->user()->currentAccessToken()->tokenable_id)
            ->get();
        return response([
            'users' => $users,
        ]);
    }

    public function show($id)
    {
        $user = User::find($id);
        return response([
            'user' => $user,
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
        $user = User::find($id);
        $request->validated();

        $user->first_name = $request->first_name;
        $user->middle_name = $request->middle_name ?? $user->middle_name;
        $user->last_name = $request->last_name;
        $user->avatar = $request->avatar ?? $user->avatar;
        $user->save();

        return response([
            'user' => $user,
            'message' => 'User Updated Successfully',
        ], 201);
    }
}
