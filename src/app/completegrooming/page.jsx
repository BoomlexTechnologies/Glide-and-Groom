'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useModal } from '@/components/ModalContext'

export default function CompleteGroomingPage() {
  const { openCallbackModal } = useModal()
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-900 font-medium">Complete Grooming</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-100/50">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #071d43, #05152f, #040e1b)'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                  Complete Grooming
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Our Complete Grooming package is the ultimate spa experience for your pet. 
                This comprehensive service includes everything from basic hygiene to premium styling and health care.
              </p>
            </div>

            {/* What's Included */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #071d43, #05152f)'}}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What's Included</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-colors">
                      <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-black">Full Body Haircut: Professional styling and trimming</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-colors">
                      <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-black">Combing: Thorough detangling and brushing</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-colors">
                      <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-black">Oil Massage: Relaxing massage for healthy skin and coat</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-colors">
                      <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-black">Medicated Bath: Therapeutic bathing with specialized shampoos</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-colors">
                      <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-black">Blow Drying: Professional drying for optimal coat health</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-colors">
                      <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-black">Nail Clipping + Grinding: Complete paw care and nail maintenance</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-colors">
                      <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-black">Ear Cleaning + Ear Drops: Advanced ear care and infection prevention</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-colors">
                      <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-black">Teeth Cleaning + Mouth Spray: Dental hygiene and fresh breath</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-colors">
                      <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-black">Sanitary & Under-belly Clipping: Complete hygiene maintenance</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-colors">
                      <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-black">Body Perfume: Premium fragrance for a luxurious finish</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What to Expect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #071d43, #05152f)'}}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What to Expect</h2>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <ol className="space-y-4">
                  <li className="flex items-start text-gray-700">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</span>
                    <span className="font-medium text-black">Pre-Grooming Care: Oil massage and relaxation before the main service</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</span>
                    <span className="font-medium text-black">Full Grooming Service: Complete haircut, medicated bath, and styling</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</span>
                    <span className="font-medium text-black">Health & Hygiene: Dental care, nail care, and ear cleaning</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</span>
                    <span className="font-medium text-black">Finishing Touches: Final styling, perfume, and presentation</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #071d43, #05152f)'}}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Pricing</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" style={{color: '#071d43'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Small Dog
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-medium">Short coat: <span className="font-bold" style={{color: '#071d43'}}>1850 INR</span></p>
                    <p className="text-gray-700 font-medium">Long coat: <span className="font-bold" style={{color: '#071d43'}}>2450 INR</span></p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-6 border border-blue-300">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" style={{color: '#071d43'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Big Dog
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-medium">Short coat: <span className="font-bold" style={{color: '#071d43'}}>2350 INR</span></p>
                    <p className="text-gray-700 font-medium">Long coat: <span className="font-bold" style={{color: '#071d43'}}>2950 INR</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="space-y-6">
                <button 
                  onClick={openCallbackModal}
                  className="group relative text-white px-12 py-6 rounded-2xl text-2xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform" 
                  style={{background: 'linear-gradient(135deg, #071d43, #05152f)'}}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Request a Callback
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <div className="text-gray-600 text-lg">
                  <p className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Premium spa experience for your pet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}