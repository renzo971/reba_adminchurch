<?php

namespace App\Http\Controllers;

use App\Models\ReceiptType;
use App\Http\Requests\ReceiptTypeRequest;
use Inertia\Inertia;

/**
 * Class ReceiptTypeController
 * @package App\Http\Controllers
 */
class ReceiptTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $receiptTypes = ReceiptType::all();
        return Inertia::render('receipt-type/index', [
            'receiptTypes' => $receiptTypes,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $receiptType = new ReceiptType();
        return Inertia::render('receipt-type/create', [
            'receiptType' => $receiptType,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ReceiptTypeRequest $request)
    {
        ReceiptType::create($request->validated());

        return redirect()->route('receipt-types.index')
            ->with('success', 'ReceiptType created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $receiptType = ReceiptType::find($id);

        return Inertia::render('receipt-type/show', [
            'receiptType' => $receiptType,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $receiptType = ReceiptType::find($id);

        return Inertia::render('receipt-type/edit', [
            'receiptType' => $receiptType,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ReceiptTypeRequest $request, ReceiptType $receiptType)
    {
        $receiptType->update($request->validated());

        return redirect()->route('receipt-types.index')
            ->with('success', 'ReceiptType updated successfully');
    }

    public function destroy($id)
    {
        ReceiptType::find($id)->delete();

        return redirect()->route('receipt-types.index')
            ->with('success', 'ReceiptType deleted successfully');
    }
}
