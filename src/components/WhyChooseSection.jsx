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
        threshold: 0.1,
        rootMargin: '50px'
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

  // Fallback for small screens - show content immediately if not visible after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [isVisible])

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
      image: "/one-on-one.webp"
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
    <section ref={sectionRef} id="about-us" className="relative bg-gradient-to-b from-slate-50 via-blue-50/30 to-white py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm tracking-wide shadow-lg">
              🏆 Why Choose Us
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Why Choose
            <span className="ml-4">Glide & Groom?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're not just another grooming service. We're your trusted partner, 
            committed to your pet's comfort and happiness with proven expertise and unwavering dedication.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Professional Image Window */}
                <div className="w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg">{feature.icon}</span>
          </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
        </div>

                <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden" style={{background: 'linear-gradient(135deg, #1e3a8a, #1e40af, #1d4ed8, #2563eb)'}}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="10" cy="10" r="2"/><circle cx="30" cy="15" r="1.5"/><circle cx="50" cy="8" r="2"/><circle cx="70" cy="12" r="1"/><circle cx="90" cy="5" r="1.5"/>
              <circle cx="20" cy="30" r="1"/><circle cx="40" cy="35" r="2"/><circle cx="60" cy="28" r="1.5"/><circle cx="80" cy="32" r="1"/><circle cx="15" cy="50" r="1.5"/>
              <circle cx="35" cy="55" r="1"/><circle cx="55" cy="48" r="2"/><circle cx="75" cy="52" r="1.5"/><circle cx="95" cy="45" r="1"/>
            </svg>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-12 text-white text-center">
            <div className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">98%</div>
              <div className="text-blue-100 text-lg font-medium">Client Satisfaction Rate</div>
            </div>
            <div className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">500+</div>
              <div className="text-blue-100 text-lg font-medium">Happy Pets Groomed</div>
            </div>
            <div className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">5⭐</div>
              <div className="text-blue-100 text-lg font-medium">Average Rating</div>
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
