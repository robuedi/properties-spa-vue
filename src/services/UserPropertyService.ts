import UserProperty from  "@/api/models/UserProperty";

export default class UserPropertyService {
    getAll(){
        return UserProperty
            .include(['propertyType', 'listingType', 'rentListing', 'sellListing'])
            .getPagination()
    }
}