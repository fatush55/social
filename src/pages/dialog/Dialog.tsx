// Root
import React, { FC } from "react"
// Style
import style from "./Dialog.module.css"
// Components
import { MessageList } from "./components/MessageList"
import { UserItemList } from "./components/UserItemList"
// Type
import { MatchType } from "../../types/types"
import { MessageType, UsersDialogType } from "../../types/dialog-reduser-type"


type OwnToPopsType = {
    users: Array<UsersDialogType>
    messages: Array<MessageType>
    handlerMessage: (id: number, message: string) => void
    match: MatchType
}

export const Dialog: FC<OwnToPopsType> = ({users, messages, handlerMessage, match }) => {
    return (
        <div className={style.root}>
            <UserItemList users={users} match={match} />
            <MessageList
                messages={messages}
                handlerMessage={handlerMessage}
                match={match}
            />
        </div>
    )
}
