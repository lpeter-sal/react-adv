import { ProductImage, ProductTitle, ProductCard, ProductButtons } from '../components';

import { products } from '../data/products';
import '../styles/custom-styles.css';


const product = products[0];


export const Products = () => {

  return (
    <div>
        <h1> Products </h1>
        <hr />

            <ProductCard 
                key={ product.id }
                product={ product }
                className="bg-dark text-white"
                initialValue = {{
                    count: 4,
                    maxCount: 15
                }}
            >
                    {
                        ( { reset, isMaxCountReached, increaseBy, count, maxCount } ) => (
                            <>
                                <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                                <ProductTitle className="text-bold" />
                                <ProductButtons className="custom-buttons" />

                                <button onClick={ reset }>Reset</button>
                                <button onClick={ () => increaseBy(-2) }> -2 </button>
                                {/* <button onClick={ () => increaseBy(+2) } style={{ display: `${ (count === maxCount) ? 'none' : ''}`}}>+2</button> */}
                                {
                                    ( !isMaxCountReached && <button onClick={ () => increaseBy(+2) }>+2</button> )
                                }

                                <span> { count } - { maxCount } </span>
                            </>
                        )
                    }
            </ProductCard>
    </div>
  )
}
