import React from 'react'
import { 
  Wifi, 
  Car, 
  Thermometer, 
  Droplets, 
  Zap, 
  Shield, 
  Trees, 
  Utensils,
  Sofa,
  Wrench,
  Sun,
  Wind
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Thermometer,
      title: 'Central Air & Heat',
      description: 'Climate controlled comfort year-round'
    },
    {
      icon: Car,
      title: '2-Car Garage',
      description: 'Secure parking with storage space'
    },
    {
      icon: Utensils,
      title: 'Modern Kitchen',
      description: 'Updated appliances and granite countertops'
    },
    {
      icon: Droplets,
      title: 'Updated Plumbing',
      description: 'Recently renovated bathrooms'
    },
    {
      icon: Zap,
      title: 'Updated Electrical',
      description: 'Modern wiring and outlets throughout'
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet Ready',
      description: 'Fiber optic internet available'
    },
    {
      icon: Trees,
      title: 'Landscaped Yard',
      description: 'Beautiful outdoor space with mature trees'
    },
    {
      icon: Shield,
      title: 'Safe Neighborhood',
      description: 'Quiet residential area'
    },
    {
      icon: Sofa,
      title: 'Spacious Living Areas',
      description: 'Open floor plan with plenty of natural light'
    },
    {
      icon: Wrench,
      title: 'Recently Renovated',
      description: 'Fresh paint, new flooring, updated fixtures'
    },
    {
      icon: Sun,
      title: 'Bright & Airy',
      description: 'Large windows throughout'
    },
    {
      icon: Wind,
      title: 'Great Ventilation',
      description: 'Cross-breeze and ceiling fans'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Why You'll Love Living Here
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            This home has been thoughtfully updated with modern amenities while maintaining its charm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card p-6 group hover:bg-primary-50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 group-hover:bg-primary-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-800 mb-2 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="font-display text-3xl font-bold mb-4">
              Ready to Make This Home Yours?
            </h3>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              Don't miss out on this exceptional rental opportunity. Contact us today to schedule a viewing.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 hover:bg-neutral-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Schedule Viewing Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features