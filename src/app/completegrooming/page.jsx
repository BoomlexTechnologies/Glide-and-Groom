import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Complete Grooming - Glide & Groom',
  description: 'Complete details about our Complete Grooming package for dogs. Premium mobile pet grooming service with full spa treatment.',
}

export default function CompleteGroomingPage() {
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
                <span className="text-gray-900 font-medium">Complete Grooming</span>
              </div>
            </nav>

            {/* Main Content */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-primary-200">
              <div className="flex items-center mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Complete Grooming
                </h1>
                <span className="ml-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  PREMIUM
                </span>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our Complete Grooming package is the ultimate spa experience for your beloved pet. This comprehensive 
                  service includes everything in our Essential package plus premium treatments for a full transformation 
                  that will leave your dog looking and feeling absolutely fantastic.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Services Included */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Teeth Cleaning:</strong> It helps freshen breath, reduce plaque buildup, and promote healthier gums.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Bath with premium pet-safe shampoo:</strong> Gentle cleansing tailored to your pet's skin type.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Blow Dry:</strong> Soft towel and air drying for a cozy finish.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>De shedding:</strong> Removes loose hair, tangles, and keeps the coat healthy.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Nail Trimming:</strong> Keeps paws comfortable and prevents overgrowth.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Ear Cleaning:</strong> Reduces the risk of ear infections and keeps ears fresh.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Sanitary Trim:</strong> A clean-up around sensitive areas for hygiene.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Body perfume:</strong> The final touch—because your pet deserves to smell as good as they look!
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-black mr-3 mt-1">✓</span>
                        <div className="text-black">
                          <strong>Underbelly Clipping:</strong> Keep your pet fresh, clean, and comfortable—especially in warmer months.
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Premium Pricing</h2>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Small Dog</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Short coat:</span>
                            <span className="text-2xl font-bold text-primary-600">₹1,850</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Long coat:</span>
                            <span className="text-2xl font-bold text-primary-600">₹2,450</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Big Dog</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Short coat:</span>
                            <span className="text-2xl font-bold text-primary-600">₹2,350</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Long coat:</span>
                            <span className="text-2xl font-bold text-primary-600">₹2,950</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">The Ultimate Spa Experience</h3>
                  <p className="text-gray-700 mb-4">
                    Our Complete Grooming package transforms your pet with a luxurious spa experience. Perfect for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Special occasions and celebrations</li>
                    <li>Dogs with long or thick coats needing professional styling</li>
                    <li>Pets requiring comprehensive health and hygiene care</li>
                    <li>Show dogs or pets needing photo-ready appearance</li>
                    <li>Monthly maintenance for optimal health and appearance</li>
                  </ul>
                </div>

                {/* Process Timeline */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                      <div className="text-black">
                        <strong>Assessment & Preparation:</strong> Health check and consultation about your pet's needs
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                      <div className="text-black">
                        <strong>Pre-Grooming Care:</strong> Oil massage and relaxation before the main service
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                      <div className="text-black">
                        <strong>Full Grooming Service:</strong> Complete haircut, medicated bath, and styling
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                      <div className="text-black">
                        <strong>Health & Hygiene:</strong> Dental care, nail care, and ear cleaning
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</div>
                      <div className="text-black">
                        <strong>Finishing Touches:</strong> Final styling, perfume, and presentation
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <div className="space-y-4">
                    <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg">
                      Request a Callback
                    </button>
                    <div className="text-gray-600">
                      <p>Premium mobile service • Professional equipment • Expert groomers</p>
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
