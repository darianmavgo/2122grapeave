import React, { useState, useEffect } from 'react'
import { Phone, Mail, Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GA</span>
            </div>
            <span className="font-display font-semibold text-xl text-neutral-800">
              Grape Ave Rental
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('details')}
              className="text-neutral-600 hover:text-primary-600 transition-colors font-medium"
            >
              Details
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-neutral-600 hover:text-primary-600 transition-colors font-medium"
            >
              Photos
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-neutral-600 hover:text-primary-600 transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-neutral-600 hover:text-primary-600 transition-colors font-medium"
            >
              Location
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-primary-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('details')}
                className="text-left text-neutral-600 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Details
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-neutral-600 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Photos
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-neutral-600 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-left text-neutral-600 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Location
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full mt-4"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header