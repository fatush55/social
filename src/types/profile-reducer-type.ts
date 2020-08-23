import { ContactsType } from "./types"


export type ProfileFormValueType = {
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    aboutMe?: string | null
    contacts?: ContactsType
}
