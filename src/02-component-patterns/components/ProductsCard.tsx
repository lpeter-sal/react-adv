import { createContext, ReactElement } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
     product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
}

export const ProductCard = ({ children, product, className }: Props) => {

    const { counter, increaseBy } = useProducts();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>

        <div className={ `${styles.productCard} ${className}` }>
            
            { children }

        </div>

    </Provider>
  )
}
