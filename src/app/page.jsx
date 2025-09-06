import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import PromotionsSection from '@/components/PromotionsSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
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
        <HeroSection />
        <PromotionsSection />
        <ServicesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </main>
  )
}
