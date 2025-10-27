import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import styles from "./cart.module.css";
import { useEffect, useState } from "react";
import type { ProductType } from "../types/ProductType";
import emailjs from "emailjs-com";

interface CartItem extends ProductType {
  quantity: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    address: "",
    cardName: "",
    validThrough: "",
    cardNumber: "",
    cvv: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      const parsedItems: ProductType[] = JSON.parse(stored);
      const cartWithQuantities = parsedItems.map((item) => ({
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      country: formData.country,
      address: formData.address,
      total: total.toFixed(2),
      items: items.map((item) => `${item.name} x${item.quantity}`).join(", "),
    };

    emailjs
      .send(
        "your_service_id", // replace
        "your_template_id", // replace
        templateParams,
        "your_public_key" // replace
      )
      .then(
        () => {
          alert("✅ Order sent successfully!");
          localStorage.removeItem("cart");
          setItems([]);
        },
        (error) => {
          console.error("❌ Failed to send order:", error);
          alert("There was an error sending your order. Please try again.");
        }
      );
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
                <img src={item.image} alt={item.name} className={styles.productImage} />
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

            <form onSubmit={handleSubmit} className={styles.checkoutSection}>
              <h2>Shipping details</h2>
              <hr />
              <input
                type="text"
                name="name"
                placeholder="Name & Surname"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Shipping address"
                value={formData.address}
                onChange={handleChange}
                required
              />

              <h2>Payment details</h2>
              <hr />
              <input
                type="text"
                name="cardName"
                placeholder="Name on Card"
                value={formData.cardName}
                onChange={handleChange}
              />
              <input
                type="date"
                name="validThrough"
                value={formData.validThrough}
                onChange={handleChange}
              />
              <input
                type="number"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
              />
              <input
                type="number"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
              />

              <h2 className={styles.total}>Total: {total.toFixed(2)} €</h2>

              <button type="submit" className={styles.submitButton}>
                Place Order
              </button>
            </form>
          </>
        ) : (
          <p className={styles.empty}>Your cart is empty.</p>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
