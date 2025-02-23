import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any; // ** This is a catch-all for any other props that might be passed in

}


export const MySelect = ( { label, ...props }: Props) => {

    const [ field ] = useField(props);


  return (
    <>
        <label htmlFor={ props.id || props.name }> { label } </label>
        <select { ...field } { ...props }/>
        <ErrorMessage name={ props.name } component="span"/>

        {/* { 
            meta.touched && meta.error && (
            <span className="error"> { meta.error } </span> )
        } */}
    
    </>
  )
}
