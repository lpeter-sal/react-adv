import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from "../assets/react.svg";
import { LazyPage, LazyPage2, LazyPage3} from "../01-lazyload/pages/index";

export default function Navigation() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true}} >
        <div className="main-layout">
            <nav>
                <img src={ logo } alt="React Logo" />

                <ul>
                <li>
                    <NavLink to="/lazy" className={ ({isActive}) => isActive ? 'nav-active' : ''} >Lazy Page</NavLink>
                </li>
                <li>
                    <NavLink to="/lazy2" className={ ({isActive}) => isActive ? 'nav-active' : ''} >Lazy Page 2 </NavLink>
                </li>
                <li>
                    <NavLink to="/lazy3" className={ ({isActive}) => isActive ? 'nav-active' : ''} >Lazy Page 3</NavLink>    
                </li>
                </ul>

            </nav>


            <Routes>
                <Route path="lazy" element={ <LazyPage />   } />
                <Route path="lazy2" element={ <LazyPage2 /> } />
                <Route path="lazy3" element={ <LazyPage3 /> } />
            
                <Route path="/*" element={ <Navigate to='/lazy' replace /> } />
            </Routes>

        </div>
    </BrowserRouter>
  )
}
