<?php

namespace Database\Seeders;

use App\Models\ListingType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ListingTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ListingType::insert([
            ['id'=> 1, 'name'=>'rent', 'created_at'=>date("Y-m-d H:i:s"), 'updated_at'=>date("Y-m-d H:i:s")],
            ['id'=> 2, 'name'=>'sell', 'created_at'=>date("Y-m-d H:i:s"), 'updated_at'=>date("Y-m-d H:i:s")]
        ]);
    }
}
