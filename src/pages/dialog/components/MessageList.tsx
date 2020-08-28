// Root
import React, {createRef, FC, useEffect} from "react"

// Style
import style from "./MessageList.module.css"
// Components
import { Message } from "../../../components/message/Message"
import { WriteAreaForm } from "../../../formik/form/write-area-form/WriteAreaForm"
// TYpe
import { MessageType } from "../../../types/dialog-reduser-type"
import { MatchType } from "../../../types/types"


type OwnToPopsType = {
    messages: Array<MessageType>
    handlerMessage: (id: number, message: string) => void
    match: MatchType
}

type Values = {
    message: string
}

export const MessageList: FC<OwnToPopsType> = ({messages, handlerMessage, match}) => {
    const idUser = match.params.idUser ? Number(match.params.idUser) : 1
    const container = createRef<HTMLDivElement>()
    const handlerSubmit = (form: Values) =>  handlerMessage(idUser, form.message)

    useEffect(() => {
        const cont = container.current
        cont && cont.scrollBy(0, cont.offsetHeight)
    })

    return (
        <div className={style.root}>
            <div className={style.container} ref={container}>
                <div className={style.containerMessages}>
                    {
                        messages[idUser - 1] !== undefined &&
                        messages[idUser - 1].messages.map(elem => <Message key={elem.id} message={elem} />)
                    }
                </div>
            </div>
            <WriteAreaForm handlerSubmit={handlerSubmit} message='' />
        </div>
    )
}
