// Root
import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import reduxThunk  from "redux-thunk"
// Reducer
import { profileReducer } from "./reducer/profile-reducer"
import { dialogReducer } from "./reducer/dialog-reducer"
import { userReducer } from "./reducer/user-reducer"
import { authReducer } from "./reducer/auth-reducer"
import { appReducer } from "./reducer/app-reducer"

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    userPage: userReducer,
    auth: authReducer,
    app: appReducer,
})

type RootReducer = typeof rootReducer
export type RootState = ReturnType<RootReducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)))

// @ts-ignore
window.__store = store