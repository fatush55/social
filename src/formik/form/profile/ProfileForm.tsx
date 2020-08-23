// Root
import React, { FC } from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'
// Style
import style from "./ProfileForm.module.css"
// Components
import { CreteField } from '../../CreateField/CreateField'
// Type
import { ProfileFormValueType } from '../../../types/profile-reducer-type'


const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

interface PropsType {
    handlerSubmit: (profile: ProfileFormValueType) => void
}


export const ProfileForm:FC<PropsType & ProfileFormValueType> = ({handlerSubmit, ...props}) => {
    return (
        <div className={style.root}>
            <Formik
                initialValues={{
                    ...props,
                }}
                validationSchema={SignupSchema}
                onSubmit={(
                    values: ProfileFormValueType,
                    { setSubmitting }: FormikHelpers<ProfileFormValueType>
                ) => {
                    handlerSubmit(values)
                    setSubmitting(false)
                }}
            >
                {({ errors, touched}) => (
                    <Form className={style.form}>
                        {/*{ error && error.length && <div className={style.alertError}>{error}</div> }*/}

                        <CreteField
                            name="fullName"
                            placeholder="Full Name"
                            component='input'
                            error={errors.fullName}
                            touched={touched.fullName}
                        />

                        <CreteField
                            name="aboutMe"
                            placeholder="About my"
                            component='input'
                            error={errors.aboutMe}
                            touched={touched.aboutMe}
                        />

                        <CreteField
                            label="Looking For A Job"
                            name="lookingForAJob"
                            component='checkbox'
                            type="checkbox"
                            error={errors.lookingForAJob}
                            touched={touched.lookingForAJob}
                        />

                        <CreteField
                            name="lookingForAJobDescription"
                            placeholder="Looking For A Job Description"
                            component='input'
                            error={errors.lookingForAJobDescription}
                            touched={touched.lookingForAJobDescription}
                        />

                        <CreteField
                            name="contacts.facebook"
                            placeholder="Facebook"
                            component='input'
                        />

                        <CreteField
                            name="contacts.github"
                            placeholder="Git Hub"
                            component='input'
                        />

                        <CreteField
                            name="contacts.instagram"
                            placeholder="Facebook"
                            component='input'
                        />

                        <CreteField
                            name="contacts.mainLink"
                            placeholder="Main Link"
                            component='input'
                        />

                        <CreteField
                            name="contacts.twitter"
                            placeholder="Twitter"
                            component='input'
                        />

                        <CreteField
                            name="contacts.vk"
                            placeholder="vk"
                            component='input'
                        />

                        <CreteField
                            name="contacts.website"
                            placeholder="Website"
                            component='input'
                        />

                        <CreteField
                            name="contacts.youtube"
                            placeholder="YouTube"
                            component='input'
                        />

                        <div className={style.submitBtnContainer}>
                            <button type={"submit"} className={style.submitBtn}>Update</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
