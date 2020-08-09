// Root
import React from "react"
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
// Style
import style from "./PginationBtn.module.css"


export const PaginationBtn = ({type, handlerClick, isDisabled}) => {
    return (
        <button className={style.root} disabled={isDisabled} onClick={() => handlerClick(type === 'left' ? 'dec' : 'inc')} >
            <FontAwesomeIcon icon={type === 'left' ? faAngleLeft : faAngleRight}/>
        </button>
    )
}
