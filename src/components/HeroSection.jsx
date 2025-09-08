'use client'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] bg-transparent flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl animate-slide-up-1">
            Glide & Groom
          </h1>
          <p className="text-2xl md:text-3xl text-white font-semibold mb-8 drop-shadow-2xl animate-slide-up-2">
            Spa On Wheels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-3">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg backdrop-blur-sm">
              Book Now
              <span className="text-white text-lg drop-shadow-2xl"> Pay Later</span>
            </button>
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
      `}</style>
    </section>
  )
}
