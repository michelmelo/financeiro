<?php

use Modules\Vivino\Http\Controllers\OrdersController;

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

Route::get('index', [OrdersController::class, 'index']);
Route::get('show/{id}', [OrdersController::class, 'show']);
Route::get('update/{id}', [OrdersController::class, 'update']);
Route::get('vivino/purchaseorder/{id}', [OrdersController::class, 'purchaseOrder']);

