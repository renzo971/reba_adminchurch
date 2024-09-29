<?php

namespace App\Http\Controllers;

use App\Models\Income;
use App\Http\Requests\IncomeRequest;
use App\Models\IncomeType;
use App\Models\Member;
use Inertia\Inertia;

/**
 * Class IncomeController
 * @package App\Http\Controllers
 */
class IncomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $incomes = Income::with('user', 'member', 'incomeType')->get();

        return Inertia::render('income/index', [
            'incomes' => $incomes,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $income = new Income();
        $incomeTypes = IncomeType::all();
        $members = Member::all();
        return Inertia::render('income/create', ['income' => $income, 'incomeTypes' => $incomeTypes, 'members' => $members]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(IncomeRequest $request)
    {
        Income::create($request->validated());

        return redirect()->route('incomes.index')
            ->with('success', 'Income created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $income = Income::with('user', 'member', 'incomeType')->find($id);

        return Inertia::render('income/show', ['income' => $income]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $income = Income::with('user', 'member', 'incomeType')->find($id);
        $incomeTypes = IncomeType::all();
        $members = Member::all();
        return Inertia::render('income/edit', ['income' => $income, 'incomeTypes' => $incomeTypes, 'members' => $members]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(IncomeRequest $request, Income $income)
    {
        $income->update($request->validated());

        return redirect()->route('incomes.index')
            ->with('success', 'Income updated successfully');
    }

    public function destroy($id)
    {
        Income::find($id)->delete();

        return redirect()->route('incomes.index')
            ->with('success', 'Income deleted successfully');
    }
}
