import './App.css'
import Banner from './components/Banner'
import Card from './components/Card'
import FilterSection from './components/FIlterSection'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'

function App() {

  return (
    <div className='relative font-["Montserrat"] w-full '>
      <div className='fixed z-10 top-0 left-0 right-0'>
      <Navbar/>
      </div>
      <div className='flex justify-center mt-20  '>
      <Banner/>
      </div>
      <div className='pl-25 pr-25'>
      <FilterSection/>
      <ProductGrid>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ProductGrid>
      </div>
    </div>
  )
}

export default App
