import React from 'react'
import { Home, Bed, Bath, Square, Car, Calendar, DollarSign, Shield } from 'lucide-react'

const PropertyDetails = () => {
  const details = [
    { icon: Bed, label: 'Bedrooms', value: '3' },
    { icon: Bath, label: 'Bathrooms', value: '1' },
    { icon: Square, label: 'Square Feet', value: '1,224' },
    { icon: Car, label: 'Parking', value: 'EV Charging' },
    { icon: Calendar, label: 'Built', value: '1937' },
    { icon: Home, label: 'Property Type', value: 'Single Family' },
  ]

  const rentAmount = import.meta.env.VITE_RENT_AMOUNT;

  const rentalInfo = [
    { icon: DollarSign, label: 'Monthly Rent', value: `${rentAmount}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'), highlight: true },
    { icon: Shield, label: 'Security Deposit', value: `${rentAmount}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') },
    { icon: Calendar, label: 'Lease Term', value: '12 months minimum' },
  ]

  return (
    <section id="details" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Property Details
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Everything you need to know about this exceptional rental property
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Property Image */}
          <div className="animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="grape ave_files/bad489db1ae0ef74ae98eab77b60baba-cc_ft_960.jpg"
                alt="Front of house"
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Recently Renovated
                </span>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="font-display text-2xl font-semibold text-neutral-800 mb-6">
                Property Features
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-neutral-50 rounded-lg">
                    <detail.icon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-neutral-500">{detail.label}</div>
                      <div className="font-semibold text-neutral-800">{detail.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold text-neutral-800 mb-6">
                Rental Information
              </h3>
              <div className="space-y-4">
                {rentalInfo.map((info, index) => (
                  <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${
                    info.highlight ? 'bg-primary-50 border-2 border-primary-200' : 'bg-neutral-50'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <info.icon className={`w-5 h-5 ${
                        info.highlight ? 'text-primary-600' : 'text-neutral-600'
                      }`} />
                      <span className="font-medium text-neutral-700">{info.label}</span>
                    </div>
                    <span className={`font-bold ${
                      info.highlight ? 'text-primary-600 text-xl' : 'text-neutral-800'
                    }`}>
                      {info.value}
                    </span>
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

export default PropertyDetails