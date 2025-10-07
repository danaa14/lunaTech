import styles from './NavBar.module.css'
const NavBar = () => {

    return (
        <nav>
            <ul className={styles.navbar}>
                <li><a href="">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </nav>
    )

}

export default NavBar;