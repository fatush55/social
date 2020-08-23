// Root
import React, { FC } from "react"
import classes from "classnames"
// Style
import style from "./PaginationItem.module.css"


type PropsType = {
    id: number
    active: boolean
    setCurrencyPage: (id: number) => void
    defaultValue?: number
    countPages: number
}

export const PaginationItem: FC<PropsType> = ({id, active, setCurrencyPage, countPages, defaultValue = false}) => {
    const handlerCurrencyPage = () => countPages !== id && setCurrencyPage(id)

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
