
import Products from "./pages/Products.tsx";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home.tsx";

function App() {
  
  return (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
  )
}

export default App
