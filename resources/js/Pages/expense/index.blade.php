@extends('layouts.app')

@section('template_title')
    Expense
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">

                            <span id="card_title">
                                {{ __('Expense') }}
                            </span>

                             <div class="float-right">
                                <a href="{{ route('expenses.create') }}" class="btn btn-primary btn-sm float-right"  data-placement="left">
                                  {{ __('Create New') }}
                                </a>
                              </div>
                        </div>
                    </div>
                    @if ($message = Session::get('success'))
                        <div class="alert alert-success m-4">
                            <p>{{ $message }}</p>
                        </div>
                    @endif

                    <div class="card-body bg-white">
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead class="thead">
                                    <tr>
                                        <th>No</th>
                                        
										<th>Expense Type Id</th>
										<th>Receipt Type Id</th>
										<th>Receipt Number</th>
										<th>Amount</th>
										<th>Description</th>
										<th>User Detail</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($expenses as $expense)
                                        <tr>
                                            <td>{{ ++$i }}</td>
                                            
											<td>{{ $expense->expense_type_id }}</td>
											<td>{{ $expense->receipt_type_id }}</td>
											<td>{{ $expense->receipt_number }}</td>
											<td>{{ $expense->amount }}</td>
											<td>{{ $expense->description }}</td>
											<td>{{ $expense->user_detail }}</td>

                                            <td>
                                                <form action="{{ route('expenses.destroy',$expense->id) }}" method="POST">
                                                    <a class="btn btn-sm btn-primary " href="{{ route('expenses.show',$expense->id) }}"><i class="fa fa-fw fa-eye"></i> {{ __('Show') }}</a>
                                                    <a class="btn btn-sm btn-success" href="{{ route('expenses.edit',$expense->id) }}"><i class="fa fa-fw fa-edit"></i> {{ __('Edit') }}</a>
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i> {{ __('Delete') }}</button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {!! $expenses->links() !!}
            </div>
        </div>
    </div>
@endsection
