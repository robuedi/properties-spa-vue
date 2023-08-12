import Model from "@/api/Model"
import ListingType from "@/api/models/ListingType"

export default class UserProperty extends Model {

  bathrooms: number | null = null
  description: string = ''
  listing_type: ListingType | null = null
  
  resource() {
    return 'user-properties'
  }
}
