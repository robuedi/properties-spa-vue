type ListingLinks = {
    first: string
    last: string,
    next: ?string,
    prev: ?string
}

type ListingMetaLink = {
    url: ?string,
    label: string,
    active: boolean
}

type ListingMeta = {
    current_page: number,
    from: number,
    last_page: number,
    links: ListingMetaLink[]
    path: string,
    per_page: number
    public_fields: string[]
    to: number
    total: number
}

export type APICollectionListing<T> = {
    data: T[],
    links: ListingLinks,
    meta: ListingMeta
} 