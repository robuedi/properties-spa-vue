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
    bathrooms: number | null = null
    description: string = ''
    listing_type: IListingType |  null = null
    name: string = ''
    property_type: IPropertyType | null = null
    is_public: number = 0
    rent_listing: RentListing | null = null
    sell_listing: SellListing | null = null
}