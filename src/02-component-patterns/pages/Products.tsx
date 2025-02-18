import { ProductImage, ProductTitle, ProductCard, ProductButtons } from '../components';


const product = {
  id: 1,
  title: 'Coffe Mug',
  img: '../public/coffee-mug.png'
}


export const Products = () => {
  return (
    <div>
        <h1> Products </h1>
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>

        <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle title={ 'Hola Mundo' } />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>


        </div>

    </div>
  )
}
