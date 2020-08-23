// Root
import React, { useState, useEffect, FC } from "react"
// Style
import style from "./ProfileStatus.module.css"


type PropsType = {
    status: string | null
    upDateStatus: (status: string) => void
    idAuth: number | null
    userId: number | null | undefined
}

export const  ProfileStatus: FC<PropsType> = ({status, upDateStatus, idAuth, userId}) => {
    const [editMode, setEditMode] = useState(false)
    const [isStatus, setIsStatus] = useState(status)
    const triggerMode = () => {
        if (idAuth === userId) {
            setEditMode(!editMode)
            isStatus && isStatus.length && editMode && upDateStatus(isStatus)
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
