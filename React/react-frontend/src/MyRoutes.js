import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Contact from './Pages/Contact'
import About from './Pages/About'
import LayoutMain from './Layouts/LayoutMain'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import RegistrationForm from './Pages/RegistrationForm'


export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LayoutMain/>}>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/product-details/:productId' element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
