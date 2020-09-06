// Root
import React, {FC, memo, useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
// Style
import style from "./User.module.css"
// Components
import {UserCart} from "../../components/userCart/UserCart"
import {Pagination} from "../../components/pagination/Pagination"
import {Loader} from "../../commons/loader/Loader"
// Thunk
import {editCurrencyPage, editSizePage, requestUsers, setFollow, setSearchUser} from "../../thunks/user-thunk"
// Selector
import {getCurrentPage, getIsLoading, getSearchUsers, getSizePage, getUser} from "../../selectors/users-selector"
import {SearchUserForm} from "../../formik/form/search-user/SearchUserForm"
import {useUrl} from "../../hooks/useUrl";
import {useLocation} from "react-router";
import {parse} from "query-string";


export const UserContainer: FC = memo(() => {
    const location = useLocation()
    const [isInitialize, setIsInitialize] = useState(false)

    const users = useSelector(getUser)
    const isLoading = useSelector(getIsLoading)
    const currentPage = useSelector(getCurrentPage)
    const searchUsers = useSelector(getSearchUsers)
    const sizePage = useSelector(getSizePage)
    const [, setUrl] = useUrl([
        {title: 'page', value: currentPage},
        {title: 'count', value: sizePage},
        {title: 'term', value: searchUsers.search},
        {title: 'type', value: searchUsers.type !== 'all' ? searchUsers.type : ''},
    ])

    const dispatch = useDispatch()
    const fallowUser = (id: number) => dispatch(setFollow(id, users))

    useEffect(() => {
        if (!isInitialize) {
            const queryArg = parse(location.search)

            queryArg.page && dispatch(editCurrencyPage(+queryArg.page))
            queryArg.count && dispatch(editSizePage(+queryArg.count))
            if (queryArg.term || queryArg.type) {
                const term = queryArg.term ? queryArg.term : ''
                const type = queryArg.type ? queryArg.type : 'all'

                if (typeof term === "string" && typeof type === "string") {
                    dispatch(setSearchUser(term, type))
                }
            }
            setIsInitialize(true)
        }

    }, [isInitialize, location.search, dispatch])

    useEffect(() => {
        setUrl()
        dispatch(requestUsers(currentPage, sizePage, searchUsers.search, searchUsers.type))
    }, [isInitialize,currentPage, sizePage, searchUsers.type, searchUsers.search, setUrl, dispatch])

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
