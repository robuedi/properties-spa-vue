import Model from '@/api/Model'

export default class ListingType extends Model {

  name: string =''
 
  resource() {
    return 'listing-types'
  }

}


