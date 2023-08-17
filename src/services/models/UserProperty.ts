import Model from "@/services/models/Model"
import {IUserProperty} from '@/types/database';

export default class UserProperty extends Model {
  
  resource() {
    return 'user-properties'
  }

  paginate(){
    return super.getPagination<IUserProperty>()
  }
}
