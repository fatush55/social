// Root
import React from "react"
// Style
import style from "./Dialog.module.css"
// Components
import { MessageList } from "./components/MessageList"
import { UserItemList } from "./components/UserItemList"


export const Dialog = ({users, messages, submitMessage, match, }) => {
    return (
        <div className={style.root}>
            <UserItemList users={users} match={match} />
            <MessageList
                messages={messages}
                submitMessage={submitMessage}
                match={match}
            />
        </div>
    )
}
