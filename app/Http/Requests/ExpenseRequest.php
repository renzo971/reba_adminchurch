<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExpenseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
			'expense_type_id' => 'required',
			'receipt_type_id' => 'required',
			'receipt_number' => 'string',
			'amount' => 'required',
			'description' => 'string',
			'user_detail' => 'string',
        ];
    }
}
