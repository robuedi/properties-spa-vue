import Model from '@/api/Model'

export default class PropertyType extends Model {

  name: string =''
  
  resource() {
    return 'property-types'
  }
  
}

