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

            <h1>Your Cart</h1>

            <section>
                <article>
                </article>
                <h2>Total: {}</h2>
            </section>

            <section>
                
            </section>
        </Layout>
    )
}

export default Cart;