import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import styles from "./cart.module.css"

const Cart = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <button  onClick={() => navigate(-1)} className={styles.backbutton}>
                <img src="/backarrow.png" alt="Back" />
            </button>

            <h1 className={styles.title}>Your Cart</h1>

            <section>
                <article>

                    <img src="" alt="ProductImage" />
                    <p>{}</p>
                    <p>Price: {}€</p>
                </article>
                <h2>Total: {}</h2>
            </section>

            <section>
                
            </section>
        </Layout>
    )
}

export default Cart;