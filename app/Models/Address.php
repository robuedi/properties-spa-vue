<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Address extends Model
{
    use HasFactory;

    protected $table = 'addresses';

    protected $fillable = ['city_id', 'street_nr','street', 'postcode']; 

    /**
     * Relationships
     */
    public function property(): HasOne
    {
        return $this->hasOne(Property::class, 'address_id');
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }

}
