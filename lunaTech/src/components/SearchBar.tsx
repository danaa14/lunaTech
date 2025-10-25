import { useState, useEffect } from "react";
import styles from './Header.module.css'
import type { ProductType } from "../types/ProductType";
import { getCollections } from "../db/appwritedb";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredItems, setFilteredItems] = useState<ProductType[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getCollections();
      setProducts(data.products || []);
      setFilteredItems(data.products || []);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [query, products]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>
        <img src="/search.png" alt="Search" className={styles.searchIcon} />
      </button>

      {query && (
        <div className={styles.searchResults}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <p key={item.$id}>{item.name}</p>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
