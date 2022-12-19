<?php

namespace App\Models;

use App\Http\Resources\ActivityLogsUserLearnedLessonResource;
use App\Services\UserLearning;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'email',
        'avatar',
        'role',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function following()
    {
        return $this->hasMany(Follower::class);
    }

    public function follower()
    {
        return Follower::where("following_id", $this->id)->get();
    }

    public function followerCount($id)
    {
        return Follower::where("following_id", $id)->count();
    }

    public function user_words()
    {
        return $this->hasMany(User_word::class);
    }

    public function updateAvatar($image)
    {
        $url = Cloudinary::upload(
            $image->getRealPath(),
            [
                'folder' => 'sels/users/avatar',
                'resource_type' => 'image'
            ]
        )->getSecurePath();
        return $this->update(['avatar' => $url]);
    }

    public function getUserActivityLogsFollow($var = null)
    {
        $following = Follower::where("user_id", $this->id)->limit(5)->get();

        $following_formatted = [];

        foreach ($following as $key) {
            $this_user = User::where("id", $key->following_id)->first();

            $format = (object)[
                "id" => $this_user->id,
                "avatar" => $this_user->avatar,
                "name" => $this_user->first_name . " " . $this_user->last_name,
                "created_at" => $key->created_at
            ];

            array_push($following_formatted, $format);
        }

        return $following_formatted;
    }

    public function getUserActivityLogsLearn($id)
    {
        $user_word = User_word::where("user_id", $id)->get();

        $data = [];
        $validate_user = "";
        $validate_lesson = "";
        foreach ($user_word as $key) {
            if ($validate_user != $key->user_id || $validate_lesson != $key->lesson_id) {
                $validate_user = (int) $key->user_id;
                $validate_lesson = (int) $key->lesson_id;
                array_push($data, ActivityLogsUserLearnedLessonResource::make($key));
            }
        }

        return $data;
    }

    public function getAvialableLesson($id)
    {
        $done_categories = (new UserLearning)->categories($id);
        $done_categories_id = [];
        foreach ($done_categories as $key) {
            array_push($done_categories_id, $key->id);
        }
        $lessons = Lesson::whereNotIn('id', $done_categories_id)->with("words")->get();
        return $lessons;
    }

    public function storeLearnedWords($request)
    {
        $user_id = $request->user()->currentAccessToken()->tokenable_id;
        $lesson_id = $request->lesson_id;
        $answers = json_decode($request->answers);

        foreach ($answers as $answer) {
            $user_word =  User_word::create([
                "user_id" => $user_id,
                "lesson_id" => $lesson_id,
                "word_id" => $answer->word_id,
                "remark" => $answer->remark,
            ]);

            $user_word->log()->create([
                "loggable_id" => $user_word->id,
                "title" => "Quiz Answer"
            ]);
        };
    }

    public function loginUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['validation_errors' => $validator->messages()]);
        } else {
            $user = User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return response()->json([
                    'message' => 'Invalid Credentials',
                ]);
            } else {
                $token = $user->createToken('permission')->plainTextToken;
                return response([
                    'user' => $user,
                    'role' => $user->role,
                    'verified_email' => $user->email_verified_at,
                    'token' => $token,
                    'Message' => 'Login Succesfully',
                ]);
            }
        }
    }

    public function storeUser($request)
    {
        $user = User::create([
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name ?? "",
            'last_name' => $request->last_name,
            'role' => 'user',
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $token = $user->createToken('permission')->plainTextToken;

        return response([
            'user' => $user,
            'verified_email' => $user->email_verified_at,
            'token' => $token,
            'Message' => 'Registered Succesfully',
        ], 201);
    }

    public function updateUser($request, $id)
    {
        $user = User::find($id);
        $user->first_name = $request->first_name;
        $user->middle_name = $request->middle_name ?? $user->middle_name;
        $user->last_name = $request->last_name;
        $user->avatar = $request->avatar ?? $user->avatar;
        $user->save();

        return $user;
    }
}
