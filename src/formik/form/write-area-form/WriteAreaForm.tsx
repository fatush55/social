// Root
import React, {FC} from 'react'
import {Form, Formik, FormikHelpers} from 'formik'
// Style
import style from "./WriteAreaForm..module.css"
// Component
import {CreteField} from '../../CreateField/CreateField'


type Values = {
    message: string
}

interface PropsType {
    handlerAction: (message: string) => void
}

export const WriteAreaForm:FC<PropsType> = ({handlerAction}) => {
    const initialValues = {
        message: ''
    }

    const handlerSubmit = (values: Values, action: FormikHelpers<Values>) => {
        action.resetForm({})
        action.setSubmitting(false)
        handlerAction(values.message)
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handlerSubmit}
            >
                {({ errors, touched, values}) => (
                    <Form className={style.root}>
                        <CreteField
                            label="message"
                            name="message"
                            type="text"
                            placeholder="Write message ..."
                            component='write-area'
                            value={values.message}
                            error={errors.message}
                            touched={touched.message}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    )
}
