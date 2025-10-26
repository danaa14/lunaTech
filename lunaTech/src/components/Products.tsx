import Product from "./Product";
import { useEffect, useState } from "react";
import { getCollections } from "../db/appwritedb";
import type { ProductType } from "../types/ProductType";
import styles from "./Products.module.css"
import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";

const Products = () => {
    const { category } = useParams();
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function fetchProducts() {
      const data = await getCollections();
      const filtered = data.products.filter(
        (p: ProductType) => p.category === category
      );
      setProducts(filtered);
      setLoading(false);
    }

    fetchProducts();
    }, [category]);

    return( 
    <Layout>
        <button  onClick={() => navigate(-1)} className={styles.backbutton}>
                <img src="/backarrow.png" alt="Back" />
            </button>
       
            {loading ? (
                <p>Loading...</p>
            ) : products.length > 0 ? (
            <section className={styles.container}>
            <div className={styles.grid}>
                {products.map((p) => (
                <Product key={p.$id} product={p} />
                ))}
            </div>
            </section>
            ) : (
                <p>No products available.</p>
            )}
        </Layout>
    )
}
export default Products;