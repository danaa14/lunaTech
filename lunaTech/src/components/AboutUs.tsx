import styles from "./aboutUs.module.css"
const AboutUs = () => {

    return(
         <article className={styles.aboutUs}>
            <h1>About Us</h1>
            <p>Luna Tech is more than a tech company — it's a laboratory of innovation.
We create products that fuse performance with intelligent design, turning everyday moments into smarter, faster, and more connected experiences.
From ultra-thin laptops to smart accessories, every Luna Tech device is built around one mission: technology should work for you, not the other way around.
We believe in precision, efficiency, and constant evolution. Here, every detail matters, every pixel has a purpose, and every idea becomes reality.</p>
      <section className={styles.team}>
  <div className={styles.grid}>
    <div className={styles.card}>
      <div className={styles.frame}>
        <img className={styles.photo} src="/persona1.png" alt="Founder – Persona 1" />
      </div>
      <ul className={styles.roles}>
        <li>Founder of LunaTech</li>
        <li>Web Developer</li>
        <li>Multi-Platform Engineer</li>
      </ul>
    </div>
    <div className={styles.card}>
      <div className={styles.frame}>
        <img className={styles.photo} src="/persona2.png" alt="Founder – Persona 2" />
      </div>
      <ul className={styles.roles}>
        <li>Founder of LunaTech</li>
        <li>Software Developer</li>
        <li>Hardware Technician</li>
      </ul>
    </div>
  </div>
</section>
        </article>
    )
}

export default AboutUs;