import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PropertyDetails from './components/PropertyDetails'
import PhotoGallery from './components/PhotoGallery'
import Features from './components/Features'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <Hero />
      <PropertyDetails />
      <PhotoGallery />
      <Features />
      <Location />
      <Contact />
      <Footer />
    </div>
  )
}

export default App