// Root
import * as axios  from "axios"


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY" : "654a1c8f-38f3-4def-a9e0-de8694410a93"
    },
});

export const userApi = {
    getUsers(currentPage = 1, sizePage = 20) {
        return instance.get(`users?page=${currentPage}&count=${sizePage}`)
            .then(response => response.data)
    },
    setFollowed(type, id) {
        switch (type) {
            case 'follow':
                return instance.post(`follow/${id}`).then(data => data.data)
            case 'unFollow':
                return instance.delete(`follow/${id}`).then(data => data.data)
            default:
                return false
        }
    },
}

export const profileApi = {
    getProfile(id) {
        return instance.get(`profile/${id}`).then(response => response.data)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`).then(response => response.data)
    },
    upDataStatus(status) {
        return instance.put(`profile/status`, {status}).then(response => response.data)
    },
    updatePhotos(fileData) {
        const formData = new FormData()
        formData.append('image', fileData)
        return instance.put(`profile/photo`, formData, {'Content-Type': 'multipart/form-data'}).then(response => response.data)
    },
    updateProfile(profile) {
        return instance.put(`profile`, profile).then(response => response.data)
    }
}

export const authApi = {
    getMe() {
        return instance.get('auth/me').then(response => response.data)
    },
    login({email, password, rememberMy = false, captcha = null}) {
        return instance.post('auth/login', {email, password, rememberMy, captcha}).then(data => data.data)
    },
    logout() {
        return instance.delete('auth/login').then(data => data.data)
    }
}

export const securityApi = {
    getCaptcha() {
        return instance.get('security/get-captcha-url').then(response => response.data)
    }
}
