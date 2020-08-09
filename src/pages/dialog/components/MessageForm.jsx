// Root
import React from "react"
import { Field, reduxForm } from "redux-form"
// Style
import style from "./MessageForm.module.css"
// FontAwesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons";


const From = (props) => {
    const clearForm = () => setTimeout(() => props.change('message', null), 0)

    return (
        <form className={style.root} onSubmit={props.handleSubmit}>
            <Field
                className={style.area}
                palecholder={'Write message ...'}
                name={'message'}
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

export const MessageForm = reduxForm({form: 'message'})(From)
