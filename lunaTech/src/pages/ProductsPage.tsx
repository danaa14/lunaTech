import Category from "../components/Category";
import Layout from "../layouts/Layout"
import { useState, useEffect } from "react";
import { getCollections } from "../db/appwritedb";
import type { CategoryType } from "../types/CategoryType";
import styles from "./productspage.module.css"
const ProductsPage = () => {
        const [categories, setCategory] = useState<CategoryType[]>([]);
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
        async function fetchProducts() {
          const data = await getCollections();
          setCategory(data.categories);
          setLoading(false);
        }
    
        fetchProducts();
        }, []);

    return (
        <Layout>
            <h1 className={styles.title}>Our Products</h1>
            {loading ? (
                <p className={styles.loading}>Loading...</p>
            ) : categories.length > 0 ? (
            <div className={styles.grid} >
                {categories.map((c) => (
                <Category key={c.$id} category={c} />
                ))}
            </div>
            ) : (
                <p>No products available.</p>
            )}
        </Layout>
    )
}

export default ProductsPage;