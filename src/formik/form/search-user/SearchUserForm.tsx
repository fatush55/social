// Root
import React, {FC, memo, useEffect, useState} from 'react'
import {Form, Formik, FormikHelpers} from "formik"
import {useDispatch} from "react-redux"
// Style
import style from "./SearchUesrForm.module.css"
// Components
import {CreteField} from "../../CreateField/CreateField"
import {SelectorSearchUserFrom} from "./components/SelectorSearchUserFrom"
// Thunk
// fontAwesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import {AutoSubmit} from "../../AutoSubmit";
import {setSearchUser, editCurrencyPage} from '../../../thunks/user-thunk'


type FormValue = {
    search_user: string
}

type PropsType = {
    searchUsers: {search: string, type: string}
}

export const SearchUserForm: FC<PropsType> = memo(({searchUsers}) => {
    const [isTypeSearch, setTypeSearch] = useState(searchUsers.type)
    const dispatch = useDispatch()
    const search_user = searchUsers.search

    const handlerSelect = (type: string) => setTypeSearch(type)

    const handlerSubmit = (
        values: FormValue,
        { setSubmitting }: FormikHelpers<FormValue>
    ) => {
        dispatch(setSearchUser(values.search_user, isTypeSearch))
        dispatch(editCurrencyPage(1))
        setSubmitting(false)

    }

    useEffect(() => {

    }, [searchUsers])

    return(
       <div className={style.root}>
           <Formik
               initialValues={{
                   search_user,
               }}
               onSubmit={handlerSubmit}

           >
               {({ errors, touched}) => (
                   <Form className={style.root}>

                       <div className={style.searchItem}>
                           <FontAwesomeIcon icon={faSearch}  />
                       </div>

                       <CreteField
                           name="search_user"
                           placeholder="write name user"
                           component='search'
                           error={errors.search_user}
                           touched={touched.search_user}
                       />

                       <SelectorSearchUserFrom
                           handlerSelect={handlerSelect}
                           currencyType={isTypeSearch}
                       />

                       <AutoSubmit debounceMs={500}/>
                   </Form>
               )}
           </Formik>
       </div>
    )
})
