// Delivery.tsx
import styles from "./aboutUs.module.css";

type Region = { name: string; countries: string[] };

const regions: Region[] = [
  { name: "Europe", countries: ["France", "Germany", "Italy", "Spain", "Portugal"] },
  { name: "Asia", countries: ["Japan", "China", "South Korea", "India", "Thailand"] },
  { name: "North-America", countries: ["United States", "Canada", "Mexico", "Cuba", "Costa Rica"] },
  { name: "South-America", countries: ["Brazil", "Argentina", "Chile", "Colombia", "Peru"] },
];

const Delivery = () => {
  return (
    <section className={styles.delivery}>
      <h2 className={styles.title}>Where do we deliver?</h2>
      <div className={styles.grid2}>
        {regions.map((r) => (
          <div key={r.name} className={styles.region}>
            <h3 className={styles.regionTitle}>{r.name}</h3>
            <ul className={styles.countryList}>
              {r.countries.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Delivery;
