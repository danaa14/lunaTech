import {Link} from 'react-router-dom'   


const Header = () => {

    return (

            <header>
                <h1>Luna Tech</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </nav>
                <a href="#"><img src="/search.png" alt="Search" /></a>
                <a href="#"><img src="/cart.png" alt="Cart" /></a>
            </header>
    )
}

export default Header;