'use client'

import { motion } from 'framer-motion'
import { useModal } from './ModalContext'

export default function PromotionsSection() {
  const { openCallbackModal } = useModal()
  
  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm tracking-wide shadow-lg">
              🎉 Special Offers
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Exclusive Deals
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Take advantage of our special promotions and loyalty rewards. 
            Book now and give your pet the premium grooming experience they deserve.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Loyalty Reward Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 max-w-4xl w-full overflow-hidden"
            style={{background: 'linear-gradient(135deg, #071d43, #05152f, #040e1b)'}}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="10" cy="10" r="2"/><circle cx="30" cy="15" r="1.5"/><circle cx="50" cy="8" r="2"/><circle cx="70" cy="12" r="1"/><circle cx="90" cy="5" r="1.5"/>
                <circle cx="20" cy="30" r="1"/><circle cx="40" cy="35" r="2"/><circle cx="60" cy="28" r="1.5"/><circle cx="80" cy="32" r="1"/><circle cx="15" cy="50" r="1.5"/>
                <circle cx="35" cy="55" r="1"/><circle cx="55" cy="48" r="2"/><circle cx="75" cy="52" r="1.5"/><circle cx="95" cy="45" r="1"/>
              </svg>
            </div>
            
            {/* Loyalty Badge */}
            <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
              🏆 LOYALTY REWARD
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Content Section */}
              <div className="text-white">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Loyalty Program
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Join our loyalty program and earn rewards with every grooming session. 
                    The more you groom, the more you save!
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Earn points with every visit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Exclusive member discounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Priority booking slots</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">Free add-on services</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="md:col-span-2 flex flex-col items-center md:items-end justify-center">
                <button 
                  onClick={openCallbackModal}
                  className="group/btn relative text-white px-8 py-5 rounded-2xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-3xl border border-white/20 w-full md:w-auto" 
                  style={{background: 'linear-gradient(135deg, #071d43, #05152f, #040e1b)'}}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Request a Callback
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}