// Root
import React, { FC } from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'
// Style
import style from "./LoginForm.module.css"
// Components
import { CreteField } from '../../CreateField/CreateField'
// Type
import { LoginValue } from '../../../types/auth-reducer-type'


const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

interface PropsType {
    handlerSubmit: (form: LoginValue) => void
}

export const LoginForm:FC<PropsType & LoginValue> = ({handlerSubmit, captcha, email, password, rememberMy}) => {
    return (
        <div className={style.root}>
            <h1>Log In</h1>
            <Formik
                initialValues={{
                    email: email,
                    password: password,
                    rememberMy: rememberMy,
                    captcha: captcha,
                }}
                validationSchema={SignupSchema}
                onSubmit={(
                     values: LoginValue,
                    { setSubmitting }: FormikHelpers<LoginValue>
                ) => {
                    handlerSubmit(values)
                    setSubmitting(false)
                }}
            >
                {({ errors, touched}) => (
                    <Form className={style.form}>
                        {/*{ error && error.length && <div className={style.alertError}>{error}</div> }*/}
                        <CreteField
                            label="Email"
                            name="email"
                            placeholder="Email"
                            type="email"
                            component='input'
                            error={errors.email}
                            touched={touched.email}
                        />
                        <CreteField
                            label="password"
                            name="password"
                            type='password'
                            component='input'
                            placeholder="Password"
                            error={errors.password}
                            touched={touched.password}
                        />
                        <CreteField
                            label="Remember My"
                            name="rememberMy"
                            component='checkbox'
                            type="checkbox"
                            error={errors.rememberMy}
                            touched={touched.rememberMy}
                        />
                        {
                            captcha && <>
                                <img className={style.captcha} src={captcha} alt={'captcha'} />
                                <CreteField
                                    name="captcha"
                                    component='input'
                                    placeholder="symbol"
                                    error={errors.rememberMy}
                                    touched={touched.rememberMy}
                                />
                            </>
                        }

                        <div className={style.submitBtnContainer}>
                            <button type={"submit"} className={style.submitBtn}>Log In</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
