// Root
import React, { lazy } from "react"
import { Switch, Route, } from "react-router-dom"
// HOC
import { withSuspense } from "./HOC/withSuspense"
// Pages
import { ProfileContainer } from "./pages/profile/ProfileContainer";
import { UserContainer } from "./pages/user/UserContainer";
// import {TestPageContainer} from "./pages/test/TestPageContainer";

// Laze Pages
const DialogContainer = lazy(() => import("./pages/dialog/DialogContainer"))
const LoginContainer = lazy(() => import("./pages/login/LoginContainer"))


export const Routes = () => {
    return (
        <Switch>
            <Route path='/' render={() => <ProfileContainer/>} exact />
            <Route path='/profile/:idUser?' render={() => <ProfileContainer/>} />
            <Route path='/user' render={() => <UserContainer/>} />
            <Route path='/dialog/:idUser?' render={() => withSuspense(DialogContainer)} />
            <Route path='/login' render={() => withSuspense(LoginContainer)} />
            {/*<Route path='/test' render={() => <TestPageContainer/>} />*/}
            <Route path='*' render={() => (<div>404</div>)} />
        </Switch>
    )
}
