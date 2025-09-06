'use client'

import { motion } from 'framer-motion'

export default function PromotionsSection() {
  return (
    <section className="py-16 bg-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Referral Section */}
          <motion.div
            className="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 text-white overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.35 }}
          >
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
          </motion.div>

          {/* Loyalty Section */}
          <motion.div
            className="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 text-white overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            viewport={{ once: true, amount: 0.35 }}
          >
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
          </motion.div>
          
        </div>
      </div>
      
      
    </section>
  )
}
