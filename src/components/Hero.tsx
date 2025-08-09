import React from 'react'
import { MapPin, Calendar, DollarSign } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="grape ave_files/10f85deb613210474e254075338c3b80-cc_ft_960.jpg"
          alt="Beautiful home exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 via-neutral-900/50 to-neutral-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="w-5 h-5 text-accent-400" />
            <span className="text-accent-400 font-medium">Redding, California</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Dream Home
            <span className="block text-accent-400">Awaits</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Beautifully renovated 3-bedroom home on peaceful Grape Avenue. 
            Modern comfort meets classic charm in this exceptional rental property.
          </p>

          {/* Key Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <DollarSign className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">$2,200</div>
              <div className="text-neutral-300 text-sm">per month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Calendar className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">Available</div>
              <div className="text-neutral-300 text-sm">Now</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">3 Bed</div>
              <div className="text-neutral-300 text-sm">2 Bath</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-4"
            >
              Schedule Viewing
            </button>
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Photos
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero