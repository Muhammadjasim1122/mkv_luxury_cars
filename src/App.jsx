import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import OurFleet from './components/OurFleet'
import Brands from './components/Brands'
import Category from './pages/Category'
import AboutUs from './components/AboutUs'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import ContactUs from './components/ContactUs'
import CarDetails from './components/CarDetails'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-fleet" element={<OurFleet />} />
        <Route path="/our-fleet/:carName" element={<CarDetails />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
