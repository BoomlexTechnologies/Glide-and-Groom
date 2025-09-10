'use client'

import { motion } from 'framer-motion'

export default function PromotionsSection() {
  return (
    <section className="pt-16 pb-6 bg-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Referral Section - Commented Out
          <motion.div
            className="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 text-white overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
            }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.35 }}
          >
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
          */}

          {/* Loyalty Section - Professional Horizontal Layout */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl"
            style={{background: 'linear-gradient(to right, #6699CC, #5588BB, #4477AA)'}}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -4,
              scale: 1.01,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
            }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="10" cy="10" r="2"/>
                <circle cx="30" cy="15" r="1.5"/>
                <circle cx="50" cy="8" r="2"/>
                <circle cx="70" cy="12" r="1"/>
                <circle cx="90" cy="5" r="1.5"/>
                <circle cx="20" cy="30" r="1"/>
                <circle cx="40" cy="35" r="2"/>
                <circle cx="60" cy="28" r="1.5"/>
                <circle cx="80" cy="32" r="1"/>
                <circle cx="15" cy="50" r="1.5"/>
                <circle cx="35" cy="55" r="1"/>
                <circle cx="55" cy="48" r="2"/>
                <circle cx="75" cy="52" r="1.5"/>
                <circle cx="95" cy="45" r="1"/>
              </svg>
            </div>
            
            <div className="relative z-10 p-10 md:p-16">
              <div className="grid md:grid-cols-4 gap-12 items-center">
                
                {/* Content Section */}
                <div className="md:col-span-3">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                    Loyalty Looks Good on Your Pet!
                  </h2>
                  
                  <div className="space-y-5 text-white">
                    <p className="text-xl">
                      Book with Glide and Groom 4 times, and your 5th groom is <span className="font-bold text-yellow-300">FREE</span>—no strings, just tail wags.
                    </p>
                    
                    <p className="text-lg text-blue-100">
                      We'll track it for you, so just sit back and let the glow-ups keep coming!
                    </p>
                    
                    <p className="text-xl font-semibold text-blue-100">
                      Because loyal pets (& their humans) deserve a reward
                    </p>
                  </div>
                </div>
                
                {/* CTA Section */}
                <div className="flex flex-col items-center md:items-end">
                  <button className="text-white px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap hover:opacity-90" style={{backgroundColor: '#6699CC'}}>
                    Request a Callback
                  </button>
                </div>
                
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}