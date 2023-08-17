export type RentListing = {
    price_weekly: number
    price_monthly: number
}

export type SellListing = {
    price: number
}

export interface IListingType {
    id: number,
    name: string
}

export interface IPropertyType {
    id: number,
    name: string
}

export interface IUserProperty {
    bathrooms: number | null,
    description: string,
    listing_type: IListingType |  null,
    name: string 
    property_type: IPropertyType | null,
    is_public: number,
    rent_listing: RentListing | null,
    sell_listing: SellListing | null
}