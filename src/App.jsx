import React from 'react'
import Navbar from './componenet/navbar.jsx'
import Product from './componenet/product.jsx'
import Login from "./componenet/login.jsx"
import Home from './componenet/home.jsx'
import Cart from './componenet/cart.jsx'
import Register from './componenet/register.jsx'
import Wishlist from './componenet/wish.jsx'
import Showproduct from './componenet/showproduct.jsx'
import Filterdata from './componenet/filterdata.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="/product/:id" element={<Showproduct />} />
          <Route path="login" element={<Login/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="register" element={<Register/>} />
          <Route path="wishlist" Component={Wishlist} />
          <Route path="data" Component={Filterdata} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
