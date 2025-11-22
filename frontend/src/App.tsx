import './App.css'
import Banner from './components/Banner'
import Card from './components/Card'
import FilterSection from './components/FIlterSection'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'

function App() {

  return (
    <div className='font-["Montserrat"] w-full '>
      <Navbar/>
      <div className='flex justify-center mt-5 '>
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
