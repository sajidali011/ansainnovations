<?php

/**
 * ADD THIS TO YOUR EXISTING routes/web.php
 * (don't replace your whole file — just paste the `use` lines at the top
 * and the two route blocks below wherever your other routes are)
 */

use App\Http\Controllers\Admin\ServiceController as AdminServiceController;
use App\Http\Controllers\ServiceController;

// ---------------- ADMIN ROUTES ----------------
// Wrap with your existing auth middleware (adjust 'auth' if you use a
// different guard/middleware name for the admin panel, e.g. 'auth:admin').
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::resource('services', AdminServiceController::class)->except(['show']);

    Route::patch('services/{service}/toggle', [AdminServiceController::class, 'toggleActive'])
        ->name('services.toggle');

    Route::patch('service-images/{image}/toggle', [AdminServiceController::class, 'toggleImage'])
        ->name('services.images.toggle');

    Route::delete('service-images/{image}', [AdminServiceController::class, 'destroyImage'])
        ->name('services.images.destroy');
});

// ---------------- PUBLIC ROUTES ----------------
Route::get('/services', [ServiceController::class, 'index'])->name('services.index');
Route::get('/services/{service:slug}', [ServiceController::class, 'show'])->name('services.show');
