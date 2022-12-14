<?php

use App\Http\Controllers\ActivityLogsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FollowerController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserWordController;
use App\Http\Controllers\WordController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Authentication
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

// Protected Routes
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::resource('lessons', LessonController::class);
    Route::get('user_available_lesson', [LessonController::class, 'getAvailableUserLesson']);
    Route::resource('words', WordController::class);
    Route::get('words_and_choices/{id}', [WordController::class, 'getWordsAndChoices']);
    Route::resource('users', UserController::class);
    Route::get('visitable_users', [UserController::class, 'getVisitableUser']);
    Route::resource('activity_logs', ActivityLogsController::class);
    Route::resource('followers', FollowerController::class);
    Route::resource('user_words', UserWordController::class);
});
