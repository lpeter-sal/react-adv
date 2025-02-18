import { useContext } from "react";
import { ProductContext } from "./ProductsCard";

import styles from '../styles/styles.module.css';

export interface Props {
    className?: string; 
    title?: string;
}

export const ProductTitle = ({ title, className}: Props ) => {

    const { product } = useContext(ProductContext);

    return (
        <span className= { `${styles.ProductTitle} ${className}` }> 
            { title ? title : product.title } 
        </span>
    );
}