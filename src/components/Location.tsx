import React from 'react'
import { MapPin, Clock, Car, ShoppingBag, GraduationCap, Hospital, Coffee } from 'lucide-react'

const Location = () => {
  const nearbyPlaces = [
    {
      icon: ShoppingBag,
      name: 'Redding Mall',
      distance: '3.2 miles',
      time: '8 min drive'
    },
    {
      icon: GraduationCap,
      name: 'Shasta College',
      distance: '4.1 miles',
      time: '10 min drive'
    },
    {
      icon: Hospital,
      name: 'Mercy Medical Center',
      distance: '2.8 miles',
      time: '7 min drive'
    },
    {
      icon: Coffee,
      name: 'Downtown Redding',
      distance: '3.5 miles',
      time: '9 min drive'
    },
    {
      icon: Car,
      name: 'I-5 Freeway Access',
      distance: '2.1 miles',
      time: '5 min drive'
    },
    {
      icon: MapPin,
      name: 'Turtle Bay Park',
      distance: '4.2 miles',
      time: '11 min drive'
    }
  ]

  const highlights = [
    'Quiet residential neighborhood',
    'Easy access to major highways',
    'Close to shopping and dining',
    'Near excellent schools',
    'Walking distance to parks',
    'Safe, family-friendly area'
  ]

  return (
    <section id="location" className="py-20 bg-neutral-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Perfect Location
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Conveniently located in Redding with easy access to everything you need
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="animate-scale-in">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold text-neutral-800 mb-2">
                  2122 Grape Avenue
                </h3>
                <p className="text-neutral-600 mb-4">Redding, CA 96001</p>
                <a 
                  href="https://maps.google.com/?q=2122+Grape+Avenue+Redding+CA+96001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="font-display text-2xl font-semibold text-neutral-800 mb-6">
                Nearby Amenities
              </h3>
              <div className="space-y-4">
                {nearbyPlaces.map((place, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <place.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-800">{place.name}</div>
                      <div className="text-sm text-neutral-500">{place.distance} • {place.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold text-neutral-800 mb-6">
                Neighborhood Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-neutral-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location