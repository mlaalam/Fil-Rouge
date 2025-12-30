<?php

use App\Http\Controllers\ArtisanController;
use App\Http\Controllers\Auth\AuthenticationController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ServicesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(AuthenticationController::class)->group(function(){
    Route::post('register','register');
    Route::post('login','login');
    Route::post('logout','logout')->middleware('auth:sanctum');
    Route::post('forget','forgetPassword');
    Route::post('update_pass','updatePassword');
//     Route::middleware('auth:sanctum')->get('/myprofil', function (Request $request) {
//     return $request->user();
// });

});

Route::controller(CategoryController::class)->group(function(){
  Route::get('categories','index');
  Route::post('categories','store')->middleware('auth:sanctum');
  Route::put('categories/{id}','update')->middleware('auth:sanctum');
  Route::delete('categories/{id}','destroy')->middleware('auth:sanctum');
});

Route::controller(ArtisanController::class)->group(function(){
    Route::get('/artisans','index');
    Route::get('/artisans/{id}','show');
    Route::patch('/artisans/{id}','update')->middleware('auth:sanctum');
    Route::delete('/artisans/{id}','destroy')->middleware('auth:sanctum');
    Route::put('/artisans/{id}/approve','approve')->middleware('auth:sanctum');
    Route::put('/artisans/{id}/suspend','suspend')->middleware('auth:sanctum');
});
Route::controller(ProjectController::class)->group(function(){
    Route::get('/projects','index');
    Route::post('/projects','store')->middleware('auth:sanctum');
    Route::get('/projects/{id}','show');
    Route::put('/projects/{id}','update')->middleware('auth:sanctum');
    Route::delete('/projects/{id}','destroy')->middleware('auth:sanctum');
    Route::get('/myprojects','myProject')->middleware('auth:sanctum');
    Route::put('/projects/{id}/done','done')->middleware('auth:sanctum');
});
Route::controller(ServicesController::class)->group(function(){
    Route::get('/services','index');
    Route::post('/services','store')->middleware('auth:sanctum');
    Route::put('/services/{id}','update')->middleware('auth:sanctum');
    Route::delete('/services/{id}','destroy')->middleware('auth:sanctum');
});