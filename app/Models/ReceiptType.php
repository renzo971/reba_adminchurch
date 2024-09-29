<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ReceiptType
 *
 * @property $id
 * @property $name
 * @property $created_at
 * @property $updated_at
 *
 * @property Expense[] $expenses
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class ReceiptType extends Model
{
    

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['name'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function expenses()
    {
        return $this->hasMany(\App\Models\Expense::class, 'id', 'receipt_type_id');
    }
    

}
