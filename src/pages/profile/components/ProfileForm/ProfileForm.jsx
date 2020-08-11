// Root
import React from "react"
import { reduxForm } from "redux-form"
// Style
import style from "./ProfileForm.module.css"
// Components
import { CreatorField } from "../../../../commons/folrmControls/CreatorField"

const ProfileFormContainer = ({handleSubmit, profile}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CreatorField placeholder='Full Name' name='fullName' component='input' validate={['required']} />
                <CreatorField placeholder='About Me' name='aboutMe' component='input' validate={['required']} />
                <CreatorField name='lookingForAJob' component='check-box' text='Looking For A Job' />
                <CreatorField placeholder='looking For A JobDescription' name='lookingForAJobDescription' component='input' validate={['required']} />
                <CreatorField placeholder='Facebook' name='contacts.facebook' component='input' validate={[]} />
                <CreatorField placeholder='Github' name='contacts.github' component='input' validate={[]} />
                <CreatorField placeholder='Instagram' name='contacts.instagram' component='input' validate={[]} />
                <CreatorField placeholder='Main Link' name='contacts.mainLink' component='input' validate={[]} />
                <CreatorField placeholder='Twitter' name='contacts.twitter' component='input' validate={[]} />
                <CreatorField placeholder='Vk' name='contacts.vk' component='input' validate={[]} />
                <CreatorField placeholder='Website' name='contacts.website' component='input' validate={[]} />
                <CreatorField placeholder='Youtube' name='contacts.youtube' component='input' validate={[]} />
                <div className={style.submitBtnContainer}>
                    <button className={style.submitBtn}>Save</button>
                </div>
            </form>
        </>
    )
}

export const ProfileForm = reduxForm({form: 'editProfile'})(ProfileFormContainer)
