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
                    <p>Price:{product.price} MDL</p>
                    <div>
                        <div>
                            <p>Color Available: </p>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                        <div>
                             <p>Availability:</p>
                             <p>{product.stock}</p>
                        </div>
                        <button>Add to Your Cart</button>
                    </div>
                </section>
            </article>
            <article>
                <h4>Details:</h4>
                <p>{product.description}</p>
            </article>
        </Layout>
    )
}

export default ProductPage;