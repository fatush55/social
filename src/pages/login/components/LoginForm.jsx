// Root
import React from "react"
import { reduxForm } from "redux-form"
// Style
import style from "../Login.module.css"
// Components
import { CreatorField } from "../../../commons/folrmControls/CreatorField"


const LoginFormContainer = (props) => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            { props.error && props.error.length && <div className={style.alertError}>{props.error}</div> }
            <CreatorField placeholder='email' name='email' component='input' validate={['required', 'maxLength', 'email']} />
            <CreatorField placeholder='password' type='password' name='password' component='input' validate={['required', 'maxLength']} />
            <CreatorField name='rememberMy' component='check-box' />
            <div className={style.submitBtnContainer}>
                <button className={style.submitBtn}>Log In</button>
            </div>
        </form>
    )

}

export const LoginForm = reduxForm({form: 'login'})(LoginFormContainer)
