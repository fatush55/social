// Root
import React, {FC, memo} from "react"
import { Field } from "formik"
// Style
import style from "./SearchInput.module.css"
// Type
import { OwnPropsType } from "../../CreateField/CreateField"

export const SearchInput: FC<OwnPropsType> = memo(({touched, error, value,  ...props}) => {

    return (
        <div className={style.root}>
            <Field
                {...props}
                type='text'
                component="input"
                autoFocus={true}
            />
        </div>
    )
})