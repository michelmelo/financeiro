<?php

use Modules\VivinoApi\Http\Controllers\VivinoApiController;

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

Route::get('index', [VivinoApiController::class, 'index']);
Route::get('show/{id}', [VivinoApiController::class, 'show']);
Route::get('update/{id}', [VivinoApiController::class, 'update']);
Route::get('vivino/purchaseorder/{id}', [VivinoApiController::class, 'purchaseOrder']);

