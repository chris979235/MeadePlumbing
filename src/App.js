import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'
export default function App() {
  return (
    <div className='mainapp'>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
