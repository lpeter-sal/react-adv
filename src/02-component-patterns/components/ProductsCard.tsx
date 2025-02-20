import { createContext, JSX } from 'react';
import { useProduct } from '../hooks/useProducts';
import { InitialValues, onChangeArgs, Product, ProductCartHandlers, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: React.ReactElement | React.ReactElement[]; | () => JSX.Element;
    children: ( args: ProductCartHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs) => void;
    value?: number;
    initialValue?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValue }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ 
            onChange, 
            product,
            value,
            initialValue
        });



  return (
    <Provider value={{
        counter,
        increaseBy,
        maxCount,
        product
    }}>

        <div 
            className={ `${styles.productCard} ${className}` }
            style={ style }
            
        >
            
            { children({
                count: counter,
                isMaxCountReached,
                maxCount: initialValue?.maxCount,
                product,

                increaseBy,
                reset,
            }) }

        </div>

    </Provider>
  )
}
