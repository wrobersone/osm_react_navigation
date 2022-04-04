import React from 'react'
import { Home, About, Contact, Products, Services } from './pages/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'

const App = () => {
  return (
    <Router>
        <Navigation />
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<Products />} />
            <Route path='/services' element={<Services />} />

        </Routes>
    </Router>
  )
}

export default App