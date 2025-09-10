'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const features = [
    {
      icon: "🏠",
      title: "Convenience at Your Doorstep",
      description: "We come to you, eliminating travel stress for your pet",
      image: "/convenience-doorstep.jpeg"
    },
    {
      icon: "👨‍⚕️",
      title: "Professional Groomers",
      description: "Certified experts with years of experience",
      image: "/professionals-groom.png"
    },
    {
      icon: "❤️",
      title: "One-on-One Attention",
      description: "Personalized care focused solely on your pet",
      image: "/one-on-one-attention.webp"
    },
    {
      icon: "🐕",
      title: "All Breeds and Sizes",
      description: "From tiny Chihuahuas to gentle giants",
      image: "/all-breeds-sizes.webp"
    },
    {
      icon: "✨",
      title: "Premium Products",
      description: "High-quality, pet-safe grooming products",
      image: "/premium-products.jpg"
    }
  ]

  return (
    <section ref={sectionRef} id="about-us" className="relative bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-black px-4 py-2 rounded-full font-semibold mb-6" style={{backgroundColor: '#6699CC'}}>
            🏆 Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="ml-3" style={{color: '#6699CC'}}>Glide & Groom?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another grooming service. We're your trusted partner, 
            committed to your pet's comfort and happiness with proven expertise and unwavering dedication.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Professional Image Window */}
              <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="rounded-3xl p-8 md:p-12" style={{background: 'linear-gradient(to right, #6699CC, #5588BB)'}}>
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction Rate</div>
            </div>
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Pets Groomed</div>
            </div>
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">5⭐</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}