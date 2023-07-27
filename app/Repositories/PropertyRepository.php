<?php

namespace App\Repositories;

use App\Models\Property;

class PropertyRepository extends Property implements PropertyRepositoryInterface
{
    protected array $data = [];
    protected \Illuminate\Database\Eloquent\Model|int|string|null  $address = null;
    protected \Illuminate\Database\Eloquent\Model|int|string|null  $user = null;
    protected array|null $rent_listing = null;
    protected array|null $sell_listing = null;
    protected Property|null $property_instance = null;

    public function setData(array $data) : PropertyRepositoryInterface
    {
        $this->data = $data;
        return $this;
    }

    public function setAddress(\Illuminate\Database\Eloquent\Model|int|string|null $address) : PropertyRepositoryInterface
    {
        $this->address = $address;
        return $this;
    }

    public function setUser(\Illuminate\Database\Eloquent\Model|int|string|null $user) : PropertyRepositoryInterface
    {
        $this->user = $user;
        return $this;
    }

    public function setRentListing(array|null $rent_listing) : PropertyRepositoryInterface
    {
        $this->rent_listing = $rent_listing;
        return $this;
    }

    public function setSellListing(array|null $sell_listing) : PropertyRepositoryInterface
    {
        $this->sell_listing = $sell_listing;
        return $this;
    }

    public function saveInstance(array $data = null) : Property|null
    {          
        $property = new Property($data ?? $this->data);

        if(!$this->user){
            return null;
        }
        $property->owner()->associate(auth()->user());

        if(!$this->address){
            return null;
        }
        $property->address()->associate($this->address);
        $property->save();

        if($this->rent_listing){
            $property->rentListing()->create($this->rent_listing);
        };

        if($this->sell_listing){
            $property->sellListing()->create($this->sell_listing);
        };

        return $this->property_instance;
    }
}
