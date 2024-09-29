<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Expense
 *
 * @property $id
 * @property $expense_type_id
 * @property $receipt_type_id
 * @property $receipt_number
 * @property $amount
 * @property $description
 * @property $user_detail
 * @property $created_at
 * @property $updated_at
 *
 * @property ReceiptType $receiptType
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Expense extends Model
{
    

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['expense_type_id', 'receipt_type_id', 'receipt_number', 'amount', 'description', 'user_detail'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function receiptType()
    {
        return $this->belongsTo(\App\Models\ReceiptType::class, 'receipt_type_id', 'id');
    }
    

}
