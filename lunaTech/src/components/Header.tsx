import {Link} from 'react-router-dom'   
import styles from './Header.module.css'
import SearchBar from './SearchBar'

const Header = () => {

    return (
        <section>
        <div className = {styles.topbar}></div>
            <header className ={styles.header}>
                <h1>LunaTech</h1>
                <nav className ={styles.links}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                    </ul>
                </nav>

               <div className={styles.cart_search}>
                    <SearchBar />
                    <Link to="/cart"><img src="/cart.png" alt="Cart" className={styles.cartIcon} /></Link>
               </div>
            </header>
      </section>

    )
}

export default Header;