// Type
import { PhotosType, ProfileType } from "../types/types"

export const actionsProfile = {
    addComment: (comment: string, img: string) => ({type: 'PROFILE/ADD_COMMENT', comment, img} as const),
    setProfile: (profile: ProfileType) => ({type: 'PROFILE/SET_PROFILE', profile} as const),
    setStatus: (status: string | null) => ({type: 'PROFILE/SET_STATUS', status} as const),
    updatePhotos: (photos: PhotosType) => ({type: 'PROFILE/UPDATE_PHOTOS', photos} as const),
    triggerLoading: (isLoading: boolean) => ({type: 'PROFILE/TRIGGER_LOADING', isLoading} as const),
    triggerStatusUpdateProfile: (status: boolean) => ({type: 'PROFILE/TRIGGER_STATUS_UPDATE_PROFILE', status} as const),
}
