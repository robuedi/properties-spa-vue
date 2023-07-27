<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\GetTableColumns;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Country extends Model
{
    use HasFactory, GetTableColumns;

    protected $table = 'countries';

    /**
     * Relationships
     */
    public function ctities(): HasMany
    {
        return $this->hasMany(City::class);
    }
}
