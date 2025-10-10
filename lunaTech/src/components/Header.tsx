import {Link} from 'react-router-dom'   

import styles from './Header.module.css'


const Header = () => {

    return (
        <section>
        <div className = {styles.topbar}></div>
            <header className ={styles.header}>
                <h1>Luna Tech</h1>
                <nav className ={styles.links}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </nav>

                <div className={styles.cart_search}>
                <a href="#" ><img src="/search.png" alt="Search" /></a>
                <a href="/cart" ><img src="/cart.png" alt="Cart" /></a></div>
            </header>
      </section>

    )
}

export default Header;