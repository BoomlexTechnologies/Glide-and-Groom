'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function TestimonialsSection() {
  const titleRef = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)
  const card4Ref = useRef(null)
  const [titleVisible, setTitleVisible] = useState(false)
  const [c1Visible, setC1Visible] = useState(false)
  const [c2Visible, setC2Visible] = useState(false)
  const [c3Visible, setC3Visible] = useState(false)
  const [c4Visible, setC4Visible] = useState(false)

  useEffect(() => {
    const createObserver = (ref, setVisible) => {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setVisible(true)
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.25 }
      )
      if (ref.current) observer.observe(ref.current)
      return observer
    }

    const oTitle = createObserver(titleRef, setTitleVisible)
    const o1 = createObserver(card1Ref, setC1Visible)
    const o2 = createObserver(card2Ref, setC2Visible)
    const o3 = createObserver(card3Ref, setC3Visible)
    const o4 = createObserver(card4Ref, setC4Visible)

    return () => {
      if (titleRef.current) oTitle.unobserve(titleRef.current)
      if (card1Ref.current) o1.unobserve(card1Ref.current)
      if (card2Ref.current) o2.unobserve(card2Ref.current)
      if (card3Ref.current) o3.unobserve(card3Ref.current)
      if (card4Ref.current) o4.unobserve(card4Ref.current)
    }
  }, [])

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Fixed Background Image - Only visible in this section */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url(/footer-top-bg.webp)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
        ></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 ref={titleRef} className={`text-4xl md:text-5xl font-bold text-white text-center mb-16 ${titleVisible ? 'animate-slide-up-title' : 'opacity-0 translate-y-12'}`}>
            Testimonials
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 - Dog Grooming */}
            <div ref={card1Ref} className={`bg-transparent rounded-lg p-8 border-2 border-white ${c1Visible ? 'animate-slide-up-card-1' : 'opacity-0 translate-y-16'}`}>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                Dog<br />Grooming
              </h3>
              <h4 className="font-bold text-white mb-4 text-center uppercase tracking-wide text-sm">
                STRESS-FREE GROOMING FOR MY ANXIOUS DOG. TIME & LIFE SAVER!
              </h4>
              <p className="text-white text-sm leading-relaxed">
                Glide & Groom is a lifesaver! My golden retriever, Max, used to get so anxious when we had to go to the groomer, 
                but with their mobile service, it's a totally different experience. They came right to our doorstep, and Max was 
                calm and relaxed the entire time. The groomer was incredibly professional, and Max came out looking amazing – 
                clean, shiny, and so happy! I highly recommend Glide & Groom to anyone looking for a stress-free grooming experience for their pets.
              </p>
            </div>

            {/* Testimonial 2 - Cat Grooming */}
            <div ref={card2Ref} className={`bg-transparent rounded-lg p-8 border-2 border-white ${c2Visible ? 'animate-slide-up-card-2' : 'opacity-0 translate-y-16'}`}>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                Cat<br />Grooming
              </h3>
              <h4 className="font-bold text-white mb-4 text-center uppercase tracking-wide text-sm">
                PERFECT GROOMING EXPERIENCE FOR MY PERSIAN CAT
              </h4>
              <p className="text-white text-sm leading-relaxed">
                I recently booked Glide & Groom for my Persian cat, Coco, and the whole experience was fantastic! The convenience 
                of having the grooming done at home meant no more stressful trips for Coco. The van was spotless, and the staff was 
                so kind and patient with her. Coco came back looking like a show cat! I'm extremely impressed with their service and 
                will definitely be using Glide & Groom again. It's so easy to book, and the results are incredible.
              </p>
            </div>

            {/* Testimonial 3 - Dog Nail Clipping */}
            <div ref={card3Ref} className={`bg-transparent rounded-lg p-8 border-2 border-white ${c3Visible ? 'animate-slide-up-card-3' : 'opacity-0 translate-y-16'}`}>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                Dog Nail<br />Clipping
              </h3>
              <h4 className="font-bold text-white mb-4 text-center uppercase tracking-wide text-sm">
                EXCELLENT NAIL CLIPPING SERVICE – MY DOG IS SO MUCH HAPPIER!
              </h4>
              <p className="text-white text-sm leading-relaxed">
                Glide & Groom did an amazing job with my dog Bailey's nail clipping! I was always nervous about cutting her nails myself, 
                but the team made the entire process quick and stress-free. They came to my house, which made it so much easier for Bailey. 
                The groomer was gentle, patient, and knew exactly how to keep her calm. Bailey usually squirms during nail trims, but this 
                time she was completely relaxed. Her nails look perfect, and I can tell she's more comfortable now. I'm so grateful for the 
                convenience and care Glide & Groom provided!
              </p>
            </div>
          </div>
          
          {/* Fourth Card - Video Testimonial - Centered */}
          <div className="mt-8 flex justify-center">
            <div ref={card4Ref} className={`bg-transparent rounded-lg p-8 border-2 border-white max-w-md w-full mx-4 ${c4Visible ? 'animate-slide-up-card-4' : 'opacity-0 translate-y-16'}`}>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                Dog<br />Grooming
              </h3>
              <h4 className="font-bold text-white mb-4 text-center uppercase tracking-wide text-sm">
                JOB WAS EXCELLENT, I LIKED IT
              </h4>
              
              {/* Video Container - Natural aspect ratio */}
              <div className="mb-4 rounded-lg overflow-hidden">
                <video 
                  className="w-full rounded-lg"
                  style={{ height: 'auto', maxHeight: '280px' }}
                  controls
                >
                  <source src="/Glide-and-groom-testimonial-video-1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <p className="text-white text-sm leading-relaxed">
                Great service! My dog looked amazing after the grooming session. The team was professional and my pet was comfortable throughout the process.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideUpFromFar {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up-title {
          animation: slideUpFromFar 0.8s ease-out forwards;
        }
        
        .animate-slide-up-card-1 {
          animation: slideUpFromFar 0.8s ease-out 0.2s forwards;
        }
        
        .animate-slide-up-card-2 {
          animation: slideUpFromFar 0.8s ease-out 0.4s forwards;
        }
        
        .animate-slide-up-card-3 {
          animation: slideUpFromFar 0.8s ease-out 0.6s forwards;
        }
        
        .animate-slide-up-card-4 {
          animation: slideUpFromFar 0.8s ease-out 0.8s forwards;
        }
      `}</style>
    </section>
  )
}
