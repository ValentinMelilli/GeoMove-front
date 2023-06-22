declare module 'api_response' {
    export type Structure = {
        id?: number
        name: string
        description: string
        profilePicture?: string
        address: string
        city: string
        zip: number
        coord: string
        phone: string
        email: string
        website: string
        ownerId?: number
        owner?: Owner
        timetable?: Timetable[]
        gallery?: Gallery[]
        pricing?: Pricing[]
        createdAt: string
        updatedAt: string
    }

    export type Owner = {
        id?: number
        firstName: string
        lastName: string
        email: string
        phone: string
        userId?: number
        user?: User
        structure?: Structure
        createdAt: string
        updatedAt: string
    }

    export type User = {
        id?: number
        name: string
        email?: string
        birthdate?: string
        profilePicture?: string
        owner?: Owner
    }

    export type Timetable = {
        id?: number
        morning_start: string
        morning_end: string
        afternoon_start: string
        afternoon_end: string
        day: number
        structureId?: number
        structure?: Structure
        createdAt?: string
        updatedAt?: string
    }

    export type Pricing = {
        id?: number
        price: number
        structureId?: number
        structure?: Structure
        sportId?: number
        sport: Sport
        periodicityId?: number
        periodicity: Periodicity
        createdAt?: string
        updatedAt?: string
    }

    export type Sport = {
        id?: number
        name: string
        categoryId?: number
        category?: Category
        tags?: Tag[]
        createdAt?: string
        updatedAt?: string
    }

    export type Periodicity = {
        id?: number
        name: string
        createdAt?: string
        updatedAt?: string
    }

    export type Tag = {
        id?: number
        name: string
        sports?: Sport[]
    }

    export type Category = {
        id?: number
        name: string
        sports?: Sport[]
    }

    export type Gallery = {
        id?: number
        image: string
        structureId?: number
        structure?: Structure
    }
}