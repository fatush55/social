// Root
import React from "react"
import { Field, reduxForm } from "redux-form"
// Style
import style from "./CommentForm.module.css"
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons"


const From = ({change, handleSubmit}) => {
    const clearForm = () => setTimeout(() => change('comment', null), 0)

    return (
        <form className={style.root} onSubmit={handleSubmit}>
            <Field
                className={style.area}
                palecholder={'Write comment ...'}
                name={'comment'}
                component={'textarea'}
            />
            <div>
                <button onClick={clearForm} className={style.btn}>
                    <FontAwesomeIcon  icon={faArrowAltCircleUp} />
                </button>
            </div>
        </form>
    )
}

export const CommentForm = reduxForm({form: 'comment'})(From)