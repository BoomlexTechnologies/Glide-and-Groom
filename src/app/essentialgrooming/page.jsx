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
        <section className="py-20 bg-white bg-opacity-90">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-primary-600 transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Essential Grooming</span>
              </div>
            </nav>

            {/* Main Content */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Essential Grooming
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our Essential Grooming package provides all the fundamental care your dog needs to stay clean, 
                  healthy, and comfortable. This comprehensive service covers all the basics of pet hygiene and grooming.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Services Included */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Bathing:</strong> Thorough cleaning with premium pet-safe shampoos
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Blow Drying:</strong> Gentle drying to prevent matting and ensure comfort
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Combing:</strong> Detangling and brushing for a smooth, healthy coat
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Sanitary Clipping:</strong> Hygiene maintenance for sensitive areas
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Ear Cleaning:</strong> Gentle cleaning to prevent infections
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Under-belly Clipping:</strong> Trimming for cleanliness and comfort
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Nail Clipping:</strong> Safe trimming to maintain paw health
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Body Perfume:</strong> Light, pet-safe fragrance for freshness
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Small Dog</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Short coat:</span>
                            <span className="text-2xl font-bold text-primary-600">₹1,450</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Long coat:</span>
                            <span className="text-2xl font-bold text-primary-600">₹1,750</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Big Dog</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Short coat:</span>
                            <span className="text-2xl font-bold text-primary-600">₹1,950</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Long coat:</span>
                            <span className="text-2xl font-bold text-primary-600">₹2,450</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Essential Grooming?</h3>
                  <p className="text-gray-700 mb-4">
                    Perfect for regular maintenance and keeping your dog clean and comfortable. This package is ideal for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Dogs that need regular hygiene maintenance</li>
                    <li>First-time grooming experiences</li>
                    <li>Maintenance between full grooming sessions</li>
                    <li>Senior dogs who need gentle care</li>
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <div className="space-y-4">
                    <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg">
                      Book Essential Grooming
                    </button>
                    <div className="text-gray-600">
                      <p>Mobile service • At your doorstep • Professional equipment</p>
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
