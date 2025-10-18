import { Link } from "react-router-dom";
import type { ProductType } from "../types/ProductType";
import styles from "./Product.module.css"

interface ProductProps {
    product: ProductType;
}

const Product = ({product}: ProductProps) => {

    return (
        <div className={styles.container}>
            <div className={styles.img}>
            <Link to={`/productpage/${product.$id}`}><img src={product.image} alt="Product Image" /></Link>
            <h4>{ product.name }</h4>
            </div>
        </div>
    )
}

export default Product;