// Root
import React, {FC, memo, useState} from "react"
import {useFormikContext} from "formik"
// Style
import style from "./SelectorSearchUserFrom.module.css"
// FontAwesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCaretDown} from "@fortawesome/free-solid-svg-icons"


type PropsType = {
    handlerSelect: (type: string) => void
    currencyType: string
}

export const SelectorSearchUserFrom: FC<PropsType> = memo(({handlerSelect, currencyType}) => {
    const formik = useFormikContext()
    const [isSelectedMode, setSelectedMode] = useState(false)
    const handleMode = () => setSelectedMode(!isSelectedMode)
    const handlerItemSelect = (item: string) => {
        handlerSelect(item)
        formik.submitForm().then()
        setSelectedMode(!isSelectedMode)
    }

    return (
        <>
            <div className={style.root} onClick={handleMode}>
                {currencyType.toLocaleUpperCase()}
                <FontAwesomeIcon icon={faCaretDown}  />
            </div>
            {
                isSelectedMode && (
                    <div className={style.leis}>
                        <ul>
                            {
                                currencyType !== 'all' && <li onClick={() => handlerItemSelect('all')}>All</li>
                            }
                            {
                                currencyType !== 'follow' &&  <li onClick={() => handlerItemSelect('follow')}>Follow</li>
                            }
                            {
                                currencyType !== 'unFollow' && <li onClick={() => handlerItemSelect('unFollow')}>Un Follow</li>
                            }
                        </ul>
                    </div>
                )
            }
        </>
    )
})
