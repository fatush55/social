// Root
import React from "react"
import { NavLink } from "react-router-dom"
// Style
import style from "./UserItemList.module.css"
// Components
import { UserItem } from "../../../components/userItem/UserItem"


export const UserItemList = ({users, match, }) => {
    return (
        <div className={style.root}>
            <div className={style.container}>
                <h3>Users List</h3>
                <div className={style.containerItem}>
                    {
                        users.map(elem => (
                                <NavLink
                                    className={style.link}
                                    key={elem.id}
                                    to={`/dialog/${elem.id}`}
                                >
                                    <UserItem user={elem} match={match} />
                                </NavLink>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}