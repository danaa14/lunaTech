import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import styles from "./cart.module.css";
import { useEffect, useState } from "react";
import type { ProductType } from "../types/ProductType";

interface CartItem extends ProductType {
  quantity: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      const parsedItems: ProductType[] = JSON.parse(stored);
      const cartWithQuantities = parsedItems.map((item) => (
        {
          ...item,
          quantity: 1,
        }));
      setItems(cartWithQuantities);
      calculateTotal(cartWithQuantities);
    }
  }, []);

  const calculateTotal = (cartItems: CartItem[]) => {
    const totalValue = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalValue);
  };

  const updateQuantity = (index: number, change: number) => {
    const updatedItems = items.map((item, i) =>
      i === index
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    calculateTotal(updatedItems);
  };

  const deleteItemHandler = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    calculateTotal(updatedItems);
  };

  return (
    <Layout>
      <button onClick={() => navigate(-1)} className={styles.backbutton}>
        <img src="/backarrow.png" alt="Back" />
      </button>

      <h1 className={styles.title}>Your Cart</h1>

      <section className={styles.cartSection}>
        {items.length > 0 ? (
          <>
            {items.map((item, index) => (
              <article key={item.$id || index} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.productImage}
                />
                <div>
                  <p className={styles.productName}>{item.name}</p>
                  <p className={styles.productPrice}>
                    Price: {(item.price * item.quantity).toFixed(2)} €
                  </p>
                  <section className={styles.quantityControl}>
                    <button onClick={() => updateQuantity(index, -1)}>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => updateQuantity(index, 1)}>+</button>
                  </section>
                  <button
                    onClick={() => deleteItemHandler(index)}
                    className={styles.deleteButton}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}

            <h2 className={styles.total}>Total: {total.toFixed(2)} €</h2>
          </>
        ) : (
          <p className={styles.empty}>Your cart is empty.</p>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
