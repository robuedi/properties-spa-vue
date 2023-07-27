<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\GetTableColumns;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class City extends Model
{
    use HasFactory, GetTableColumns;

    protected $table = 'cities';

    /**
     * Relationships
     */
    public function addresses(): HasMany
    {
        return $this->hasMany(Address::class);
    }

    public function address(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }
}
