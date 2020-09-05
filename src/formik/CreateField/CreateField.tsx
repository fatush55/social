// Root
import React, { FC } from "react"
import classes from "classnames"
// Style
import style from "./CreateField.module.css"
// Components
import { CheckBox } from "../Fields/chech-box/CheckBox"
import { Input } from "../Fields/input/Input"
import { TextAreaWrite } from "../Fields/text-area-write/TextAreaWrite"
import { SearchInput } from "../Fields/search-input/SearchInput"


export interface OwnPropsType {
    name: string
    component: string
    label?: string
    type?: string
    key?: string
    value?: string | number
    placeholder?: string
    error?: string | undefined
    touched?: boolean | undefined
    onChange?: (e: any) => void
}

export const CreteField: FC<OwnPropsType> = ( {error, touched, ...props}) => {
    const isShowError = props.component !== 'write-area' && props.component !== 'search'
    const classRoot = classes(
        {[style.root]: props.component === 'input'},
        {[style.itemCheckBox]: props.component === 'checkbox'},
        {'': props.component === 'checkbox'}
    )
    const classContainer = classes(
        {'': props.component === 'checkbox'},
        {[style.itemContainer]: props.component === 'input'},
        {[style.itemContainer]: props.component === 'checkbox'},
    )

    return (
        <div className={classRoot}>
            <div className={classContainer}>
                { props.component === 'input' && <Input touched={touched} error={error} {...props} /> }
                { props.component === 'checkbox' && <CheckBox touched={touched} error={error} {...props} /> }
            </div>
            { props.component === 'write-area' && <TextAreaWrite {...props} /> }
            { props.component === 'search' && <SearchInput {...props} /> }
            {isShowError && error && touched && <div className={style.error}>{error}</div>}
        </div>
    )
}
