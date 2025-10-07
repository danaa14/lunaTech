
import Products from "./pages/Products.tsx";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import './App.css'
import {Route, Routes} from 'react-router-dom'

function App() {
  
  return (
          <Routes>
            <Route path="/" element={<h1>salut</h1>} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
  )
}

export default App
