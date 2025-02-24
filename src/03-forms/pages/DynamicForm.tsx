import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';


console.log(formJson)

const initialValues: {[key: string]: any} = {}
const requireFields: {[key: string]: any} = {}

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if( !input.validations ) continue;

  let schema = Yup.string()

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('This field is required');
    } 

    if( rule.type === 'minLength') {
      schema = schema.min( (rule as any ).value, `Min length is ${ (rule as any ).value } characters`)
    // ... add more rules here
    }

    if( rule.type === 'email') {
      schema = schema.email('Invalid email address')
    }
  }

  requireFields[input.name] = schema;
}

export const DynamicForm = () => {

  const validationSchema= Yup.object({ ...requireFields })


  return (
    <div>
        <h1> Dynamic Form </h1>

        <Formik
          initialValues={ initialValues }
          validationSchema={ validationSchema }
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {(formik) => (
              <Form noValidate>
                  { formJson.map( ({type, name, placeholder, label, options}) => {
                      
                      if ( type === 'input' || type === 'password' || type === 'email' ) {
                          return <MyTextInput 
                                    key={ name }
                                    type={(type as any )}
                                    id={ name }
                                    name={ name }
                                    placeholder={ placeholder }
                                    label={ label }
                                />
                      } else if ( type === 'select') {
                          return <MySelect 
                                    key={ name }
                                    id={ name }
                                    name={ name }
                                    label={ label }
                                  >
                                    <option value=''>Select an option</option>
                                    {
                                      options?.map( ({ id, label }) => (
                                        <option key={ id } value={ id }> { label } </option>
                                      ))
                                    }

                                  </MySelect>
                      }

                  } ) }


                  <button type='submit'>Submit</button>
              </Form>

            )           
          }
        </Formik>


    </div>
  )
}
