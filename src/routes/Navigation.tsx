import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { DynamicForm, FormikAbstractation, FormikBasicPage, FormikComponents, FormikYupPage,RegisterFormikPage,RegisterPage } from "../03-forms/pages";


import logo from "../assets/react.svg";

export default function Navigation() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true}} >
        <div className="main-layout">
            <nav>
                <img src={ logo } alt="React Logo" />

                <ul>
                <li>
                    <NavLink to="/register" className={ ({isActive}) => isActive ? 'nav-active' : ''} >Register Page</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-basic" className={ ({isActive}) => isActive ? 'nav-active' : ''} >Formik Basic</NavLink>
                </li>
                <li>
                    <NavLink to="/formik-yup" className={ ({isActive}) => isActive ? 'nav-active' : ''} >Formik Yup</NavLink>    
                </li>
                <li>
                    <NavLink to="/formik-components" className={ ({isActive}) => isActive ? 'nav-active' : ''} >Formik Componentes</NavLink>    
                </li>
                <li>
                    <NavLink to="/formik-abstractation" className={ ({isActive}) => isActive ? 'nav-active' : ''} >Formik Abstractation</NavLink>    
                </li>
                <li>
                    <NavLink to="/formik-register" className={ ({isActive}) => isActive ? 'nav-active' : ''} > Register Formik</NavLink>    
                </li>
                <li>
                    <NavLink to="/dynamic-form" className={ ({isActive}) => isActive ? 'nav-active' : ''} > Dynimac Form </NavLink>    
                </li>
                </ul>
            </nav>


            <Routes>
                <Route path="formik-abstractation" element={ <FormikAbstractation /> } />
                <Route path="formik-basic" element={ <FormikBasicPage /> } />
                <Route path="formik-components" element={ <FormikComponents /> } />
                <Route path="formik-register" element={ <RegisterFormikPage /> } />
                <Route path="formik-yup" element={ <FormikYupPage /> } />
                <Route path="register" element={ <RegisterPage />} />
                <Route path="dynamic-form" element={ <DynamicForm />} />
            
                <Route path="/*" element={ <Navigate to='/register' replace /> } />
            </Routes>

        </div>
    </BrowserRouter>
  )
}
