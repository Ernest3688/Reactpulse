import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Room from './components/Room'

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/room' element={<Room/>}/>
      </Routes>
      <Footer/>
    </Router>
      
    
  )
}

export default App
