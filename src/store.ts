// Root
import {createStore, applyMiddleware, combineReducers, compose, Action} from "redux"
import reduxThunk, { ThunkAction } from "redux-thunk"
// Reducer
import { profileReducer } from "./reducers/profile-reducer"
import { dialogReducer } from "./reducers/dialog-reducer"
import { userReducer } from "./reducers/user-reducer"
import { authReducer } from "./reducers/auth-reducer"
import { appReducer } from "./reducers/app-reducer"

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    userPage: userReducer,
    auth: authReducer,
    app: appReducer,
})

type RootReducer = typeof rootReducer
export type RootState = ReturnType<RootReducer>
export type RootThunkCreatorType<A extends Action, P = void> = ThunkAction<P, RootState, undefined, A>

// type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never
// export type ActionsCreatorType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>
export type ActionsCreatorType<T> = T extends {[key: string]: (...args: any[]) => infer U } ? U : never

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)))

// @ts-ignore
window.__store = store