'use client'

import Link from 'next/link'

const scrollToSection = (sectionId) => {
  if (sectionId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-slate-100 h-[30vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Navigation Links - Centered */}
        <nav className="flex justify-start space-x-8 mb-8">
          <button 
            onClick={() => scrollToSection('top')}
            className="text-gray-700 hover:text-slate-800 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about-us')}
            className="text-gray-700 hover:text-slate-800 transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-gray-700 hover:text-slate-800 transition-colors"
          >
            Reviews
          </button>
        </nav>

        {/* Horizontal Line - 80% width centered */}
        <div className="flex justify-center mb-8">
          <div className="w-full h-px bg-gray-400"></div>
        </div>

        {/* Bottom Section - Copyright left, Icons right */}
        <div className="flex justify-between items-center">
          {/* Copyright */}
          <div>
            <p className="text-gray-600 text-sm">
              © 2025 All rights Reserved by GlideandGroom.in
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
              <span className="sr-only">Pinterest</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 11.987c0-3.318-2.691-6.01-6.008-6.01s-6.008 2.692-6.008 6.01c0 3.318 2.691 6.009 6.008 6.009s6.008-2.691 6.008-6.009zm-3.355 0c0 1.466-1.188 2.654-2.653 2.654-1.466 0-2.654-1.188-2.654-2.654 0-1.466 1.188-2.653 2.654-2.653 1.465 0 2.653 1.187 2.653 2.653zm5.344-6.467c0 .766-.621 1.386-1.386 1.386-.765 0-1.387-.62-1.387-1.386 0-.765.622-1.386 1.387-1.386.765 0 1.386.621 1.386 1.386zm4.017 1.425c-.092-1.94-.537-3.657-1.963-5.083-1.426-1.426-3.143-1.87-5.083-1.963-2.003-.103-8.005-.103-10.008 0-1.94.093-3.657.537-5.083 1.963C.46 3.288.016 5.005-.077 6.945c-.103 2.003-.103 8.005 0 10.008.093 1.94.537 3.657 1.963 5.083 1.426 1.426 3.143 1.87 5.083 1.963 2.003.103 8.005.103 10.008 0 1.94-.093 3.657-.537 5.083-1.963 1.426-1.426 1.87-3.143 1.963-5.083.103-2.003.103-8.005 0-10.008zm-2.466 12.165c-.424 1.064-1.247 1.887-2.311 2.311-1.599.634-5.389.488-7.158.488-1.769 0-5.559.146-7.158-.488-1.064-.424-1.887-1.247-2.311-2.311-.634-1.599-.488-5.389-.488-7.158 0-1.769-.146-5.559.488-7.158.424-1.064 1.247-1.887 2.311-2.311 1.599-.634 5.389-.488 7.158-.488 1.769 0 5.559-.146 7.158.488 1.064.424 1.887 1.247 2.311 2.311.634 1.599.488 5.389.488 7.158 0 1.769.146 5.559-.488 7.158z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
