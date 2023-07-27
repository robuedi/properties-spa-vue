<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RentListing extends Model
{
    use HasFactory;

    protected $table = 'rent_listings';

    /**
     * Relationships
     */
    public function property(): BelongsTo
    {
        return $this->belongsTo(Property::class);
    }
}
