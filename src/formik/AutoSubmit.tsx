import React, { useEffect, useCallback } from "react"
import { useFormikContext } from "formik"
import debounce from "lodash.debounce"

export const AutoSubmit = ({debounceMs}: {debounceMs: number}) => {
    const formik = useFormikContext()

    const debouncedSubmit = useCallback(debounce(formik.submitForm, debounceMs), [
        formik.submitForm,
        debounceMs
    ])

    useEffect(() => {
        formik.dirty && debouncedSubmit();
    }, [debouncedSubmit, formik.dirty, formik.values])

    return <></>
}
