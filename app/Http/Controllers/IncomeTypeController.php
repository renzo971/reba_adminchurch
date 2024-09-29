<?php

namespace App\Http\Controllers;

use App\Models\IncomeType;
use App\Http\Requests\IncomeTypeRequest;
use Inertia\Inertia;

/**
 * Class IncomeTypeController
 * @package App\Http\Controllers
 */
class IncomeTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $incomeTypes = IncomeType::all();
        return Inertia::render('income-type/index', [
            'incomeTypes' => $incomeTypes,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $incomeType = new IncomeType();
        return Inertia::render('income-type/create', [
            'incomeType' => $incomeType,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(IncomeTypeRequest $request)
    {
        IncomeType::create($request->validated());

        return redirect()->route('income-types.index')
            ->with('success', 'IncomeType created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $incomeType = IncomeType::find($id);

        return Inertia::render('income-type/show', [
            'incomeType' => $incomeType,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $incomeType = IncomeType::find($id);

        return Inertia::render('income-type/edit', [
            'incomeType' => $incomeType,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(IncomeTypeRequest $request, IncomeType $incomeType)
    {
        $incomeType->update($request->validated());

        return redirect()->route('income-types.index')
            ->with('success', 'IncomeType updated successfully');
    }

    public function destroy($id)
    {
        IncomeType::find($id)->delete();

        return redirect()->route('income-types.index')
            ->with('success', 'IncomeType deleted successfully');
    }
}
