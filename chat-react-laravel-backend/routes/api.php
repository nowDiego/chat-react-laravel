<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MessageController;

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



Route::middleware('auth:api')->post('/message',[MessageController::class,'store'])->name('message.store');

Route::middleware('auth:api')->get('/message',[MessageController::class,'index'])->name('message.index');

Route::post('/chat/register',[UserController::class,'register'])->name('chat.register');

Route::middleware('auth:api')->get('/chat/me',[UserController::class,'me'])->name('chat.register');
