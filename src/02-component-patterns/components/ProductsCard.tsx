import { createContext } from 'react';
import { useProducts } from '../hooks/useProducts';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
     product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs) => void;
    value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    const { counter, increaseBy } = useProducts({ 
            onChange, 
            product,
            value
        });



  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>

        <div 
            className={ `${styles.productCard} ${className}` }
            style={ style }
            
        >
            
            { children }

        </div>

    </Provider>
  )
}
