'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

const scrollToSection = (sectionId) => {
  if (sectionId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  
  const handleNavigation = (sectionId) => {
    if (isHomePage) {
      scrollToSection(sectionId)
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  return (
    <header className="bg-[#031E38] shadow-2xl sticky top-0 z-50 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="/cropped-cropped-Glide-and-Groom-Logo-2.jpg"
                  alt="Glide & Groom Logo"
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            <button
              onClick={() => handleNavigation('top')}
              className="text-white hover:text-blue-300 font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 relative group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </button>
            <button
              onClick={() => handleNavigation('about-us')}
              className="text-white hover:text-blue-300 font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 relative group"
            >
              <span className="relative z-10">About Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </button>
            <button
              onClick={() => handleNavigation('testimonials')}
              className="text-white hover:text-blue-300 font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 relative group"
            >
              <span className="relative z-10">Reviews</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="tel:+919964562000"
              className="text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200"
              style={{backgroundColor: '#6699CC'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#5588BB'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#6699CC'}
            >
              Contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-300 focus:outline-none focus:text-blue-300 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-sm border-t border-white/20 rounded-b-2xl shadow-xl">
              <button
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300"
                onClick={() => { handleNavigation('top'); setIsMenuOpen(false) }}
              >
                Home
              </button>
              <button
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300"
                onClick={() => { handleNavigation('about-us'); setIsMenuOpen(false) }}
              >
                About Us
              </button>
              <button
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300"
                onClick={() => { handleNavigation('testimonials'); setIsMenuOpen(false) }}
              >
                Reviews
              </button>
              <Link
                href="tel:+919964562000"
                className="block w-full text-center px-4 py-2 text-white rounded font-medium mt-4 transition-colors duration-200"
                style={{backgroundColor: '#6699CC'}}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
