// Root
import React from "react"
// Style
import style from "./Comment.module.css"
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// Assets
import defaultImg from "../../assets/img/default-user.jpg"


export const Comment = ({comment}) => {
    return (
        <div className={style.root}>
           <div className={style.avatar}>
               <img src={comment.img.url !== null ? comment.img.url : defaultImg} alt={comment.img.alt}/>
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
