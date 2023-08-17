import Model from '@/services/models/Model'
import {IListingType} from '@/types/database'

export default class ListingType extends Model {
 
  resource() {
    return 'listing-types'
  }

  paginate(){
    return super.getPagination<IListingType>()
  }

}


