// Type
import { AlertType } from "../types/app-reducet-type";


export const actionsApp = {
    triggerInitialize: () => ({type: 'APP/SET_INITIALIZE'} as const),
    setCurrentProfile: (id: number) => ({type: 'APP/SET_CURRENT_PROFILE', id} as const),
    setAlert: (payload: AlertType | null) => ({type: 'APP/SET_ALERT', payload} as const),
    setHiddenAlert: (payload: null | 'show' | 'hide') => ({type: 'APP/SET_HIDDEN_ALERT', payload} as const),
}
