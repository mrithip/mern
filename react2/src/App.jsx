import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import Productdetails from "./pages/Productdetails" 
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Productdetails />} />
      </Routes>

    </>

  )
}

export default App