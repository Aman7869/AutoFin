import React from 'react'
import RegisterSideComponent from '../../../Components/RegisterSideComponent'
import { SellerStyle } from './style'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormField from '../../../Components/FormField';

const RegistrationSeller = () => {
    const sidebarContent = {
        autofin: " Collaborate with AUTOFIN in just a few steps",
        contact: "We are here for you!"
    }

    const initialValue = { email: '', password: '' }
    return (
        <SellerStyle>
            <div className='container'>
                <div className='row registration-section'>
                    <div className='col-md-9 registration-option'>
                        <h4 className='offer-text'>Offer of the company </h4>
                        <Formik
                            initialValues={initialValue}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >

                            {({ isSubmitting }) => (
                                <Form>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <FormField type="text" name="Name" label="Name" />
                                        </div>
                                    </div>
                                    <div className='information-section pt-4'>
                                        <h4 className='offer-text'>Information Section </h4>
                                      

                                        <div className="row pb-3">
                                            <div className='col-md-6'>
                                                <FormField type="number" name="full_name" label="Full name" />
                                            </div>
                                            <div className='col-md-6'>
                                                <FormField type="text" name="full_name" label="Full name" />
                                            </div>
                                        </div>

                                        <div className="row pb-3">
                                            <div className='col-md-6'>
                                                <FormField type="text" name="full_name" label="Full name" />
                                            </div>
                                            <div className='col-md-6'>
                                                <FormField type="text" name="full_name" label="Full name" />
                                            </div>
                                        </div>

                                        <div className="row pb-3">
                                            <div className='col-md-6'>
                                                <FormField type="text" name="full_name" label="Full name" />
                                            </div>
                                            <div className='col-md-6'>
                                                <FormField type="text" name="full_name" label="Full name" />
                                            </div>
                                        </div>

                                        <div className="row pb-3">
                                            <div className='col-md-6'>
                                                <FormField type="text" name="full_name" label="Full name" />
                                            </div>
                                            <div className='col-md-6'>
                                                <FormField type="text" name="full_name" label="Full name" />
                                            </div>
                                        </div>

                                        <div className='row pb-3'>
                                            <div className='col-md-12 '>
                                                <FormField type="email" name="email" label="Email" />
                                            </div>
                                        </div>

                                        <div className="row pb-2">
                                            <div className='col-md-6'>
                                                <FormField type="text" name="full_name" label="Full name" />
                                            </div>
                                            <div className='col-md-6'>
                                                <FormField type="text" name="full_name" label="Full name" />
                                            </div>
                                        </div>
                                        <div className="row pb-2">
                                            <div className='col-md-6'>
                                                <FormField type="text" name="full_name" label="Full name" />
                                            </div>
                                            <div className='col-md-6'>
                                                <FormField type="text" name="full_name" label="Full name" />
                                            </div>
                                        </div>


                                    </div>

                                    <div>
                                        <button className='btn register-btn'>Registration</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className='col-md-3 side-component'>
                        <RegisterSideComponent content={sidebarContent} />
                    </div>
                </div>
            </div>
        </SellerStyle>
    )
}

export default RegistrationSeller