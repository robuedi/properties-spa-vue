import Model from "@/api/Model"
// import ListingType from "@/api/models/ListingType"
// import {TListingType} from '@/types/database'
// import PropertyType from "@/api/models/PropertyType"
import {IUserProperty} from '@/types/database';

export default class UserProperty extends Model {
  
  resource() {
    return 'user-properties'
  }

  paginate(){
    return super.getPagination<IUserProperty>()
  }
}
