<?php

use App\Http\Controllers\Authentication\UserLoginController;
use App\Http\Controllers\Products\CreateProductController;
use App\Http\Controllers\Products\DeleteProductController;
use App\Http\Controllers\Products\EditProductController;
use App\Http\Controllers\Products\ListProductsController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group( function() {
    Route::get('health', function(){
        return response()->json('Online');
    });
    Route::post('login', [UserLoginController::class, 'execute']);
    // ROUTA ADM AUTENTICADA
    Route::prefix('dash')->middleware('auth:sanctum')->group(function() {
        // ROUTAS PARA OPERAÇÕES DOS PRODUTOS
        Route::prefix('products')->group( function() {
            Route::get('/', [ListProductsController::class, 'execute']);
            Route::post('/', [CreateProductController::class, 'execute']);
            Route::delete('/{id}', [DeleteProductController::class, 'execute']);
            Route::put('/{id}', [EditProductController::class, 'execute']);
        });
    });
});