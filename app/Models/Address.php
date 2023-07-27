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

    /**
     * Relationships
     */
    public function property(): HasOne
    {
        return $this->hasOne(Property::class);
    }

    public function address(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }

}
