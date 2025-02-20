import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useProductCart = () => {
    
    const [ productCart, setProductCart ] = useState<{ [key:string]: ProductInCart}>({});
    
      const onProductCountChange = ( {count, product}: { count: number, product: Product} ) => {
    
        setProductCart( oldProductCart => {
          if (count === 0) {
            const { [product.id]: toDelete, ...rest } = oldProductCart;
            return rest;
          }
    
          return {
            ...oldProductCart,
            [product.id]: {
              ...product,
              count
            }
          }
        })
    }

    return {
        productCart,


        onProductCountChange,
    }
}