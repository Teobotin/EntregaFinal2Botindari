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


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path='/'/>
        <Route exact path='/categories' element={<Categories/>}/>
        <Route exact path='/products' element={<ProductList/>}/>
        <Route exact path='/category/:categoryId' element={<CategoriesProductList/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
