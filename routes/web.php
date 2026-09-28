<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\Admin\ServiceController as AdminServiceController;


/*
|--------------------------------------------------------------------------
| Public Website
|--------------------------------------------------------------------------
*/

Route::inertia('/', 'Home')->name('home');

Route::inertia('/about', 'About')->name('about');


/*
|--------------------------------------------------------------------------
| Public Services
|--------------------------------------------------------------------------
*/

Route::get('/services', [
    ServiceController::class,
    'index'
])->name('services.index');

Route::get('/services/{slug}', [
    ServiceController::class,
    'show'
])->name('services.show');


/*
|--------------------------------------------------------------------------
| Admin
|--------------------------------------------------------------------------
*/

Route::prefix('admin')->group(function () {

    /*
    |--------------------------------------------------------------------------
    | Admin Authentication
    |--------------------------------------------------------------------------
    */

    Route::get('/login', [AuthController::class, 'showLogin'])
        ->name('admin.login');

    Route::post('/login', [AuthController::class, 'login'])
        ->name('admin.login.submit');


    /*
    |--------------------------------------------------------------------------
    | Protected Admin Routes
    |--------------------------------------------------------------------------
    */

    Route::middleware('auth')->group(function () {

        // Dashboard
        Route::get('/dashboard', [DashboardController::class, 'index'])
            ->name('admin.dashboard');


        // Services
        Route::get('/services', [AdminServiceController::class, 'index'])
            ->name('admin.services.index');

        Route::get('/services/create', [AdminServiceController::class, 'create'])
            ->name('admin.services.create');

        Route::post('/services', [AdminServiceController::class, 'store'])
            ->name('admin.services.store');

        Route::get('/services/{service}/edit', [AdminServiceController::class, 'edit'])
            ->name('admin.services.edit');

        Route::put('/services/{service}', [AdminServiceController::class, 'update'])
            ->name('admin.services.update');

        Route::delete('/services/{service}', [AdminServiceController::class, 'destroy'])
            ->name('admin.services.destroy');


        // Logout
        Route::post('/logout', [AuthController::class, 'logout'])
            ->name('admin.logout');
    });
});