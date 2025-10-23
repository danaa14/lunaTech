import { Link } from "react-router-dom";
import type { CategoryType } from "../types/CategoryType";
import styles from "./categories.module.css"
interface CategoryProps {
    category: CategoryType;
}

const Category = ({category}: CategoryProps) => {
    return (
        <Link to={`/products/${category.name}`} className={styles.card}>
            <section className={styles.img}>
                <img src={category.image} alt="Category" />
            </section>
            <section className={styles.info}>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
            </section>
        </Link>
    )
}

export default Category;