'use client'

import Link from 'next/link'

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Glide and Groom
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary-600 mb-8">
            Our Services
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our mobile pet spa brings top-notch grooming and wellness services right to your doorstep, 
            ensuring your pet feels pampered and relaxed. From nail clipping to luxurious baths, we offer 
            a full range of professional treatments designed to keep your furry friend looking and feeling their best.
          </p>
          <div className="mt-8">
            <span className="inline-block bg-[#031E38] text-white px-4 py-2 rounded-full font-semibold">
              In Van Services
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Essential Grooming */}
          <div className="bg-white bg-opacity-80 rounded-xl p-8 shadow-lg animate-slide-up-card-1">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Essential Grooming</h4>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Bathing
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Blow drying
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Combing
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Sanitary clipping
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Ear cleaning
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Under-belly clipping
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Nail clipping
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Body perfume
              </li>
            </ul>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Small Dog</h5>
                <p className="text-gray-600">– Short coat: 1450 INR</p>
                <p className="text-gray-600">– Long coat: 1750 INR</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Big Dog</h5>
                <p className="text-gray-600">– Short coat: 1950 INR</p>
                <p className="text-gray-600">– Long coat: 2450 INR</p>
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Book Now
              </button>
              <Link href="/essentialgrooming">
                <button className="w-full mt-2 bg-white text-primary-600 border-2 border-primary-600 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Complete Grooming */}
          <div className="bg-white bg-opacity-80 rounded-xl p-8 shadow-lg border-2 border-primary-200 animate-slide-up-card-2">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Complete Grooming</h4>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Full body haircut
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Combing
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Oil massage
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Medicated bath
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Blow drying
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Nail clipping + grinding
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Ear cleaning + ear drops
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Teeth cleaning + mouth spray
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Sanitary & under-belly clipping
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-3">✓</span> Body perfume
              </li>
            </ul>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Small Dog</h5>
                <p className="text-gray-600">– Short coat: 1850 INR</p>
                <p className="text-gray-600">– Long coat: 2450 INR</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Big Dog</h5>
                <p className="text-gray-600">– Short coat: 2350 INR</p>
                <p className="text-gray-600">– Long coat: 2950 INR</p>
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Book Now
              </button>
              <Link href="/completegrooming">
                <button className="w-full mt-2 bg-white text-primary-600 border-2 border-primary-600 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Cat Grooming */}
          <div className="bg-white bg-opacity-80 rounded-xl p-8 shadow-lg animate-slide-up-card-3">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Cat Grooming</h4>
            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Essential Grooming</h5>
                <p className="text-2xl font-bold text-primary-600">1800 INR</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Complete Grooming</h5>
                <p className="text-2xl font-bold text-primary-600">2400 INR</p>
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Book Now
              </button>
              <Link href="/catgrooming">
                <button className="w-full mt-2 bg-white text-primary-600 border-2 border-primary-600 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                  Learn More
                </button>
              </Link>
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
          animation: slideUpCard 0.8s ease-out 0.1s forwards;
          opacity: 0;
        }
        
        .animate-slide-up-card-2 {
          animation: slideUpCard 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-slide-up-card-3 {
          animation: slideUpCard 0.8s ease-out 0.5s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
