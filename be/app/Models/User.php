<?php

namespace App\Models;

use App\Services\QuizResult;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

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

    public function follower($id)
    {
        return count(Follower::where("following_id", $id)->get());
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
        $counter = 0;

        foreach ($user_word as $key) {
            $counter++;
            $user = User::find($key->user_id);
            $lesson = Lesson::find($key->lesson_id);

            if ($validate_user != $key->user_id || $validate_lesson != $key->lesson_id) {
                $validate_user = (int) $key->user_id;
                $validate_lesson = (int) $key->lesson_id;
                $format = (object)[
                    "id" => $counter,
                    "avatar" => $user->avatar,
                    "user_id" => $user->id,
                    "name" => $user->first_name . " " . $user->last_name,
                    "category" => $lesson->title,
                    "score" => (new QuizResult)->quizScore($key->user_id, $key->lesson_id),
                    "created_at" => $key->created_at,
                ];

                array_push($data, $format);
            }
        }

        return $data;
    }
}
