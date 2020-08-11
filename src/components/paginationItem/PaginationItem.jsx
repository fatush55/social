// Root
import React from "react"
import classes from "classnames"
// Style
import style from "./PaginationItem.module.css"


export const PaginationItem = ({id, active, setCurrencyPage, defaultValue = false}) => {
    const handlerCurrencyPage = () => active !== id && setCurrencyPage(id)

    return (
        <div
            className={classes(style.root, {[style.active]: active})}
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