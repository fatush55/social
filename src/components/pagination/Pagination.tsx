// Root
import React, { useState, FC } from "react"
// Style
import style from "./Pagination.module.css"
// Components
import { PaginationItem } from "../paginationItem/PaginationItem"
import { range, setRoundingUp } from "../../utils/utils"
import {PaginationBtn} from "../paginationBtn/PginationBtn";


type PropsType = {
    currentPage: number
    setCurrencyPage: (pages: number) => void
    totalUsers: number | null
    sizePage: number
    sizePortions?: number
}

export const Pagination: FC<PropsType> = (props) => {
    const {currentPage, setCurrencyPage, totalUsers, sizePage, sizePortions = 20} = props
    const countPages = setRoundingUp(totalUsers, sizePage)
    const countPortions = setRoundingUp( countPages, sizePortions)
    const [portions, setPortions] = useState(setRoundingUp( currentPage, sizePortions))
    const startPages = (sizePortions * portions) - (sizePortions) + 1;
    const endPages = startPages + sizePortions
    const arrayPages = range(1, countPages)

    const handlerClick = (action: 'inc' | 'dec') => {
        if (action === 'inc' && portions < countPortions ) setPortions(portions + 1)
        else if (action === 'dec' && portions > 1 ) setPortions(portions - 1)
    }

    return (
        <div className={style.root}>

            <div className={style.container}>
                <PaginationBtn type={'left'} handlerClick={handlerClick} isDisabled={portions === 1} />
                {
                    arrayPages.filter(elem => elem >= startPages && elem < endPages).map(elem =>
                        <PaginationItem
                            key={elem}
                            id={elem}
                            active={elem === currentPage}
                            setCurrencyPage={setCurrencyPage}
                            countPages={countPages}
                        />
                    )
                }
                <PaginationBtn type={'right'} handlerClick={handlerClick} isDisabled={portions === countPortions} />
            </div>
        </div>
    )
}
