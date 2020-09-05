// Root
import React, {FC, memo, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
// Style
import style from "./User.module.css"
// Components
import {UserCart} from "../../components/userCart/UserCart"
import {Pagination} from "../../components/pagination/Pagination"
import {Loader} from "../../commons/loader/Loader"
// Thunk
import {requestUsers, setFollow} from "../../thunks/user-thunk"
// Selector
import {getCurrentPage, getIsLoading, getSizePage, getUser, getSearchUsers} from "../../selectors/users-selector"
import { SearchUserForm } from "../../formik/form/search-user/SearchUserForm"


export const UserContainer: FC = memo(() => {
    const users = useSelector(getUser)
    const isLoading = useSelector(getIsLoading)
    const currentPage = useSelector(getCurrentPage)
    const searchUsers = useSelector(getSearchUsers)
    const sizePage = useSelector(getSizePage)

    const dispatch = useDispatch()
    const fallowUser = (id: number) => dispatch(setFollow(id, users))

    useEffect(() => {
       dispatch(requestUsers(currentPage, sizePage, searchUsers.search, searchUsers.type))
    }, [currentPage, sizePage, dispatch, searchUsers.type, searchUsers.search])

    return (
        <div className={style.root}>
            {
                isLoading
                    ? <Loader/>
                    : <>
                        <div className={style.search}>
                            <SearchUserForm searchUsers={searchUsers} />
                        </div>
                        <div className={style.container}>
                            {
                                users.map(elem =>
                                    <UserCart
                                        key={elem.id}
                                        user={elem}
                                        fallowUser={fallowUser}
                                    />
                                )
                            }
                        </div>
                        <div className={style.pagination}>
                            <Pagination
                                currentPage={currentPage}
                                sizePage={sizePage}
                                sizePortions={10}
                            />
                        </div>
                    </>
            }
        </div >
    )
})
