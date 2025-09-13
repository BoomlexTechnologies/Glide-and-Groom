'use client'

import { useModal } from './ModalContext'

export default function HeroSection() {
  const { openCallbackModal } = useModal()
  
  return (
    <section className="relative h-[90vh] bg-transparent flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* Content Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black/25"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Enhanced Title with Better Typography */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 animate-slide-up-1 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent" style={{textShadow: '3px 3px 12px #000000'}}>
              Glide & Groom
            </h1>
          </div>
          
          {/* Enhanced Subtitle */}
          <p className="text-2xl md:text-3xl text-white font-semibold mb-12 animate-slide-up-2 tracking-wide" style={{textShadow: '3px 3px 12px #000000'}}>
            Spa On Wheels
          </p>
          
          {/* Enhanced CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up-3">
            <button 
              onClick={openCallbackModal}
              className="group relative overflow-hidden select-none text-white px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 rounded-2xl text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold shadow-[5px 4px 10px 0px rgba(0, 0, 0, 0.86)] hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-[0_35px_70px_rgba(0,0,0,0.6)] border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40" 
              style={{background: 'linear-gradient(135deg, #071d43, #05152f, #040e1b)'}} 
              onMouseEnter={(e) => e.target.style.background = 'linear-gradient(135deg, #05152f, #040e1b, #020a14)'} 
              onMouseLeave={(e) => e.target.style.background = 'linear-gradient(135deg, #071d43, #05152f, #040e1b)'}>
              <span className="relative z-10 flex items-center gap-2 sm:gap-3 select-none bg-transparent" style={{textShadow: '0 2px 6px rgba(0,0,0,0.7)'}}>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform duration-300 bg-transparent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Request a Callback
              </span>

            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white animate-slide-up-3">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#5ced73]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-white" style={{textShadow: '3px 3px 12px #000000'}}>Professional Groomers</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#5ced73]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-white" style={{textShadow: '3px 3px 12px #000000'}}>Mobile Service</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#5ced73]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-white" style={{textShadow: '3px 3px 12px #000000'}}>Premium Products</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }
        
        .animate-slide-up-1 {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-slide-up-2 {
          animation: slideUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-slide-up-3 {
          animation: slideUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: floatDelayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}