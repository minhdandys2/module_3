<?php

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

Route::prefix('customers')->group(function (){
    Route::get('','CustomerController@index');
    Route::get('/{id}','CustomerController@getById');
    Route::post('/create', 'CustomerController@create');
    Route::put('/{id}/edit', 'CustomerController@edit');
    Route::get('/{id}/delete', 'CustomerController@delete');
});
