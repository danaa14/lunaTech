import Layout from "../layouts/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { databases } from "../db/appwritedb";
import styles from "./productpage.module.css";
import type { ProductType } from "../types/ProductType";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      if (!id) return;
      const res = await databases.getDocument("68e6a9cc000999e421ca", "products", id);
      setProduct(res as ProductType);
    }
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    const existingCart: ProductType[] = JSON.parse(localStorage.getItem("cart") || "[]");

    existingCart.push(product);

    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert("✅ Product added to your cart!");
  };

  if (!product) return <p>Loading...</p>;

  return (
    <Layout>
      <button onClick={() => navigate(-1)} className={styles.backbutton}>
        <img src="/backarrow.png" alt="Back" />
      </button>

      <article className={styles.container}>
        <div className={styles.img}>
          <img src={product.image} alt="Product Image" />
        </div>

        <section className={styles.infocard}>
          <h2>{product.name}</h2>
          <p>Price: {product.price} €</p>

          <div className={styles.card}>
            <div>
              <p>Availability: {product.stock}</p>
              <p className={styles.delivery}>
                <img src="../delivery.png" alt="Delivery" className={styles.deliveryIcon} />
                Delivery: In 10–20 working days
              </p>
            </div>

            <button onClick={handleAddToCart} className={styles.addButton}>
              Add to Your Cart
            </button>
          </div>
        </section>
      </article>

      <article className={styles.detail}>
        <h4>Details:</h4>
        <p>{product.description}</p>
      </article>
    </Layout>
  );
};

export default ProductPage;
