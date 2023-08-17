import Model from '@/services/models/Model'

export default class Country extends Model {
  resource() {
    return 'countries'
  }
}