<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Http\Requests\ExpenseRequest;

/**
 * Class ExpenseController
 * @package App\Http\Controllers
 */
class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $expenses = Expense::paginate();

        return view('expense.index', compact('expenses'))
            ->with('i', (request()->input('page', 1) - 1) * $expenses->perPage());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $expense = new Expense();
        return view('expense.create', compact('expense'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ExpenseRequest $request)
    {
        Expense::create($request->validated());

        return redirect()->route('expenses.index')
            ->with('success', 'Expense created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $expense = Expense::find($id);

        return view('expense.show', compact('expense'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $expense = Expense::find($id);

        return view('expense.edit', compact('expense'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ExpenseRequest $request, Expense $expense)
    {
        $expense->update($request->validated());

        return redirect()->route('expenses.index')
            ->with('success', 'Expense updated successfully');
    }

    public function destroy($id)
    {
        Expense::find($id)->delete();

        return redirect()->route('expenses.index')
            ->with('success', 'Expense deleted successfully');
    }
}
