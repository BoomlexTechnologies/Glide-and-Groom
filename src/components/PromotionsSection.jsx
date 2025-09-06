'use client'

import { useEffect, useRef, useState } from 'react'

export default function PromotionsSection() {
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const [card1Visible, setCard1Visible] = useState(false)
  const [card2Visible, setCard2Visible] = useState(false)

  useEffect(() => {
    const createObserver = (ref, setVisible) => {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setVisible(true)
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.25 }
      )
      if (ref.current) observer.observe(ref.current)
      return observer
    }

    const obs1 = createObserver(card1Ref, setCard1Visible)
    const obs2 = createObserver(card2Ref, setCard2Visible)

    return () => {
      if (card1Ref.current) obs1.unobserve(card1Ref.current)
      if (card2Ref.current) obs2.unobserve(card2Ref.current)
    }
  }, [])

  return (
    <section className="py-16 bg-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Referral Section */}
          <div ref={card1Ref} className={`relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 text-white overflow-hidden ${card1Visible ? 'animate-slide-up-card-1' : 'opacity-0 translate-y-10'}`}>
            {/* Wave decoration at top */}
            <div className="absolute top-0 left-0 right-0">
              <svg viewBox="0 0 400 60" className="w-full h-12 text-white opacity-30">
                <path d="M0,20 Q100,0 200,20 T400,20 L400,0 L0,0 Z" fill="currentColor"/>
                <path d="M0,35 Q100,15 200,35 T400,35 L400,0 L0,0 Z" fill="currentColor" opacity="0.7"/>
                <path d="M0,50 Q100,30 200,50 T400,50 L400,0 L0,0 Z" fill="currentColor" opacity="0.4"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Love Glide and Groom?
              </h2>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg">
                  Refer us to a friend and get <span className="font-bold">30% OFF</span> your next booking!
                </p>
                
                <p className="text-base">
                  All they need to do is book with your referral code:
                </p>
                <p className="font-bold text-lg">[GNGREFER]</p>
                
                <p className="text-base">Once they do, you save. Simple as that!</p>
                
                <p className="text-lg font-semibold">
                  Because great grooming is meant to be shared!
                </p>
              </div>
              
              <div className="bg-black bg-opacity-30 rounded-lg p-4 backdrop-blur-sm">
                <p className="font-bold text-lg">Referral Code: [GNGREFER]</p>
              </div>
            </div>
          </div>

          {/* Loyalty Section */}
          <div ref={card2Ref} className={`relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 text-white overflow-hidden ${card2Visible ? 'animate-slide-up-card-2' : 'opacity-0 translate-y-10'}`}>
            {/* Wave decoration at top */}
            <div className="absolute top-0 left-0 right-0">
              <svg viewBox="0 0 400 60" className="w-full h-12 text-white opacity-30">
                <path d="M0,20 Q100,0 200,20 T400,20 L400,0 L0,0 Z" fill="currentColor"/>
                <path d="M0,35 Q100,15 200,35 T400,35 L400,0 L0,0 Z" fill="currentColor" opacity="0.7"/>
                <path d="M0,50 Q100,30 200,50 T400,50 L400,0 L0,0 Z" fill="currentColor" opacity="0.4"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Loyalty Looks Good on Your Pet!
              </h2>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg">
                  Book with Glide and Groom 4 times, and your 5th groom is <span className="font-bold">FREE</span>—no strings, just tail wags.
                </p>
                
                <p className="text-base">
                  We'll track it for you, so just sit back and let the glow-ups keep coming!
                </p>
                
                <p className="text-lg font-semibold">
                  Because loyal pets (& their humans) deserve a reward
                </p>
              </div>
              
              <button className="bg-black bg-opacity-30 hover:bg-opacity-50 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 backdrop-blur-sm">
                Book Now
              </button>
            </div>
          </div>
          
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideUpCard {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up-card-1 {
          animation: slideUpCard 0.8s ease-out 0.2s forwards;
        }
        
        .animate-slide-up-card-2 {
          animation: slideUpCard 0.8s ease-out 0.4s forwards;
        }
      `}</style>
    </section>
  )
}
