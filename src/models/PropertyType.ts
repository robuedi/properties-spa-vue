import Model from '@/models/Model'
import {IPropertyType} from '@/types/database'

export default class PropertyType extends Model {
  
  resource() {
    return 'property-types'
  }

  paginate(){
    return super.getPagination<IPropertyType>()
  }
  
}

