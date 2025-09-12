'use client'

import Link from 'next/link'

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm tracking-wide shadow-lg">
              ✨ Premium Pet Care Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Glide and Groom
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-8" style={{color: '#6699CC'}}>
            Our Services
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our mobile pet spa brings top-notch grooming and wellness services right to your doorstep, 
            ensuring your pet feels pampered and relaxed. From nail clipping to luxurious baths, we offer 
            a full range of professional treatments designed to keep your furry friend looking and feeling their best.
          </p>
          <div className="mt-10">
            <span className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl border border-gray-700/20">
              🚐 In Van Services
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Essential Grooming */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up-card-1 relative overflow-hidden">
            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Essential Grooming</h4>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Bathing</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Blow drying</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Combing</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Sanitary clipping</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Ear cleaning</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Under-belly clipping</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Nail clipping</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Body perfume</span>
              </li>
            </ul>
            <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5 border border-blue-100 group-hover:shadow-lg transition-all duration-300">
                  <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Small Dog
                  </h5>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-medium">– Short coat: <span className="text-blue-600 font-bold">1450 INR</span></p>
                    <p className="text-gray-700 font-medium">– Long coat: <span className="text-blue-600 font-bold">1750 INR</span></p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100 group-hover:shadow-lg transition-all duration-300">
                  <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Big Dog
                  </h5>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-medium">– Short coat: <span className="text-purple-600 font-bold">1950 INR</span></p>
                    <p className="text-gray-700 font-medium">– Long coat: <span className="text-purple-600 font-bold">2450 INR</span></p>
              </div>
              </div>
            </div>
              
              <div className="space-y-4 mt-8">
                <Link href="/essentialgrooming">
                  <button className="group/btn w-full text-white py-4 rounded-2xl font-semibold text-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-xl relative overflow-hidden" style={{backgroundColor: '#6699CC'}}>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Learn More
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
                <button className="group/btn w-full text-white py-4 rounded-2xl font-semibold text-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-xl relative overflow-hidden" style={{backgroundColor: '#6699CC'}}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Request a Callback
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
              </div>
            </div>
          </div>

          {/* Complete Grooming */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-gradient-to-r from-blue-200 to-purple-200 animate-slide-up-card-2 relative overflow-hidden">
            {/* Premium Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              ⭐ PREMIUM
            </div>
            
            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Complete Grooming</h4>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Full body haircut</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Combing</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Oil massage</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Medicated bath</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Blow drying</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Nail clipping + grinding</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Ear cleaning + ear drops</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Teeth cleaning + mouth spray</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Sanitary & under-belly clipping</span>
              </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Body perfume</span>
              </li>
            </ul>
            <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100 group-hover:shadow-lg transition-all duration-300">
                  <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Small Dog
                  </h5>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-medium">– Short coat: <span className="text-purple-600 font-bold">1850 INR</span></p>
                    <p className="text-gray-700 font-medium">– Long coat: <span className="text-purple-600 font-bold">2450 INR</span></p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-5 border border-pink-100 group-hover:shadow-lg transition-all duration-300">
                  <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Big Dog
                  </h5>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-medium">– Short coat: <span className="text-pink-600 font-bold">2350 INR</span></p>
                    <p className="text-gray-700 font-medium">– Long coat: <span className="text-pink-600 font-bold">2950 INR</span></p>
              </div>
              </div>
            </div>
              
              <div className="space-y-4 mt-8">
                <Link href="/completegrooming">
                  <button className="group/btn w-full text-white py-4 rounded-2xl font-semibold text-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-xl relative overflow-hidden" style={{backgroundColor: '#6699CC'}}>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Learn More
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
                <button className="group/btn w-full text-white py-4 rounded-2xl font-semibold text-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-xl relative overflow-hidden" style={{backgroundColor: '#6699CC'}}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Request a Callback
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
              </div>
            </div>
          </div>

          {/* Cat Grooming */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up-card-3 relative overflow-hidden">
            {/* Cat Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              🐱 CAT SPECIALIST
            </div>
            
            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Cat Grooming</h4>
              </div>
              
            <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-100 group-hover:shadow-lg transition-all duration-300">
                  <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Essential Grooming
                  </h5>
                  <p className="text-3xl font-bold text-orange-600">1800 INR</p>
              </div>
                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100 group-hover:shadow-lg transition-all duration-300">
                  <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Complete Grooming
                  </h5>
                  <p className="text-3xl font-bold text-red-600">2400 INR</p>
              </div>
            </div>
              
              <div className="space-y-4 mt-8">
                <Link href="/catgrooming">
                  <button className="group/btn w-full text-white py-4 rounded-2xl font-semibold text-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-xl relative overflow-hidden" style={{backgroundColor: '#6699CC'}}>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Learn More
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
                <button className="group/btn w-full text-white py-4 rounded-2xl font-semibold text-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-xl relative overflow-hidden" style={{backgroundColor: '#6699CC'}}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Request a Callback
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
              </div>
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
