'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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

  return (
    <header className="bg-[#031E38] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/cropped-cropped-Glide-and-Groom-Logo-2.jpg"
                alt="Glide & Groom Logo"
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('top')}
              className="text-white hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about-us')}
              className="text-white hover:text-primary-600 font-medium transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-primary-600 font-medium transition-colors"
            >
              Reviews
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="tel:+919964562000"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => { scrollToSection('top'); setIsMenuOpen(false) }}
              >
                Home
              </button>
              <button
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => { scrollToSection('about-us'); setIsMenuOpen(false) }}
              >
                About Us
              </button>
              <button
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => { scrollToSection('testimonials'); setIsMenuOpen(false) }}
              >
                Reviews
              </button>
              <Link
                href="tel:+919964562000"
                className="block px-3 py-2 bg-primary-600 text-white rounded-lg font-medium mx-3 mt-4"
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
