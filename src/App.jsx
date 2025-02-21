import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// pages
import { Layout, About, AddProduct, Shop, Login, Cart, Signin } from "./pages"
import Home from "./pages/Home"

function App() {

 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}

export default App
