import { databases } from "../db/appwritedb.js";
import { useEffect } from "react";

const Product = () => {

    async function getCollections() {
        const docs = await databases.listDocuments('68e6a9cc000999e421ca', 'products');
        console.log(docs);
    }

    useEffect(() => {
        getCollections();
    }, []);

    return (
        <div>
            <img src="" alt="Image" />
            <p></p>
        </div>
    )
}

export default Product;