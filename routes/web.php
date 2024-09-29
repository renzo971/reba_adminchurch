<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\ExpenseTypeController;
use App\Http\Controllers\IncomeController;
use App\Http\Controllers\IncomeTypeController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReceiptTypeController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('/users', UserController::class);
    Route::resource('/members', MemberController::class);
    Route::resource('/income-types', IncomeTypeController::class);
    Route::resource('/expense-types', ExpenseTypeController::class);
    Route::resource('/receipt-types', ReceiptTypeController::class);
    Route::resource('incomes', IncomeController::class);
    Route::resource('/expenses', ExpenseController::class);
    Route::resource('/contacts', ContactController::class);
});

require __DIR__ . '/auth.php';
