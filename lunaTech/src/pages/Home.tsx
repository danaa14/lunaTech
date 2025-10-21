import Layout from "../layouts/Layout";
import Products from "../components/Products.tsx";
import AboutUs from "../components/AboutUs.tsx";
import styles from "./Home.module.css"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Layout>
            <section className={styles.home}>
              <div className={styles.section1}>
                  <div className={styles.text}>
                  <h1>Our products extend the limits of technology</h1>
                  <h2>Shop for equality and quantity at reasoanble prices</h2>
                  <button>Chat with Luna</button>
                  </div>
                  <img src="/image 1.png" alt="Image" />
              </div>


              <hr className={styles.line}/>

              <section className={styles.section2}>
                <h3>Popular Products</h3>
                <Products />

                <Link to="/products"><button>See more</button></Link>

              </section>
              <section className={styles.section3}>
                <AboutUs />
              </section>
            </section>
        </Layout>
    )
}

export default Home;