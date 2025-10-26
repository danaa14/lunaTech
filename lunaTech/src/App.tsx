import Cart from "./pages/Cart.tsx";
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import AboutUsPage from "./pages/AboutUsPage.tsx";
import Products from "./components/Products.tsx";

function App() {
  
  return (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:category" element={<Products />}/>
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path='/cart' element={<Cart />}/>
            <Route path="/productpage/:id" element={<ProductPage />}/>
          </Routes>
  )
}

export default App
