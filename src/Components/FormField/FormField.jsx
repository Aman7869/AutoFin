import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormStyled } from "./style"
const FormField = ({ label, name, type, ...rest }) => {
    return (
        <>
            <FormStyled>
                <label htmlFor={name}>{label}</label>
                <Field type={type} id={name} name={name} className="form-control form-field" />
                <ErrorMessage name={name} component="div" />
            </FormStyled>
        </>
    )
}

export default FormField