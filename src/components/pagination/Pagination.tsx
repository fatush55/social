// Root
import React, {FC, memo, useState} from "react"
// Style
import style from "./Pagination.module.css"
// Components
import {PaginationItem} from "../paginationItem/PaginationItem"
import {range, setRoundingUp} from "../../utils/utils"
import {PaginationBtn} from "../paginationBtn/PginationBtn"
import {useSelector} from "react-redux";
import {getTotalUsers} from "../../selectors/users-selector";


type PropsType = {
    currentPage: number
    sizePage: number
    sizePortions?: number
}

export const Pagination: FC<PropsType> = memo((props) => {
    const {currentPage, sizePage, sizePortions = 20} = props
    const totalUsers = useSelector(getTotalUsers)
    const [portions, setPortions] = useState(setRoundingUp( currentPage, sizePortions))

    const countPages = setRoundingUp(totalUsers, sizePage)
    const countPortions = setRoundingUp( countPages, sizePortions)
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
                {
                    arrayPages.length
                        ? <><PaginationBtn type={'left'} handlerClick={handlerClick} isDisabled={portions === 1} />
                        {
                            arrayPages.filter(elem => elem >= startPages && elem < endPages).map(elem =>
                                <PaginationItem
                                    key={elem}
                                    id={elem}
                                    active={elem === currentPage}
                                    countPages={countPages}
                                />
                            )
                        }
                        <PaginationBtn type={'right'} handlerClick={handlerClick} isDisabled={portions === countPortions} />
                    </>
                    : <></>
                }
            </div>
        </div>
    )
})
