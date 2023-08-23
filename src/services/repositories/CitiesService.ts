import City from  "@/models/City";
import {ICity} from '@/types/database'

export default class CitiesService {
    static getByCountry(countryId: number | null) : Promise<ICity[]>{
        if(!countryId){
            return Promise.resolve([])
        }
        
        return City
            .where({country_id: countryId})
            .getCollection<ICity>()
    }

}
