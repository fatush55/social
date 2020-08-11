// Root
import React from "react"
import { reduxForm } from "redux-form"
// Style
import style from "../Login.module.css"
// Components
import { CreatorField } from "../../../commons/folrmControls/CreatorField"


const LoginFormContainer = ({captcha, handleSubmit, error}) => {
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            { error && error.length && <div className={style.alertError}>{error}</div> }
            <CreatorField placeholder='email' name='email' component='input' validate={['required', 'maxLength', 'email']} />
            <CreatorField placeholder='password' type='password' name='password' component='input' validate={['required', 'maxLength']} />
            <CreatorField name='rememberMy' component='check-box' text='Remember My' />
            {
                captcha && <>
                    <img className={style.captcha} src={captcha} />
                    <CreatorField placeholder='symbol' name='captcha' component='input' validate={['required', 'maxLength']} />
                </>
            }
            <div className={style.submitBtnContainer}>
                <button className={style.submitBtn}>Log In</button>
            </div>
        </form>
    )

}

export const LoginForm = reduxForm({form: 'login'})(LoginFormContainer)
