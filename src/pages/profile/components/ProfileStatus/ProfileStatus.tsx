// Root
import React, { useState, useEffect, FC } from "react"
// Style
import style from "./ProfileStatus.module.css"
import {updateStatus} from "../../../../thunks/profile-thunk";
import {useDispatch, useSelector} from "react-redux";
import {getStatus} from "../../../../selectors/profile-selector";


type PropsType = {
    idAuth: number | null
    userId: number | null | undefined
}

export const  ProfileStatus: FC<PropsType> = ({idAuth, userId}) => {
    const dispatch = useDispatch()
    const status = useSelector(getStatus)

    const [editMode, setEditMode] = useState(false)
    const [isStatus, setIsStatus] = useState(status)

    const triggerMode = () => {
        if (idAuth === userId) {
            setEditMode(!editMode)
            isStatus && isStatus.length && editMode && dispatch(updateStatus(isStatus))
        }
    }

    useEffect(() => {
        setIsStatus(status)
    },[status])

    return (
        <>
            {
                editMode
                    ?
                    <textarea
                        className={style.rootAria}
                        onBlur={triggerMode}
                        autoFocus
                        onChange={(event) => setIsStatus(event.target.value)}
                        defaultValue={isStatus ? isStatus : ''}
                    />
                    :
                    <div className={style.root} onDoubleClick={triggerMode}>
                        <span>{status ? status : 'not found...'}</span>
                    </div>
            }
        </>
    )

}
