import Model from "@/models/Model"
import {IUserProperty} from '@/types/database';

export default class UserProperty extends Model {
  
  protected userId: number|null|undefined

  resource() {
    return `user/${this.userId}/properties`
  }

  setUserId(userId: number|null){
    this.userId = userId
  }

  paginate(){
    return super.getPagination<IUserProperty>()
  }
}
