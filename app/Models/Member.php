<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Member
 *
 * @property $id
 * @property $name
 * @property $address
 * @property $phone
 * @property $email
 * @property $created_at
 * @property $updated_at
 *
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Member extends Model
{
    

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'address', 'phone', 'email'];



}
