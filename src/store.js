// Root
import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import reduxThunk  from "redux-thunk"
import { reducer as formReducer } from "redux-form"
// Reducer
import { profileReducer } from "./reducer/profile-reducer"
import { dialogReducer } from "./reducer/dialog-reducer"
import { userReducer } from "./reducer/user-reducer"
import { authReducer } from "./reducer/auth-reducer"
import { appReducer } from "./reducer/app-reducer"

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    userPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

window.__store = store
