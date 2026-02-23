import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/services-data';
import CTABanner from '@/components/CTABanner';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Servicios | Kineo-UMF',
  description: 'Conoce todos los servicios de rehabilitación física en Kineo-UMF.'
};

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-500 to-[#2E7DAE] text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-medical font-semibold text-sm uppercase tracking-widest mb-4">Lo que ofrecemos</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto">Tratamientos especializados de rehabilitación física diseñados para cada etapa de tu recuperación.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.slug} href={`/servicios/${service.slug}`} className="card p-8 group flex flex-col">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-brand-primary" />
                </div>
                <h2 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors">{service.title}</h2>
                <p className="text-brand-muted text-sm leading-relaxed flex-1">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-brand-accent font-semibold text-sm">
                  Conoce más <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
