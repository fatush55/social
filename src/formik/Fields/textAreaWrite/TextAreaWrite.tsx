// Root
import React, { FC } from "react"
// Style
import style from "./TextAreaWrite.module.css"
// Type
import { OwnPropsType } from "../../CreateField/CreateField"
import { Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons"


export const TextAreaWrite: FC<OwnPropsType> = (props) => {
    return(
        <>
            <Field
                {...props}
                component="textarea"
                className={style.area}
            />
            <div>
                <button type={"submit"} className={style.btn_s}>
                    <FontAwesomeIcon  icon={faArrowAltCircleUp} />
                </button>
            </div>
        </>
    )
}
