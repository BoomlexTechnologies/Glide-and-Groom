import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Essential Grooming - Glide & Groom',
  description: 'Complete details about our Essential Grooming package for dogs. Professional mobile pet grooming service.',
}

export default function EssentialGroomingPage() {
  return (
    <main className="min-h-screen relative">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Glide-and-groom-background-front-1.webp)',
        }}
      />
      {/* Very light black overlay for subtle contrast */}
      <div className="fixed inset-0 z-0 bg-black bg-opacity-20" />
      
      {/* Content Overlay */}
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Enhanced Breadcrumb */}
            <nav className="mb-12">
              <div className="flex items-center space-x-3 text-sm">
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Home
                </Link>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-900 font-semibold">Essential Grooming</span>
              </div>
            </nav>

            {/* Main Content */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-100/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                  Essential Grooming
                </h1>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-2xl text-gray-600 mb-12 leading-relaxed text-center">
                  Our Essential Grooming package provides all the fundamental care your dog needs to stay clean, 
                  healthy, and comfortable. This comprehensive service covers all the basics of pet hygiene and grooming.
                </p>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  {/* Services Included */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">What's Included</h2>
                    </div>
                    <ul className="space-y-6">
                      <li className="flex items-start group">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-gray-800">
                          <strong className="text-gray-900">Bathing:</strong> Thorough cleaning with premium pet-safe shampoos
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-gray-800">
                          <strong className="text-gray-900">Blow Drying:</strong> Gentle drying to prevent matting and ensure comfort
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-gray-800">
                          <strong className="text-gray-900">Combing:</strong> Detangling and brushing for a smooth, healthy coat
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-gray-800">
                          <strong className="text-gray-900">Sanitary Clipping:</strong> Hygiene maintenance for sensitive areas
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-gray-800">
                          <strong className="text-gray-900">Ear Cleaning:</strong> Gentle cleaning to prevent infections
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-gray-800">
                          <strong className="text-gray-900">Under-belly Clipping:</strong> Trimming for cleanliness and comfort
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-gray-800">
                          <strong className="text-gray-900">Nail Clipping:</strong> Safe trimming to maintain paw health
                        </div>
                      </li>
                      <li className="flex items-start group">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-gray-800">
                          <strong className="text-gray-900">Body Perfume:</strong> Light, pet-safe fragrance for freshness
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">Pricing</h2>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          Small Dog
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                            <span className="text-gray-700 font-medium">Short coat:</span>
                            <span className="text-3xl font-bold text-purple-600">₹1,450</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                            <span className="text-gray-700 font-medium">Long coat:</span>
                            <span className="text-3xl font-bold text-purple-600">₹1,750</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                          <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          Big Dog
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                            <span className="text-gray-700 font-medium">Short coat:</span>
                            <span className="text-3xl font-bold text-pink-600">₹1,950</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                            <span className="text-gray-700 font-medium">Long coat:</span>
                            <span className="text-3xl font-bold text-pink-600">₹2,450</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 mb-12 border border-blue-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Why Choose Essential Grooming?</h3>
                  </div>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Perfect for regular maintenance and keeping your dog clean and comfortable. This package is ideal for:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      Dogs that need regular hygiene maintenance
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      First-time grooming experiences
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      Maintenance between full grooming sessions
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      Senior dogs who need gentle care
                    </li>
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <div className="space-y-6">
                    <button className="group relative text-white px-12 py-6 rounded-2xl text-2xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform" style={{backgroundColor: '#6699CC'}}>
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
                        Mobile service • At your doorstep • Professional equipment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      
      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/919964562000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </main>
  )
}
