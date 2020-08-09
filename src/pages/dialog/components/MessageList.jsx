// Root
import React, { createRef, useEffect } from "react"

// Style
import style from "./MessageList.module.css"
// Components
import { Message } from "../../../components/message/Message"
import {MessageForm} from "./MessageForm";


export const MessageList = ({messages, submitMessage, match, }) => {
    const idUser = match.params.idUser ? Number(match.params.idUser) : 1
    const container = createRef()

    const handlerMessage = ({message}) => submitMessage(idUser, message)

    useEffect(() => {
        container.current.scrollBy(0, container.current.offsetHeight)
    })

    return (
        <div className={style.root}>
            <div className={style.container} ref={container}>
                <div className={style.containerMessages}>
                    {
                        messages[idUser - 1] !== undefined && messages[idUser - 1].messages.map(elem => <Message key={elem.id} message={elem} />)
                    }
                </div>
            </div>
            <MessageForm onSubmit={handlerMessage} />
        </div>
    )
}