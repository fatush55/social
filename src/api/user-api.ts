import { instance, ResponseItemApiType, ResponseApiType } from "./api"
import  {UsersType } from "../types/types"


export const userApi = {
    getUsers(currentPage = 1, sizePage = 20, search = '', typeSearch = 'all') {
        const query = search.length ? `&term=${search}` : ''
        const type = typeSearch === 'all' ? '' : typeSearch === 'follow' ? `&friend=${true}` : `&friend=${false}`

        return instance.get<ResponseItemApiType<UsersType>>(`users?page=${currentPage}&count=${sizePage}${query}${type}`).then(res => res.data)
    },
    setFollowed(type: 'follow' | 'unFollow', id: number) {
        switch (type) {
            case 'follow':
                return instance.post<ResponseApiType>(`follow/${id}`).then(res => res.data)
            case 'unFollow':
                return instance.delete<ResponseApiType>(`follow/${id}`).then(res => res.data)
        }
    },
}
