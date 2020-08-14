export type PhotosType = {
    small: string | null
    large: string | null
}

export type UsersType = {
    id: number
    name: string
    status: string | null
    photos: PhotosType
    followed: boolean
    uniqueUrlName?: null
}

export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type ProfileType = {
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: ContactsType
    photos?: PhotosType
}

export type CommentType = {
    id: number
    text: string
    like: number
    img: {url: string| null, alt: string| null}
}

export type AuthDataType = {
    email?: null | string
    login?: null | string
    id?: null | number
    photos: null | PhotosType
}
