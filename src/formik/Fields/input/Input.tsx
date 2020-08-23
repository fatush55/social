// Root
import React, { FC } from "react"
import classes from "classnames"
import { Field } from "formik"
// Style
import style from "./Input.module.css"
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
// Type
import {OwnPropsType} from "../../CreateField/CreateField";


export const Input: FC<OwnPropsType> = ({touched, error, value,  ...props}) => {
    const hasError = touched && error
    const hasSuccess = touched && !error
    const classField = classes(style.item, {[style.itemError]: hasError}, {[style.itemSuccess]: hasSuccess})

    return (
        <>
            <Field
                {...props}
                className={classField}
            />
            {
                hasError && <FontAwesomeIcon className={`${style.icon} ${style.iconError}`} icon={faExclamationCircle} />
            }
            {
                hasSuccess && <FontAwesomeIcon className={`${style.icon} ${style.iconSuccess}`} icon={faCheckCircle} />
            }
        </>
    )
}
