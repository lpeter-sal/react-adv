import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any; // ** This is a catch-all for any other props that might be passed in

}


export const MyCheckbox = ( { label, ...props }: Props) => {

    const [ field ] = useField({...props, type: 'checkbox'});


  return (
    <>
        <label> 
          <input type="checkbox" { ...field } { ...props } />
          { label } 
        
          </label>

          <ErrorMessage name={ props.name } component="span"/>
          

        {/* // ** meta is not defined in this component but you can use it like this: 
            // ? meta.touched && meta.error && (
            // ? <span className="error"> { meta.error } </span> )
        } */}
    
    </>
  )
}
