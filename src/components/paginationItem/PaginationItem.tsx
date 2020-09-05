// Root
import React, {FC, memo} from "react"
import classes from "classnames"
// Style
import style from "./PaginationItem.module.css"
import {useDispatch} from "react-redux";
import {editCurrencyPage} from "../../thunks/user-thunk";


type PropsType = {
    id: number
    active: boolean
    defaultValue?: number
    countPages: number
}

export const PaginationItem: FC<PropsType> = memo(({id, active, countPages, defaultValue = false}) => {
    const dispatch = useDispatch()
    const handlerCurrencyPage = () => (countPages + 1) !== id && dispatch(editCurrencyPage(id))

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
})
