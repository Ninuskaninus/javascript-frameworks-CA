import React from 'react';
import './App.css';
import Layout from './components/layout/index.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/index.jsx';
import ProductPage from './pages/productPage/index.jsx';
import ContactPage from './pages/contactPage/index.jsx';
import CheckoutSuccessPage from './pages/checkoutSuccessPage/index.jsx';
import Cart from './pages/cart/index.jsx';
import Checkout from './pages/checkout/index.jsx';


function App() {

  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkoutSuccess" element={<CheckoutSuccessPage />} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
    
    
  )
}

export default App;