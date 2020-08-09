// Root
import React from "react"
// Style
import style from "./PaginationItem.module.css"


export const PaginationItem = ({id, active, setCurrencyPage, defaultValue = false}) => {
    const handlerCurrencyPage = () => active !== id && setCurrencyPage(id)

    return (
        <div
            className={`${style.root} ${active ? style.active : ''}`}
            onClick={handlerCurrencyPage}
        >
            <span>
                {
                    defaultValue ? defaultValue : id
                }
            </span>
        </div>
    )
}