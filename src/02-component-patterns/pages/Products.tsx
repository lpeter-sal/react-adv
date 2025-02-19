import { useState } from 'react';
import { ProductImage, ProductTitle, ProductCard, ProductButtons } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product1 = {
  id: 1,
  title: 'Coffe Mug - Card',
  img: '../public/coffee-mug.png'
}

const product2 = {
  id: 2,
  title: 'Coffe Mug - Meme',
  img: '../public/coffee-mug2.png'
}

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number
}


export const Products = () => {

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
                  product={ product }
                  className="bg-dark text-white"
                  key={ product.id }
                  onChange={ onProductCountChange }

                >
                <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
                <ProductTitle className=" text-bold"/>
                <ProductButtons className="custom-buttons"/>
              </ProductCard>
            ))
          }
        

        </div>


        <div className='product-cart'>

          {
            Object.entries(productCart).map( ([key, product]) => (
              <ProductCard 
                  key={ key }
                  product={ product }
                  className="bg-dark text-white"
                  style={{ width: '100px', margin: '10px'}}
                  value = { product.count }

                >
                  <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
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
