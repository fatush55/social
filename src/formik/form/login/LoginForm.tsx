// Root
import React, {FC} from 'react'
import {Form, Formik, FormikHelpers} from 'formik'
import * as Yup from 'yup'
// Style
import style from "./LoginForm.module.css"
// Components
import {CreteField} from '../../CreateField/CreateField'
// Type
import {LoginValue} from '../../../types/auth-reducer-type'
import {useDispatch, useSelector} from "react-redux";
import {getCaptcha} from "../../../selectors/auth-selector";
import {login} from '../../../thunks/auth-thunk'


export const LoginForm:FC = () => {
    const dispatch = useDispatch()
    const captcha = useSelector(getCaptcha)

    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        captcha: captcha ? Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required') : Yup.string(),
    })

    const initialValues = {
        email: '',
        password: '',
        rememberMy: true,
        captcha: captcha,
    }

    const handlerSubmit = ( values: LoginValue, { setSubmitting, setErrors, resetForm }: FormikHelpers<LoginValue>) => {
        const errors = dispatch(login({...values}))
        // @ts-ignore
        errors.then((data: any) => data && setErrors({password: 'error', captcha: 'error', email: 'error'}))
        setSubmitting(false)
    }

    return (
        <div className={style.root}>
            <h1>Log In</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={handlerSubmit}
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
                                    error={errors.captcha}
                                    touched={touched.captcha}
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
