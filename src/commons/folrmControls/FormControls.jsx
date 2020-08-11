// Root
import React from "react"
// Style
import style from "./FormControls.module.css"
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'


export const Input = ({meta, input, ...props}) => {
    const hasError = meta.touched && meta.error
    const hasErrorAlert = meta.touched && meta.error && meta.error.trim().length !== 0
    const hasSuccess = meta.touched && !meta.error

    return(
       <div className={style.root}>
           <div className={style.itemContainer}>
               <input
                   {...input} {...props}
                   className={`${style.item} ${hasError ? style.itemError : ''} ${hasSuccess ? style.itemSuccess : ''}`}
               />
               {
                   hasError && <FontAwesomeIcon className={`${style.icon} ${style.iconError}`} icon={faExclamationCircle} />
               }
               {
                   hasSuccess && <FontAwesomeIcon className={`${style.icon} ${style.iconSuccess}`} icon={faCheckCircle} />
               }
           </div>
           {
               hasErrorAlert && <div className={style.error}>{meta.error}</div>
           }
       </div>
    )
}

export const CheckBox = ({meta, input, text, ...props}) => {
    return(
        <div className={style.itemCheckBox}>
            <div className={style.itemContainer}>
                <label className={style.container}>
                    <span className={style.containerLabel}>{text}</span>
                    <input
                        {...input} {...props}
                        type={'checkbox'}
                        className={`${style.itemCheckBox}`}
                    />
                    <span className={style.checkmark}/>
                </label>
            </div>
        </div>
    )
}