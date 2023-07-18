<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Country;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Country::insert([
            ['id'=> 1, 'name'=>'UK', 'created_at'=>date("Y-m-d H:i:s"), 'updated_at'=>date("Y-m-d H:i:s")],
            ['id'=> 2, 'name'=>'Republic of Ireland', 'created_at'=>date("Y-m-d H:i:s"), 'updated_at'=>date("Y-m-d H:i:s")],
        ]);
    }
}

