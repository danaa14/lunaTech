import Product from "../components/Product";
import { useEffect, useState } from "react";
import { getCollections } from "../db/appwritedb";
import type { ProductType } from "../types/ProductType";
import styles from "./Products.module.css"
import { useParams } from "react-router-dom";

const PopularProducts = () => {
    const { popular } = useParams();
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function fetchProducts() {
      const data = await getCollections();
      const filtered = data.products.filter(
        (p: ProductType) => p.popular === true
      );
      setProducts(filtered);
      setLoading(false);
    }

    fetchProducts();
    }, [popular]);

    return(
        <>
            {loading ? (
                <p>Loading...</p>
            ) : products.length > 0 ? (
            <div className={styles.grid}>
                {products.map((p) => (
                <Product key={p.$id} product={p} />
                ))}
            </div>
            ) : (
                <p>No products available.</p>
            )}
        </>
    )
}
export default PopularProducts;