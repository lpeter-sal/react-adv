import { ChangeEvent, useState } from "react";


export const useForm = <T>( initialData: T ) => {



    const [formData, setFormData] = useState(initialData);
    
        const onChange = ( event: ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
    
            setFormData({
                ...formData,
                [name]: value
            });
        }

        const resetForm = () => {
            setFormData( { ...initialData } );
        }

        const isValidEmail = ( email: string ) => {
            const resp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return resp.test(email);
        }




    return {
        // Spread the initialData
        ...formData,


        // Properties
        formData,



        // Methods
        isValidEmail,
        onChange,
        resetForm,

    }
}