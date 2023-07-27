<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\GetTableColumns;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Property extends Model
{
    use HasFactory, GetTableColumns;

    protected $table = 'properties';

    /**
     * Relationships
     */
    public function rentListing(): HasOne
    {
        return $this->hasOne(RentListing::class);
    }

    public function sellListing(): HasOne
    {
        return $this->hasOne(RentListing::class);
    }

    public function address(): BelongsTo
    {
        return $this->belongsTo(Address::class);
    }

    public function listingType(): BelongsTo
    {
        return $this->belongsTo(ListingType::class);
    }

    public function propertyType(): BelongsTo
    {
        return $this->belongsTo(PropertyType::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
