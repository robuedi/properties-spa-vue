<?php

namespace App\Repositories;

use App\Models\Property;

interface PropertyRepositoryInterface
{
    public function setData(array $data) : PropertyRepositoryInterface;

    public function setAddress(\Illuminate\Database\Eloquent\Model|int|string|null $address) : PropertyRepositoryInterface;

    public function setUser(\Illuminate\Database\Eloquent\Model|int|string|null $user) : PropertyRepositoryInterface;

    public function setRentListing(array|null $rent_listing) : PropertyRepositoryInterface;

    public function setSellListing(array|null $sell_listing) : PropertyRepositoryInterface;

    public function saveInstance(array $data = null) : Property|null;
}
