// Root
import React, { useState, useEffect } from "react"
// Style
import style from "./ProfileStatus.module.css"


export const  ProfileStatus = ({status, upDateStatus, idAuth, userId}) => {
    const [editMode, setEditMode] = useState(false)
    const [isStatus, setIsStatus] = useState(status)

    const handlerIsStatus = (event) => setIsStatus(event.target.value)
    const triggerMode = () => {
        if (idAuth === userId) {
            setEditMode(!editMode)
            isStatus.length && editMode && upDateStatus(isStatus)
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
                        onChange={handlerIsStatus}
                        defaultValue={isStatus}
                    />
                    :
                    <div className={style.root} onDoubleClick={triggerMode}>
                        <span>{status ? status : 'not found...'}</span>
                    </div>
            }
        </>
    )

}
