import Model from "@/api/Model"
import ListingType from "@/api/models/ListingType"
import PropertyType from "@/api/models/PropertyType"
import {RentListing, SellListing} from '@/types/database';

export default class UserProperty extends Model {

  bathrooms: number | null = null
  description: string = ''
  listing_type: ListingType |  null = null
  name: string = ''
  property_type: PropertyType | null = null
  is_public: number = 0
  rent_listing: RentListing | null = null
  sell_listing: SellListing | null = null
  
  resource() {
    return 'user-properties'
  }
}
