// Root
import React, {createRef, useEffect} from "react"
// Style
import style from "./Profile.module.css"
// Components
import { Comment } from "../../components/comment/Comment"
import { ProfileInfos } from "./components/ProfileInfos"
import { Loader } from "../../commons/loader/Loader"
import { CommentForm } from "./components/CommentForm"


export const Profile = ({comments, profile, handlerAddComment, isLoading, status, upDateStatus, idAuth}) => {
    const container = createRef()

    useEffect(() => {
        !isLoading && container.current.scrollBy(0, container.current.offsetHeight)
    })

    return (
        <div className={style.root}>
            {
                isLoading
                    ? <Loader/>
                    : <>
                        <div className={style.infoContainer}>
                            <ProfileInfos
                                profile={profile}
                                status={status}
                                upDateStatus={upDateStatus}
                                idAuth={idAuth}
                            />
                        </div>
                        <div className={style.commentContainer}>
                            <div className={style.comment} ref={container}>
                                {
                                    comments.map(elem => <Comment key={elem.id} comment={elem} />)
                                }
                            </div>
                            <CommentForm onSubmit={({comment}) => handlerAddComment(comment)}/>
                        </div>
                    </>
            }
        </div>
    )
}
