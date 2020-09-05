// Root
import React, {FC} from 'react'
import {Form, Formik, FormikHelpers} from 'formik'
import * as Yup from 'yup'
// Style
import style from "./ProfileForm.module.css"
// Components
import {CreteField} from '../../CreateField/CreateField'
// Type
import {requestUpdateProfile} from "../../../thunks/profile-thunk";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../../selectors/profile-selector";
import {ContactsType} from "../../../types/types";


const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});


export const ProfileForm:FC = () => {
    const dispatch = useDispatch()
    const profile = useSelector(getProfile)



    const contacts = profile?.contacts ? {
        ...profile.contacts,
        vk: profile && profile.contacts && profile.contacts.vk ? profile.contacts.vk : '',
        website: profile && profile.contacts && profile.contacts.website ? profile.contacts.website : '',
        youtube: profile && profile.contacts && profile.contacts.youtube ? profile.contacts.youtube : ''
    } : {}


    const initialValues = {
        lookingForAJob: profile ? profile.lookingForAJob : '',
        lookingForAJobDescription: profile ? profile.lookingForAJobDescription : '',
        fullName: profile ? profile.fullName : '',
        aboutMe: profile ? profile.aboutMe : '',
        contacts: contacts as ContactsType
    }
    const mapValue = {...initialValues}
    delete mapValue.contacts

    type initialValuesType = typeof initialValues


    const handlerSubmit = (values: initialValuesType, { setSubmitting, setErrors}: FormikHelpers<initialValuesType>) => {
        setSubmitting(false)

        const profileUpdate = profile ? {
            ...values,
            userId: profile.userId,
        }: {}
        // @ts-ignore
        profileUpdate && dispatch(requestUpdateProfile(profileUpdate)).then((data) => setErrors({...data}))
    }

    return (
        <div className={style.root}>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={handlerSubmit}
            >
                {({ errors, touched, values}) => (
                    <Form className={style.form}>
                        {/*{ error && error.length && <div className={style.alertError}>{error}</div> }*/}
                        {
                           Object.keys(mapValue).reverse().map(elem => {
                              return (
                                  <div key={elem}>
                                      {
                                          elem === 'lookingForAJob' ? <>
                                                  <CreteField
                                                      key={elem}
                                                      name={elem}
                                                      label={elem}
                                                      component='checkbox'
                                                      type="checkbox"
                                                      error={errors[elem as keyof Omit<initialValuesType, 'contacts'>]}
                                                      touched={touched[elem as keyof Omit<initialValuesType, 'contacts'>]}
                                                  />
                                          </>
                                          : <>
                                                  <CreteField
                                                      key={elem}
                                                      name={elem}
                                                      placeholder={elem}
                                                      component='input'
                                                      error={errors[elem as keyof Omit<initialValuesType, 'contacts'>]}
                                                      touched={touched[elem as keyof Omit<initialValuesType, 'contacts'>]}
                                                  />
                                          </>
                                      }
                                  </div>
                              )
                           })
                        }
                        {
                            Object.keys(values.contacts).map(elem => {
                                return (
                                    <CreteField
                                        key={elem}
                                        name={`contacts.${elem}`}
                                        placeholder={elem}
                                        component='input'
                                        error={errors.contacts?.[elem as keyof ContactsType] }
                                        touched={touched.contacts?.[elem as keyof ContactsType]}
                                    />
                                )
                            })
                        }
                        <div className={style.submitBtnContainer}>
                            <button type={"submit"} className={style.submitBtn}>Update</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
