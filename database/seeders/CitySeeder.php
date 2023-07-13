<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\City;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cities_names = ['London','Manchester','Birmingham','Leeds','Bradford','Glasgow', 'Sheffield','Liverpool','Newcastle','Edinburgh', 'Bristol'];

        $cities = array_map(function($item, $index){
            return ['id'=> $index, 'name'=> $item, 'country_id'=>1, 'created_at'=>date("Y-m-d H:i:s"), 'updated_at'=>date("Y-m-d H:i:s")];
        },$cities_names, range(1, count($cities_names)));

        City::insert($cities);
    }
}
