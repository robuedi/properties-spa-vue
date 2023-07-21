import Model from '@/api/Model'
import axios from 'axios';

export default class PropertyType extends Model {

  resource() {
    return 'property-types'
  }
  
}