import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyUs from '@/components/home/WhyUs';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
