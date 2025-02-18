import { ProductCard as ProductCardHOC} from "./ProductsCard"

import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import { ProductButtons } from "../components/ProductButtons";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductButtons } from "../components/ProductButtons"
export { ProductImage } from "../components/ProductImage"
export { ProductTitle } from "../components/ProductTitle"
// export { ProductCard } from "../components/ProductsCard"

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC , {
    Image: ProductImage,
    Title: ProductTitle,
    Buttons: ProductButtons
})

export default ProductCard;