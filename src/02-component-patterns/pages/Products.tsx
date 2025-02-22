import { ProductImage, ProductTitle, ProductCard, ProductButtons } from '../components';

import { products } from '../data/products';


const product = products[0];


export const Products = () => {

  return (
    <div>
        <h1> Products </h1>
        <hr />

            <ProductCard 
                key={ product.id }
                product={ product }
                initialValue = {{
                    count: 4,
                    maxCount: 15
                }}
            >
                    {
                        ( { reset, isMaxCountReached, increaseBy, count, maxCount } ) => (
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButtons />

                            </>
                        )
                    }
            </ProductCard>
    </div>
  )
}
