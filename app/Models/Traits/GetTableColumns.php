<?php

namespace App\Models\Traits; 
use Illuminate\Support\Facades\Schema;

trait GetTableColumns
{
    public static function getTableColumns()
    {
        return Schema::getColumnListing(with(new static)->getTable());
    }
   
}
