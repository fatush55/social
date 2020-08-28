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
    aboutMe?: string | null
    contacts?: ContactsType
    photos?: PhotosType
}

export type ImgType = {
    url: string
    alt: string
}

export type CommentType = {
    id: number
    text: string
    like: number
    img: ImgType | null
}

export type MatchType = {
    params: {idUser: number};
    isExact: boolean;
    path: string;
    url: string;
}
