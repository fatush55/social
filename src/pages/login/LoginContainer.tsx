// Root
import React, {FC} from "react"
import {Redirect} from "react-router-dom"
// Components
import {LoginForm} from "../../formik/form/login/LoginForm"
import {useSelector} from "react-redux"
import {getIsAuth} from "../../selectors/auth-selector"


const LoginContainer: FC = (props) => {
    const isAuth = useSelector(getIsAuth)

    if (isAuth) return <Redirect to='/profile' />

    return <LoginForm />
}

export default LoginContainer
