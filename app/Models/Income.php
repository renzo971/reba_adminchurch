<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Income
 *
 * @property $id
 * @property $user_id
 * @property $income_type_id
 * @property $member_id
 * @property $amount
 * @property $description
 * @property $created_at
 * @property $updated_at
 *
 * @property IncomeType $incomeType
 * @property Member $member
 * @property User $user
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Income extends Model
{
    

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id', 'income_type_id', 'member_id', 'amount', 'description'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function incomeType()
    {
        return $this->belongsTo(\App\Models\IncomeType::class, 'income_type_id', 'id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function member()
    {
        return $this->belongsTo(\App\Models\Member::class, 'member_id', 'id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(\App\Models\User::class, 'user_id', 'id');
    }
    

}
