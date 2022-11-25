<?php

namespace App\Models;

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

    public function getUserActivityLogs($var = null)
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
}
