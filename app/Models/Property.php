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

    protected $fillable = ['owner_id', 'name','property_type_id', 'address_id', 'listing_type_id', 'description', 'bedrooms', 'bathrooms', 'is_public']; 

    /**
     * Relationships
     */
    public function rentListing(): HasOne
    {
        return $this->hasOne(RentListing::class);
    }

    public function sellListing(): HasOne
    {
        return $this->hasOne(SellListing::class);
    }

    public function address(): BelongsTo
    {
        return $this->belongsTo(Address::class, 'address_id');
    }

    public function listingType(): BelongsTo
    {
        return $this->belongsTo(ListingType::class);
    }

    public function propertyType(): BelongsTo
    {
        return $this->belongsTo(PropertyType::class);
    }

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }
}
