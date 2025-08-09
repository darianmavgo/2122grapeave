import React from 'react'
import { Phone, Mail, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GA</span>
              </div>
              <span className="font-display font-semibold text-xl">
                Grape Ave Rental
              </span>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              Your perfect home awaits on Grape Avenue. Experience comfortable living 
              in a beautifully renovated property in the heart of Redding.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a href="tel:+15551234567" className="text-neutral-300 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:info@grapeave.com" className="text-neutral-300 hover:text-white transition-colors">
                  info@grapeave.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-neutral-300">2122 Grape Ave, Redding, CA 96001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                View Photo Gallery
              </button>
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                Property Features
              </button>
              <button 
                onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                Location Details
              </button>
              <a 
                href="https://maps.google.com/?q=2122+Grape+Avenue+Redding+CA+96001"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for finding your perfect home</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer