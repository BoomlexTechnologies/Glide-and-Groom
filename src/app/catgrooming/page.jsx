import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Cat Grooming - Glide & Groom',
  description: 'Professional cat grooming services. Gentle, stress-free mobile grooming for your feline friends.',
}

export default function CatGroomingPage() {
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
                <span className="text-gray-900 font-medium">Cat Grooming</span>
              </div>
            </nav>

            {/* Main Content */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Cat Grooming
                </h1>
                <span className="ml-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  FELINE SPECIALIST
                </span>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our specialized cat grooming services are designed with your feline friend's unique needs in mind. 
                  We understand that cats require a gentle, patient approach, and our experienced groomers are trained 
                  in feline behavior to ensure a stress-free and comfortable experience for your beloved cat.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Service Options */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Options</h2>
                    
                    {/* Essential Cat Grooming */}
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 mb-6 border border-pink-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Cat Grooming</h3>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-pink-600">₹1,800</span>
                      </div>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-center text-black">
                          <span className="text-black mr-3">✓</span>
                          Gentle bathing with cat-specific shampoo
                        </li>
                        <li className="flex items-center text-black">
                          <span className="text-black mr-3">✓</span>
                          Careful blow drying (low heat)
                        </li>
                        <li className="flex items-center text-black">
                          <span className="text-black mr-3">✓</span>
                          Thorough brushing and detangling
                        </li>
                        <li className="flex items-center text-black">
                          <span className="text-black mr-3">✓</span>
                          Nail trimming
                        </li>
                        <li className="flex items-center text-black">
                          <span className="text-black mr-3">✓</span>
                          Ear cleaning
                        </li>
                        <li className="flex items-center text-black">
                          <span className="text-black mr-3">✓</span>
                          Light cat-safe perfume
                        </li>
                      </ul>
                    </div>

                    {/* Complete Cat Grooming */}
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Cat Grooming</h3>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-purple-600">₹2,400</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        <strong>Everything in Essential plus:</strong>
                      </p>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-center text-black">
                          <span className="text-black mr-3">✓</span>
                          Professional fur trimming & styling
                        </li>
                        <li className="flex items-center text-black">
                          <span className="text-black mr-3">✓</span>
                          Sanitary area trimming
                        </li>
                        <li className="flex items-center text-black">
                          <span className="text-black mr-3">✓</span>
                          Paw pad trimming
                        </li>
                        <li className="flex items-center text-black">
                          <span className="text-black mr-3">✓</span>
                          Mat removal (if needed)
                        </li>
                        <li className="flex items-center text-black">
                          <span className="text-black mr-3">✓</span>
                          Dental hygiene care
                        </li>
                        <li className="flex items-center text-black">
                          <span className="text-black mr-3">✓</span>
                          Premium finishing & styling
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Why Choose Our Cat Grooming */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Cat Grooming?</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">🐱 Feline Behavior Experts</h3>
                        <p className="text-gray-700">
                          Our groomers are specially trained in cat behavior and use gentle techniques to keep your cat calm and comfortable throughout the process.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">🏠 Stress-Free Environment</h3>
                        <p className="text-gray-700">
                          Mobile grooming in your cat's familiar environment reduces stress and anxiety compared to traditional grooming salons.
                        </p>
                      </div>
                      
                      <div className="bg-yellow-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">⏰ Patient Approach</h3>
                        <p className="text-gray-700">
                          We take our time and work at your cat's pace, with breaks as needed to ensure a positive experience.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">🧴 Cat-Specific Products</h3>
                        <p className="text-gray-700">
                          All our products are specifically formulated for cats' sensitive skin and unique needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Special Considerations */}
                <div className="bg-orange-50 rounded-lg p-6 mb-8 border border-orange-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Special Considerations for Cats</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Long-haired cats prone to matting</li>
                        <li>Senior cats who can't groom themselves</li>
                        <li>Cats with mobility issues</li>
                        <li>Show cats needing professional styling</li>
                        <li>Cats with allergies or skin conditions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">We handle:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Anxious or nervous cats</li>
                        <li>Cats that dislike water</li>
                        <li>Heavy shedding and seasonal coats</li>
                        <li>Mat removal without distress</li>
                        <li>Senior cat special care</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Process Timeline */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Gentle Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                      <div className="text-black">
                        <strong>Meet & Greet:</strong> Letting your cat get comfortable with our groomer
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                      <div className="text-black">
                        <strong>Gentle Assessment:</strong> Checking coat condition and discussing any concerns
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                      <div className="text-black">
                        <strong>Pre-Grooming:</strong> Brushing and preparing for the main service
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                      <div className="text-black">
                        <strong>Gentle Grooming:</strong> Using calm, patient techniques throughout
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</div>
                      <div className="text-black">
                        <strong>Comfort Check:</strong> Ensuring your cat is happy and stress-free
                      </div>
                    </div>
                  </div>
                </div>

                {/* Health Benefits */}
                <div className="bg-green-50 rounded-lg p-6 mb-8 border border-green-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Health Benefits of Regular Cat Grooming</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">💚</span>
                        <span className="text-black">Reduces hairballs and shedding</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">💚</span>
                        <span className="text-black">Prevents matting and skin irritation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">💚</span>
                        <span className="text-black">Early detection of skin issues</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">💚</span>
                        <span className="text-black">Improved circulation from brushing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">💚</span>
                        <span className="text-black">Better hygiene for senior cats</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">💚</span>
                        <span className="text-black">Reduced allergens in your home</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <div className="space-y-4">
                    <button className="text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors shadow-lg hover:opacity-90" style={{backgroundColor: '#6699CC'}}>
                      Request a Callback
                    </button>
                    <div className="text-gray-600">
                      <p>Gentle mobile service • Cat behavior specialists • Stress-free experience</p>
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
