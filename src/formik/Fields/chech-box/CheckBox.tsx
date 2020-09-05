// Root
import React, { FC } from "react"
// style
import style from "./CheckBox.module.css"
// Type
import { OwnPropsType } from "../../CreateField/CreateField"
import {Field} from "formik";


export const CheckBox: FC<OwnPropsType> = ({touched, error, label, ...props}) => {
    return(
        <label className={style.container}>
            <span className={style.containerLabel}>{label}</span>
            <Field
                {...props}
                className={`${style.itemCheckBox}`}
                component="input"
            />
            <span className={style.checkmark}/>
        </label>
    )
}
