import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => React.JSX.Element;


interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    HydrateFallback?: { message: string };
}


const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage" */'../01-lazyload/pages/LazyPage'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'));



export const routes: Route[] = [
    {
        to: '/lazy',
        path: 'lazy',
        Component:  Lazy1,
        name: 'Home',
        HydrateFallback: { message: 'Loading Home...' }
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Customers',
        HydrateFallback: { message: 'Loading Home...' }
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Orders',
        HydrateFallback: { message: 'Loading Home...' }
    },
    // {
    //     to: '/lazy',
    //     path: 'lazy',
    //     Component:  Lazy1,
    //     name: 'Products'
    // },
    // {
    //     to: '/lazy2',
    //     path: 'lazy2',
    //     Component: Lazy2,
    //     name: 'Inventory'
    // },
    // {
    //     to: '/lazy3',
    //     path: 'lazy3',
    //     Component: Lazy3,
    //     name: 'Users'
    // }
];