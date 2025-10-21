import Layout from "../layouts/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { databases } from "../db/appwritedb";
import { useNavigate } from "react-router-dom";


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
            <button  onClick={() => navigate(-1)}>
                <img src="/backarrow.png" alt="Back" />
            </button>
            <article>
                <div><img src={product.image} alt="Product Image" /></div>
                <section>
                    <h2>{product.name}</h2>
                    <p>Preț:{product.price} MDL</p>
                    <p>{product.description}</p>
                    <div>
                        <button></button>
                        <button></button>
                    </div>
                    
                </section>
            </article>
            <article>

            </article>
        </Layout>
    )
}

export default ProductPage;