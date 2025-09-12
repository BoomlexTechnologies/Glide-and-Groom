'use client'

import { motion } from 'framer-motion'

export default function PromotionsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

          {/* Loyalty Section - Enhanced Professional Layout */}
          <motion.div
            className="group relative rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            style={{background: 'linear-gradient(135deg, #1e3a8a, #1e40af, #1d4ed8, #2563eb)'}}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)"
            }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-15">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="10" cy="10" r="2"/><circle cx="30" cy="15" r="1.5"/><circle cx="50" cy="8" r="2"/><circle cx="70" cy="12" r="1"/><circle cx="90" cy="5" r="1.5"/>
                <circle cx="20" cy="30" r="1"/><circle cx="40" cy="35" r="2"/><circle cx="60" cy="28" r="1.5"/><circle cx="80" cy="32" r="1"/><circle cx="15" cy="50" r="1.5"/>
                <circle cx="35" cy="55" r="1"/><circle cx="55" cy="48" r="2"/><circle cx="75" cy="52" r="1.5"/><circle cx="95" cy="45" r="1"/>
                <circle cx="25" cy="70" r="1.5"/><circle cx="45" cy="75" r="1"/><circle cx="65" cy="68" r="2"/><circle cx="85" cy="72" r="1.5"/>
              </svg>
            </div>
            
            {/* Loyalty Badge */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/90 text-gray-800 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg backdrop-blur-sm">
              🎁 LOYALTY REWARD
            </div>
            
            <div className="relative z-10 p-8 md:p-12 lg:p-20">
              <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
                
                {/* Content Section */}
                <div className="md:col-span-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                      Loyalty Looks Good on Your Pet!
                    </h2>
                  </div>
                  
                  <div className="space-y-4 md:space-y-6 text-white">
                    <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                      Book with Glide and Groom 4 times, and your 5th groom is <span className="font-bold text-yellow-300 bg-yellow-300/20 px-2 py-1 md:px-3 md:py-1 rounded-lg">FREE</span>—no strings, just tail wags.
                    </p>
                    
                    <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed">
                      We'll track it for you, so just sit back and let the glow-ups keep coming!
                    </p>
                    
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-100">
                      Because loyal pets (& their humans) deserve a reward
                    </p>
                  </div>
                </div>
                
                {/* CTA Section */}
                <div className="md:col-span-2 flex flex-col items-center md:items-end justify-center">
                  <button className="group/btn relative text-white px-8 py-5 rounded-2xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-3xl border border-white/20 w-full md:w-auto" style={{backgroundColor: '#6699CC'}}>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Request a Callback
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
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