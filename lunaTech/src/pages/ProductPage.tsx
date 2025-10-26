import Layout from "../layouts/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { databases } from "../db/appwritedb";
import { useNavigate } from "react-router-dom";
import styles from "./productpage.module.css"


const ProductPage = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        async function fetchProduct() {
        if (!id) return;
        const res = await databases.getDocument("68e6a9cc000999e421ca", "products", id);
        setProduct(res);
        }
        fetchProduct();
    }, [id]);

    if (!product) return <p>Loading...</p>;
    
    return (
        <Layout>
            <button  onClick={() => navigate(-1)} className={styles.backbutton}>
                <img src="/backarrow.png" alt="Back" />
            </button>
            <article className={styles.container}>
                <div className={styles.img}>
                <img src={product.image} alt="Product Image" /></div>
                <section className={styles.infocard}>
                    <h2>{product.name}</h2>
                    <p>Price:{product.price} EURO</p>
                    <div className={styles.card}>
                        <div>
                             <p>Availability: {product.stock}</p>

                             <p className={styles.deivery}><img src="../delivery.png" alt="Delivery" className={styles.delivery}/> Delivery: In 10-20 working days</p>
                        </div>
                        <button >Add to Your Cart</button>
                    </div>
                </section>
            </article>
            <article className={styles.detail}>
                <h4>Details:</h4>
                <p>{product.description}</p>
            </article>
        </Layout>
    )
}

export default ProductPage;