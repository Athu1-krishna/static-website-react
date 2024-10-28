import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardSection1 from './components/CardSection1'
import CardSection2 from './components/CardSection2'
import Section3 from './components/Section3'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CardSection2 />
      <CardSection1/>
      <Section3/>
      <Footer/>
    </div>
  )
}

export default App