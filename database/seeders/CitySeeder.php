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
        $cities_names = [
            1 => ['London','Manchester','Birmingham','Leeds','Bradford','Glasgow', 'Sheffield','Liverpool','Newcastle','Edinburgh', 'Bristol'],
            2 => ['Dublin', 'Cork']
        ];

        $cities = [];
        $id = 1;
        foreach($cities_names as $country_id => $cities_)
        {
            foreach($cities_ as $city)
            {
                $cities[] = ['id'=> $id, 'name'=> $city, 'country_id'=> $country_id, 'created_at'=>date("Y-m-d H:i:s"), 'updated_at'=>date("Y-m-d H:i:s")];
                $id++;
            }
        }

        City::insert($cities);
    }
}
