import Product from "./Product";
import { useEffect, useState } from "react";
import { getCollections } from "../db/appwritedb";
import type { ProductType } from "../types/ProductType";

const Products = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function fetchProducts() {
      const data = await getCollections();
      setProducts(data.products);
      setLoading(false);
    }

    fetchProducts();
    }, []);

    return(
        <>
            {loading ? (
                <p>Loading...</p>
            ) : products.length > 0 ? (
            <div className="product-grid">
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
export default Products;