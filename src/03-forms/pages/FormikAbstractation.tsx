import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstractation = () => {
  return (
    <div>
        <h1>Formik Abstractation </h1>
        <Formik
            initialValues={ {
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: '',
            }}
            onSubmit = { (values ) => {
                console.log(values)
            }}
            validationSchema={ Yup.object({
                firstName: Yup.string()
                              .max(15, 'Must be 15 characters or less')
                              .required('First Name is Required'),
                lastName:  Yup.string()
                              .max(20, 'Must be 20 characters or less')
                              .required('Last Name is Required'),
                email:      Yup.string()
                              .email('Invalid email address')
                              .required('Email is Required'),
                terms:      Yup.boolean()
                              .oneOf([true], 'You must accept the terms and conditions'),
                jobType:    Yup.string()
                               .required('Job Type is Required')
                               .oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
                            //    .notOneOf(['other'], 'Invalid Job Type') - This will throw an error if the value is 'other'
            })}
        >
            {( formik ) => (
                    <Form noValidate>
                        <MyTextInput 
                            label="First Name" 
                            name="firstName"
                            placeholder="Name"
                        />
                        <MyTextInput 
                            label="Last Name" 
                            name="lastName"
                            placeholder="Last Name"
                        />
                        <MyTextInput 
                            label="Email" 
                            name="email"
                            placeholder="Email"
                            type="email"
                        />
                        <MySelect label="Job Type" name="jobType">
                            <option value="">Select a job type</option>
                            <option value="designer">Designer</option>
                            <option value="development">Developer</option>
                            <option value="product">Product Manager</option>
                            <option value="other">Other</option>
                        </MySelect>
                        <MyCheckbox 
                            name="terms"
                            label="Terms and Conditions"
                        />
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}