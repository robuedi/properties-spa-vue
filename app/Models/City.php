<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\GetTableColumns;

class City extends Model
{
    use HasFactory, GetTableColumns;

    protected $table = 'cities';

}
