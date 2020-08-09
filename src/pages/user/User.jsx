// Root
import React from "react"
// Style
import style from "./User.module.css"
// Components
import { UserCart } from "../../components/userCart/UserCart"
import { Pagination } from "../../components/pagination/Pagination"
import {Loader} from "../../commons/loader/Loader";


export const User = (props) => {
    const {users, fallowUser, currentPage, setCurrencyPage, totalUsers, sizePage, isLoading, followProgress, profile} = props

    return (
        <div className={style.root}>
            {
                isLoading
                    ? <Loader/>
                    : <>
                        <div className={style.container}>
                            {
                                users.map(elem =>
                                    <UserCart
                                        key={elem.id}
                                        user={elem}
                                        fallowUser={fallowUser}
                                        followProgress={followProgress}
                                        profile={profile}
                                    />
                                )
                            }
                        </div>
                        <div className={style.pagination}>
                            <Pagination
                                setCurrencyPage={setCurrencyPage}
                                currentPage={currentPage}
                                totalUsers={totalUsers}
                                sizePage={sizePage}
                                sizePortions={10}
                            />
                        </div>
                    </>
            }
        </div>
    )
}
