import { useContext } from "react";
import { ProductContext } from "./ProductsCard";

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props {
    className?: string;
    img?: string;
}

export const ProductImage = ({ img = '', className }: Props ) => {

    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if( img  ) {
        imgToShow = img;
    } else if( product.img ){
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return  (
        <img 
            className={ `${styles.productImg} ${className}` } 
            src={ imgToShow } 
            alt="Product" 
        />
    );
}