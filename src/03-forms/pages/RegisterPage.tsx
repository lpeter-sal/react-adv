
import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';



export const RegisterPage = () => {

    const { 
            formData, isValidEmail, onChange, resetForm,
            name, email, password, repeatPassword
    } = useForm({
                name: '',
                email: '',
                password: '',
                repeatPassword: ''
            });

    const onSubmit = ( event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log( formData );
    }


  return (
    <div>
        <h1>Register Page</h1>


        <form noValidate onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Name"
                value={ name} 
                name='name'
                onChange={ onChange }
                className={ `${ name.trim().length <= 0 && 'has-error'}` }
            />
            { name.trim().length <= 0 && <span>This field is neccessary</span> }


            <input 
                type="email" 
                placeholder="Email"
                value={email}
                name='email'
                onChange={ onChange }
                className={ `${ !isValidEmail(email) && 'has-error'}` }
            />
            { !isValidEmail(email) && <span>This email is not valid</span> }



            <input 
                type="password" 
                placeholder="Password"
                value={password}
                name='password'
                onChange={ onChange}

            />
            { password.trim().length <= 0 && <span>This field is neccessary</span> }
            { password.trim().length < 6 && password.trim().length > 0 && <span>Password should be 6 characters</span> }


            <input 
                type="password" 
                placeholder="Repeat Password"
                value={repeatPassword}
                name='repeatPassword'
                onChange={ onChange }

            />

            { repeatPassword.trim().length <= 0 && <span>This field is neccessary</span> }
            { repeatPassword.trim().length > 0 && password !== repeatPassword && <span>Passwords should be equal</span> }



            <button type="submit">Create</button>

            <button type='button' onClick={ resetForm }> Reset </button>
        </form>


    </div>
  )
}
