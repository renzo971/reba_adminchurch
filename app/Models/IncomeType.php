<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class IncomeType
 *
 * @property $id
 * @property $name
 * @property $created_at
 * @property $updated_at
 *
 * @property Income[] $incomes
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class IncomeType extends Model
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
    public function incomes()
    {
        return $this->hasMany(\App\Models\Income::class, 'id', 'income_type_id');
    }
    

}
