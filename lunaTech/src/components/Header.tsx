import NavBar from './NavBar.tsx'

const Header = () => {

    return (
        <header>
            <h1>Luna Tech</h1>
            <NavBar />
            <a href=""><img src="/search.png" alt="Search" /></a>
            <a href=""><img src="/cart.png" alt="Cart" /></a>
        </header>
    )
}

export default Header;