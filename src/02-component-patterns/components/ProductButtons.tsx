import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductsCard";

import styles from '../styles/styles.module.css';
import { InitialValues } from "../interfaces/interfaces";
import { useProduct } from "../hooks/useProducts";

export interface Props {
    className?: string;
    style?: React.CSSProperties;
    initialValue?: InitialValues;
}

export const ProductButtons = ({ className, style }: Props) => {

    const {counter, increaseBy, maxCount } = useContext(ProductContext);  
    
    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount,
      [ counter, maxCount ]
    );

    return (
        <div 
            className={ `${styles.buttonsContainer} ${ className }`} 
            style={ style }
        >

            <button 
                className={ styles.buttonMinus}
                onClick={ () => increaseBy(-1)}> - </button>

            <div className={ styles.countLabel}> { counter } </div>

            <button 
                className={ `${styles.buttonAdd} ${ isMaxReached() && styles.disable}` }
                onClick={ () => increaseBy(+1)}> + </button>
        </div>
    );
}