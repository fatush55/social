// Root
import React from "react"
import {Field} from "redux-form";
import { creatorMaxLength, email, required } from "../../utils/validators"

// Components
import  { Input, CheckBox } from "../folrmControls/FormControls"

const maxLength = creatorMaxLength(50)

export const CreatorField = ({placeholder, name, validate = [], component, type = 'text'}) => {
    return (
        <div>
            <Field
                placeholder={placeholder}
                type={type}
                name={name}
                validate={getValidator(validate)}
                component={getComponent(component)}
            />
        </div>
    )
}

const getValidator = (validators) => {
    return validators.map(elem => {
        switch (elem) {
            case 'maxLength': return maxLength
            case 'email': return email
            case 'required': return required
            default: return
        }
    })
}

const getComponent = (component) => {
    switch (component) {
        case 'input': return Input
        case 'check-box': return CheckBox
        default: return
    }
}
