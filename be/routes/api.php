<?php

use App\Http\Controllers\ActivityLogsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FollowerController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserWordController;
use App\Http\Controllers\WordController;
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

    Route::group(['prefix' => 'lessons', 'as' => 'lessons.'], function () {
        Route::get('/', [LessonController::class, 'index']);
        Route::get('user_available_lesson', [LessonController::class, 'getAvailableUserLesson']);
        Route::get('/{id}', [LessonController::class, 'show']);
        Route::post('/', [LessonController::class, 'store']);
        Route::put('/{id}', [LessonController::class, 'update']);
        Route::delete('/{id}', [LessonController::class, 'destroy']);
    });

    Route::group(['prefix' => 'words', 'as' => 'words.'], function () {
        Route::get('/', [WordController::class, 'index']);
        Route::get('words_and_choices/{id}', [WordController::class, 'getWordsAndChoices']);
        Route::get('/{id}', [WordController::class, 'show']);
        Route::post('/', [WordController::class, 'store']);
        Route::put('/{id}', [WordController::class, 'update']);
        Route::delete('/{id}', [WordController::class, 'destroy']);
    });

    Route::group(['prefix' => 'users', 'as' => 'users.'], function () {
        Route::get('/', [UserController::class, 'index']);
        Route::get('visitable_users', [UserController::class, 'getVisitableUser']);
        Route::get('/{id}', [UserController::class, 'show']);
        Route::put('/{id}', [UserController::class, 'update']);
    });

    Route::group(['prefix' => 'activity_logs', 'as' => 'activity_logs.'], function () {
        Route::get('/', [ActivityLogsController::class, 'index']);
        Route::get('/{id}', [ActivityLogsController::class, 'show']);
    });

    Route::group(['prefix' => 'followers', 'as' => 'followers.'], function () {
        Route::post('/', [FollowerController::class, 'store']);
        Route::delete('/{id}', [FollowerController::class, 'destroy']);
    });

    Route::group(['prefix' => 'user_words', 'as' => 'user_words.'], function () {
        Route::get('/{id}', [UserWordController::class, 'show']);
        Route::post('/', [UserWordController::class, 'store']);
    });
});
