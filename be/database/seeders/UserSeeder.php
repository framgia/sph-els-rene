<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "id" => 1,
            "first_name" => "admin",
            "middle_name" => "",
            "last_name" => "admin",
            "avatar" => "",
            "role" => "admin",
            "email" => "admin@gmail.com",
            "password" => bcrypt(env('ADMIN_PASSWORD', "password")),
        ]);
    }
}
