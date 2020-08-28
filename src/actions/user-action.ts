// Type
import { UsersType } from "../types/types"

export const actionsUser = {
    fallowUser: (id: number) => ({type: 'USER/FALLOWED', id} as const),
    setUsers: (users: Array<UsersType>) => ({type: 'USER/SET_USERS', users} as const),
    setTotalUsers: (total: number) => ({type: 'USER/SET_TOTAL_USERS', total} as const),
    setCurrencyPage: (page: number) => ({type: 'USER/SET_CURRENCY_PAGE', page}) as const,
    triggerLoading: (isLoading: boolean) => ({type: 'USER/TRIGGER_LOADING', isLoading} as const),
    triggerFollowProgress: (id: number, progress: boolean) => ({type: 'USER/TRIGGER_FALLOW_PROGRESS', id, progress} as const)
}