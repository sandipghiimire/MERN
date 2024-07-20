import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import  Navbar  from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio'
import Resume from './Pages/Resume'

const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element =  {<Navbar/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/contact' element = {<Contact/>}/>
            <Route path='/portfolio' element = {<Portfolio/>}/>
            <Route path='/resume' element = {<Resume/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoutes