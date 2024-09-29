<div class="row padding-1 p-1">
    <div class="col-md-12">
        
        <div class="form-group mb-2 mb20">
            <label for="expense_type_id" class="form-label">{{ __('Expense Type Id') }}</label>
            <input type="text" name="expense_type_id" class="form-control @error('expense_type_id') is-invalid @enderror" value="{{ old('expense_type_id', $expense?->expense_type_id) }}" id="expense_type_id" placeholder="Expense Type Id">
            {!! $errors->first('expense_type_id', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="receipt_type_id" class="form-label">{{ __('Receipt Type Id') }}</label>
            <input type="text" name="receipt_type_id" class="form-control @error('receipt_type_id') is-invalid @enderror" value="{{ old('receipt_type_id', $expense?->receipt_type_id) }}" id="receipt_type_id" placeholder="Receipt Type Id">
            {!! $errors->first('receipt_type_id', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="receipt_number" class="form-label">{{ __('Receipt Number') }}</label>
            <input type="text" name="receipt_number" class="form-control @error('receipt_number') is-invalid @enderror" value="{{ old('receipt_number', $expense?->receipt_number) }}" id="receipt_number" placeholder="Receipt Number">
            {!! $errors->first('receipt_number', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="amount" class="form-label">{{ __('Amount') }}</label>
            <input type="text" name="amount" class="form-control @error('amount') is-invalid @enderror" value="{{ old('amount', $expense?->amount) }}" id="amount" placeholder="Amount">
            {!! $errors->first('amount', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="description" class="form-label">{{ __('Description') }}</label>
            <input type="text" name="description" class="form-control @error('description') is-invalid @enderror" value="{{ old('description', $expense?->description) }}" id="description" placeholder="Description">
            {!! $errors->first('description', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="user_detail" class="form-label">{{ __('User Detail') }}</label>
            <input type="text" name="user_detail" class="form-control @error('user_detail') is-invalid @enderror" value="{{ old('user_detail', $expense?->user_detail) }}" id="user_detail" placeholder="User Detail">
            {!! $errors->first('user_detail', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>

    </div>
    <div class="col-md-12 mt20 mt-2">
        <button type="submit" class="btn btn-primary">{{ __('Submit') }}</button>
    </div>
</div>