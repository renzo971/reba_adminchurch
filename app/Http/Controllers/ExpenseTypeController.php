<?php

namespace App\Http\Controllers;

use App\Models\ExpenseType;
use App\Http\Requests\ExpenseTypeRequest;
use Inertia\Inertia;

/**
 * Class ExpenseTypeController
 * @package App\Http\Controllers
 */
class ExpenseTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $expenseTypes = ExpenseType::all();
        return Inertia::render('expense-type/index', [
            'expenseTypes' => $expenseTypes,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $expenseType = new ExpenseType();
        return Inertia::render('expense-type/create', [
            'receiptType' => $expenseType,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ExpenseTypeRequest $request)
    {
        ExpenseType::create($request->validated());

        return redirect()->route('expense-types.index')
            ->with('success', 'ExpenseType created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $expenseType = ExpenseType::find($id);

        return Inertia::render('expense-type/show', [
            'expenseType' => $expenseType,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $expenseType = ExpenseType::find($id);

        return Inertia::render('exense-type/edit', [
            'expenseType' => $expenseType,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ExpenseTypeRequest $request, ExpenseType $expenseType)
    {
        $expenseType->update($request->validated());

        return redirect()->route('expense-types.index')
            ->with('success', 'ExpenseType updated successfully');
    }

    public function destroy($id)
    {
        ExpenseType::find($id)->delete();

        return redirect()->route('expense-types.index')
            ->with('success', 'ExpenseType deleted successfully');
    }
}
