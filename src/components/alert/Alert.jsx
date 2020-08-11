// Root
import React from "react"
import classes from "classnames"
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
//Style
import style from "./Alert.module.css"


export const Alert = ({alert, hiddenAlert, handlerClosed}) => {
    const classRoot = classes(
        style.root,
        {[style.success]: alert && alert.type === 'success'},
        {[style.warning]: alert && alert.type === 'warning'},
        {[style.error]: alert && alert.type === 'error'},
        {[style.hidden]: hiddenAlert === 'hide'},
        {[style.show]: hiddenAlert === 'show'},
    )

    return (
        <>
            {
                alert && <>
                    <div className={classRoot}>
                        <span className={style.btn} onClick={handlerClosed}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </span>
                        <div className={style.title}>
                            {alert.type}
                        </div>
                        {alert.message}
                    </div>
                </>
            }
        </>
    )
}
