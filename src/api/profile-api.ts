import { PhotosType, ProfileType } from "../types/types"
import { instance, ResponseApiType } from "./api"


export const profileApi = {
    getProfile(id: number) {
        return instance.get<ProfileType>(`profile/${id}`).then(res => res.data)
    },
    getStatus(id: number) {
        return instance.get<string>(`profile/status/${id}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseApiType>(`profile/status`, {status}).then(res => res.data)
    },
    updatePhotos(fileData: File) {
        const formData = new FormData()
        formData.append('image', fileData)
        return instance.put<ResponseApiType<{photos: PhotosType}>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    updateProfile(profile: ProfileType) {
        return instance.put<ResponseApiType>(`profile`, profile).then(response => response.data)
    }
}
