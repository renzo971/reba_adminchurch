@extends('layouts.app')

@section('template_title')
    {{ $expense->name ?? __('Show') . " " . __('Expense') }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="float-left">
                            <span class="card-title">{{ __('Show') }} Expense</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary btn-sm" href="{{ route('expenses.index') }}"> {{ __('Back') }}</a>
                        </div>
                    </div>

                    <div class="card-body bg-white">
                        
                        <div class="form-group mb-2 mb20">
                            <strong>Expense Type Id:</strong>
                            {{ $expense->expense_type_id }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Receipt Type Id:</strong>
                            {{ $expense->receipt_type_id }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Receipt Number:</strong>
                            {{ $expense->receipt_number }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Amount:</strong>
                            {{ $expense->amount }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Description:</strong>
                            {{ $expense->description }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>User Detail:</strong>
                            {{ $expense->user_detail }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
