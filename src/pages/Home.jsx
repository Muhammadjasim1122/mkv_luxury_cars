import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import SearchBar from '../components/SearchBar'
import SuperCarsGrid from '../components/SuperCarsGrid'
import PopularBrands from '../components/PopularBrands'
import RecentBlogs from '../components/RecentBlogs'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SearchBar />
      <SuperCarsGrid />
      <PopularBrands />
      <RecentBlogs />
      <FAQ />
      <Footer />
    </>
  )
}

