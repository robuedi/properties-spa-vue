<?php

namespace App\Repositories;

use App\Models\ListingType;
use App\Models\Property;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Log;

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
        //make all as a transaction, if anything fails then rollback all
        DB::transaction(function () use ($data){

            //make the property instance
            $property = new Property($data ?? $this->data);

            if(!$this->user){
                throw ValidationException::withMessages(['user'=>'No user found to assign the property to.']);
            }
            $property->owner()->associate(auth()->user());

            //make the address
            if(!$this->address){
                throw ValidationException::withMessages(['address'=>'No address found to assign the property to.']);
            }
            $property->address()->associate($this->address);

            //save the property
            $property->save();

            //save listings
            $this->saveListings(property: $property);

        });

        return $this->property_instance;
    }

    private function saveListings(Property $property)
    {
        if(!$property->listing_type_id){
            throw ValidationException::withMessages(['listing_type'=>'Property listing type missing']);
        }

        $listing_types = ListingType::get()->toArray();
        $listing_type = current(array_filter($listing_types, function($type) use ($property){
            return $type['id'] === $property->listing_type_id;
        }));

        if(!$listing_type){
            throw ValidationException::withMessages(['listing_type'=>'Unknown property listing type']);
        }

        //save the listing type
        switch($listing_type['name'] ?? null){
            case 'rent':
                $property->rentListing()->create($this->rent_listing);
                break;

            case 'sell':
                $property->sellListing()->create($this->sell_listing);
                break;
            
            default:
                throw ValidationException::withMessages(['listing_type'=>'Property listing type not configured']);
        }
    }
}
