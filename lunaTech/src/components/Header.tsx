import NavBar from './NavBar.tsx'
import styles from './Header.module.css'

const Header = () => {

    return (
        
        <header className= {styles.header}>
            <div className={styles.topBar}>
            <p>Welcome to Luna Tech!</p>
        </div>
            <h1>Luna Tech</h1>
            <NavBar />
            <a href="#"><img src="/search.png" alt="Search" /></a>
            {/* <router-link to="/cart"> */}
                <a href="#"><img src="/cart.png" alt="Cart" /></a>
            {/* </router-link> */}
            <br/>
        </header>
    )
}

export default Header;