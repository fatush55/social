// Root
import React, { FC } from "react"
// style
import style from "./CheckBox.module.css"
// Type
import { OwnPropsType } from "../../CreateField/CreateField"


export const CheckBox: FC<OwnPropsType> = ({touched, error, label, ...props}) => {
    return(
        <label className={style.container}>
            <span className={style.containerLabel}>{label}</span>
            <input
                {...props}
                className={`${style.itemCheckBox}`}
            />
            <span className={style.checkmark}/>
        </label>
    )
}
