import { Link } from "react-router-dom";
import type { CategoryType } from "../types/CategoryType";

interface CategoryProps {
    category: CategoryType;
}

const Category = ({category}: CategoryProps) => {
    return (
        <Link to={`/products/${category.name}`}>
            <section>
                <img src={category.image} alt="Category" />
            </section>
            <section>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
            </section>
        </Link>
    )
}

export default Category;