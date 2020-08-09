// Root
import React from "react"
// Style
import style from "./Message.module.css"


export const Message = ({message}) => {
    return (
        <div className={message.isGust ? style.root_gust : style.root_my}>
           <div className={message.isGust ? style.gustMessage : style.myMessage}>
               <div className={style.body}>
                   <p>{message.body}</p>
               </div>
               <div className={message.isGust ? style.gustFooter : style.myFooter}>
                   <p>{message.time}</p>
                   {
                       !message.isGust && <span>{message.check}</span>
                   }
               </div>
           </div>
        </div>
    )
}