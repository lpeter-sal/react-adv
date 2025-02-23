import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any; // ** This is a catch-all for any other props that might be passed in

}


export const MyTextInput = ( { label, ...props }: Props) => {

    const [ field ] = useField(props);


  return (
    <>
        <label htmlFor={ props.id || props.name }> { label } </label>
        <input className="text-input" { ...field } { ...props }/>
        <ErrorMessage name={ props.name } component="span"/>
        {/* { 
            meta.touched && meta.error && (
            <span className="error"> { meta.error } </span> )
        } */}
    
    </>
  )
}
