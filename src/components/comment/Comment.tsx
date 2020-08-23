// Root
import React, { FC } from "react"
// Style
import style from "./Comment.module.css"
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// Assets
import defaultImg from "../../assets/img/default-user.jpg"
import { CommentType } from "../../types/types"

type PropsType = {
    comment: CommentType
}

export const Comment: FC<PropsType> = ({comment}) => {
    return (
        <div className={style.root}>
           <div className={style.avatar}>
               <img src={comment.img && comment.img.url ? comment.img.url : defaultImg} alt='avatar'/>
           </div>
           <div className={style.message}>
               {comment.text}
           </div>
           <div className={style.action}>
               <FontAwesomeIcon className={style.likeIcon} icon={faHeart} />
               <span>{comment.like}</span>
           </div>
        </div>
    )
}
