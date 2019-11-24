<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/home','UserController@index')->name('home');

Auth::routes();
Route::prefix('/user')->group(function (){
    Route::get('/index', 'UserController@index')->name('user.index');
    Route::get('/search','UserController@search')->name('user.search');
    Route::get('/{id}/delete','UserController@delete')->name('user.delete');
});

