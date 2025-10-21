import { Link } from "react-router-dom";
import type { ProductType } from "../types/ProductType";

interface ProductProps {
    product: ProductType;
}

const Product = ({product}: ProductProps) => {

    return (
        <div>
            <Link to={`/productpage/${product.$id}`}>
                <img src={product.image} alt="Product Image" />
                <h3>{ product.name }</h3>
            </Link>
        </div>
    )
}

export default Product;