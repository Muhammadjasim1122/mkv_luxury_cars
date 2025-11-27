import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CurrencyProvider } from './contexts/CurrencyContext'
import Home from './pages/Home'
import OurFleet from './components/OurFleet'
import Brands from './components/Brands'
import BrandCars from './components/BrandCars'
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
    <CurrencyProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-fleet" element={<OurFleet />} />
          <Route path="/our-fleet/:carName" element={<CarDetails />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/:brandName" element={<BrandCars />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </CurrencyProvider>
  )
}

export default App
