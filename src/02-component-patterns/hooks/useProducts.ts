import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValue?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValue}: useProductArgs) => {

    const [counter, setCounter] = useState<number>( initialValue?.count || value );
    
    const isMounted = useRef(false);

    const increaseBy = ( value: number ) => {

        let newValue: number = Math.max( counter + value, 0 )
        
        if( initialValue?.maxCount ){
            newValue = Math.min( newValue, initialValue.maxCount );
        }

        setCounter( newValue );
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValue?.count || 0);
    }

    useEffect(() => {
        if ( ! isMounted.current) return ;

        setCounter( value );
    }, [ value ])

    useEffect(() => {
        isMounted.current = true;
    }, [])


    return {
        counter,
        isMaxCountReached: !!initialValue?.maxCount && counter === initialValue?.maxCount,
        maxCount: initialValue?.maxCount,
        
        increaseBy,
        reset,
    }
}