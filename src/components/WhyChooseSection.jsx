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
        threshold: 0.3, // Trigger when 30% of the section is visible
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

  return (
    <section ref={sectionRef} id="about-us" className="relative bg-white overflow-hidden">
      <div className="grid lg:grid-cols-[40%_60%] min-h-[400px]">
        {/* Left side - Image window that clips to section bounds */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: 'url(/DALL·E-well-groomed-dog-inside-a-van.webp)',
                backgroundAttachment: 'fixed',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center'
              }}
            ></div>
          </div>
        </div>

        {/* Right side - Content with dark background */}
        <div className="relative bg-[#031E38] text-white flex items-center">
          {/* Content */}
          <div className={`relative z-10 p-8 lg:p-12 ${isVisible ? 'animate-slide-from-right' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Why Choose Us?
            </h2>
            <p className="text-lg leading-relaxed text-gray-200">
              Our mobile grooming service brings the spa directly to your doorstep, eliminating the stress of transporting your furry friend. 
              Enjoy personalized attention from our experienced groomers, who will tailor their services to your pet's unique needs. 
              Whether you prefer the comfort of your home or the privacy of our mobile grooming van, we offer flexible scheduling options 
              to accommodate your busy lifestyle. Our commitment to quality and care ensures a safe and enjoyable experience for both you and your pet. 
              Let us pamper your furry friend with the highest level of service, right at your convenience.
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-from-right {
          animation: slideFromRight 0.8s ease-out forwards;
          transform: translateX(50px);
        }
      `}</style>
    </section>
  )
}
