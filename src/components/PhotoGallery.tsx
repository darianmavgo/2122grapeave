import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react'

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: "grape ave_files/10f85deb613210474e254075338c3b80-cc_ft_960.jpg",
      alt: "Beautiful home exterior",
      category: "Exterior"
    },
    {
      src: "grape ave_files/3120907c42ea49a2fbe98522a16ba848-cc_ft_960.jpg",
      alt: "Spacious living room",
      category: "Interior"
    },
    {
      src: "grape ave_files/bad489db1ae0ef74ae98eab77b60baba-cc_ft_960.jpg",
      alt: "Modern kitchen",
      category: "Kitchen"
    },
    {
      src: "grape ave_files/fd267ba29440dfdcaaa49f7ca3ed8b2a-cc_ft_960.jpg",
      alt: "Comfortable bedroom",
      category: "Bedroom"
    },
    {
      src: "grape ave_files/0c318743b8628727a220f187af434ad8-cc_ft_576.jpg",
      alt: "Updated bathroom",
      category: "Bathroom"
    },
    {
      src: "grape ave_files/624205ba202fc724e44ceed2a92e1a7b-cc_ft_576.jpg",
      alt: "Outdoor space",
      category: "Outdoor"
    },
    {
      src: "grape ave_files/6cf14f42c34b3a480ed5abcc4f7fc690-cc_ft_576.jpg",
      alt: "Additional room",
      category: "Interior"
    },
    {
      src: "grape ave_files/8c0f098aa4683a5334254f6fdb937a59-cc_ft_576.jpg",
      alt: "Property view",
      category: "Exterior"
    }
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="gallery" className="py-20 bg-neutral-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Photo Gallery
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Take a virtual tour of your future home
          </p>
        </div>

        {/* Main Featured Image */}
        <div className="mb-8 animate-scale-in">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
               onClick={() => openLightbox(0)}>
            <img 
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-96 md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Maximize2 className="w-12 h-12 text-white" />
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 text-neutral-800 px-3 py-1 rounded-full text-sm font-medium">
                {images[0].category}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 animate-slide-up">
          {images.slice(1).map((image, index) => (
            <div 
              key={index + 1}
              className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer aspect-square"
              onClick={() => openLightbox(index + 1)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-2 left-2">
                <span className="bg-white/90 text-neutral-800 px-2 py-1 rounded text-xs font-medium">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              <img 
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PhotoGallery