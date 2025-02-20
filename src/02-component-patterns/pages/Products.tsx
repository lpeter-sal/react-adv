import { ProductImage, ProductTitle, ProductCard, ProductButtons } from '../components';
import { useProductCart } from '../hooks/useProductCart';
import { products } from '../data/products';

import '../styles/custom-styles.css';




export const Products = () => {

  const { productCart, onProductCountChange } = useProductCart();

  return (
    <div>
        <h1> Products </h1>
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>

            {
              products.map( product => (
                  <ProductCard 
                      key={ product.id }
                      product={ product }
                      className="bg-dark text-white"
                      onChange={ onProductCountChange }
                      value={ productCart[product.id]?.count || 0 }
                  >
                      <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                      <ProductTitle className="text-bold" />
                      <ProductButtons className="custom-buttons" />
                  </ProductCard>
              ))
            }
        </div>


        <div className='product-cart'>
            {
                Object.entries( productCart ).map( ([ key, product ]) => (
                    <ProductCard 
                        key={ key }
                        product={ product }
                        className="bg-dark text-white"
                        style={{ width: '100px' }}
                        onChange={ onProductCountChange }
                        value={ product.count }
                    >
                        <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                        <ProductButtons 
                            className="custom-buttons"
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        />
                    </ProductCard>
                ))
            }
        </div>
    </div>
  )
}
