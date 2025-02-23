import { Form, Formik } from 'formik';
import * as Yup from 'yup';


import '../styles/styles.css';
import { MyTextInput } from '../components';

 /** 
    // **Name should be required and min 2 characters, 15 max !DONE
    // **Email should be required and valid email !DONE   
    // **Password should be required and min 6 characters !DONE 
    // **Repeat Password should be required and match with password !DONE
    // **Reset button should reset the form !DONE
**/


export const RegisterFormikPage = () => {
      return (
        <div>
            <h1>Formik Yup Page</h1>

            <Formik
                initialValues = {{
                    firstName: '',
                    email: '',
                    password: '',
                    repeatPassword: ''
                }}
                onSubmit = { (values) => {
                    console.log(values)
                }}
                validationSchema = { Yup.object({
                    firstName:      Yup.string()
                                        .trim()
                                        .max(15, 'Must be 15 characters or less')
                                        .min(2, 'Must be 2 characters or more')
                                        .required('First Name is Required'),
                    email:          Yup.string()
                                        .trim()
                                        .email('Invalid email address')
                                        .required('Email is Required'),
                    password:       Yup.string()
                                        .trim()
                                        .required('Password is Required')
                                        .min(6, 'Password must be at least 6 characters'),
                    repeatPassword: Yup.string()
                                        .oneOf([Yup.ref('password')], 'Passwords must match')
                })}
            >

                { ( { handleReset } ) => (
                    <Form noValidate>
                        <MyTextInput 
                            label="First Name" 
                            name="firstName"
                            placeholder="Name"
                        />
                        <MyTextInput 
                            label="Email" 
                            name="email"
                            placeholder="Email"
                            type="email"
                        />
                        <MyTextInput 
                            label="Password" 
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        <MyTextInput 
                            label="Confirm Password" 
                            name="repeatPassword"
                            placeholder="Confirm Password"
                            type="password"
                        />
                        <button type="submit">Submit</button>
                        <button type="button" onClick={ handleReset }>Reset</button>
                    </Form>
                    )
                }
            </Formik>
        </div>
    )
}
