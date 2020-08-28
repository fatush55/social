// Root
import React, { FC } from 'react'
import { Formik, Form } from 'formik'
// Style
import style from "./WriteAreaForm..module.css"
// Component
import { CreteField } from '../../CreateField/CreateField'


type Values = {
    message: string
}

interface PropsType {
    handlerSubmit: (form: Values) => void
}

export const WriteAreaForm:FC<PropsType & Values> = ({handlerSubmit, message}) => {
    return (
        <div>
            <Formik
                initialValues={{
                    message: message
                }}
                onSubmit={(
                    values: Values,
                    action
                ) => {
                    handlerSubmit(values)
                    action.resetForm({})
                    action.setSubmitting(false)
                }}
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
