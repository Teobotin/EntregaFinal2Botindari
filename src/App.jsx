import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Categories from './components/categories/Categories'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductList from './components/products/ProductList'
import ProductDetail from './components/products/ProductDetail'
import CategoriesProductList from './components/categories/CategoriesProductList'
import "./style.css"
import Principal from './components/Principal/principal'
import CartProvider from './components/context/Cartcontext'
import Cart from './components/Cart/Cart'


function App() {
  return (
    <>
    <CartProvider>
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Principal/>}/>
        <Route exact path='/categories' element={<Categories/>}/>
        <Route exact path='/products' element={<ProductList/>}/>
        <Route exact path='/category/:categoryId' element={<CategoriesProductList/>}/>
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
    </CartProvider>
    </>
  )
}

export default App
