import Layout from "../layouts/Layout";
import Products from "../components/Products.tsx";
import AboutUs from "../components/AboutUs.tsx";

const Home = () => {
    return (
        <Layout>
            <section>
                 <h1>Our products extend the limits of technology</h1>
                <h2>Shop for equality and quantity at reasoanble prices</h2>
                <button>Shop now</button>
            </section>
            <img src="/image 1.png" alt="Image" />

            <h3>Popular Products</h3>
            <Products />
            <button>See more</button>
            <AboutUs />
        </Layout>
    )
}

export default Home;