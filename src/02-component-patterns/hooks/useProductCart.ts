import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useProductCart = () => {
    
    const [ productCart, setProductCart ] = useState<{ [key:string]: ProductInCart  }>({});
    
    const onProductCountChange = ({ count, product }: { count:number, product: Product }) => {
    
        setProductCart( oldProductCart => {
    
          const productInCart: ProductInCart = oldProductCart[product.id] || { ...product, count: 0 };


          //Add product to cart
            if( Math.max( productInCart.count + count, 0 ) > 0 ) {
                return {
                    ...oldProductCart,
                    [product.id]: {
                        ...productInCart,
                        count: Math.max( productInCart.count + count, 0 )
                    }
                }
            }   
    
          //Delete product from cart   
          const { [product.id]: toDelete, ...rest  } = oldProductCart;
          return rest;
        })
    }

    return {
        productCart,


        onProductCountChange,
    }
}