import NavBar from './NavBar.tsx'

const Header = () => {

    return (
        <header>
            <h1>Luna Tech</h1>
            <NavBar />
            <a href="#"><img src="/search.png" alt="Search" /></a>
            {/* <router-link to="/cart"> */}
                <a href="#"><img src="/cart.png" alt="Cart" /></a>
            {/* </router-link> */}
        </header>
    )
}

export default Header;