import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../assets/react.svg";
import { routes } from './routes';
import { Suspense } from "react";


export default function Navigation() {
  return (
    <Suspense fallback={ <div>Loading...</div> }>
        <BrowserRouter future={{ v7_relativeSplatPath: false, v7_startTransition: false }}>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />

                    <ul>
                        {/* TODO: create dinamic elements about routes */}
                    {
                        routes.map( ({ to, name }) => (
                            <li key={ to }>
                                <NavLink to={ to } className={ ({isActive}) => isActive ? 'nav-active' : ''} >
                                    { name }
                                </NavLink>
                            </li>
                        ))
                    }
                    </ul>
                </nav>


                <Routes>
                    {
                        routes.map(  ({ path, Component}) => (
                            <Route 
                                key={ path }
                                path={ path } 
                                element={ <Component /> } />
                        ))
                    }
                    <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    </Suspense>
    

  )
}
