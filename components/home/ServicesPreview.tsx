import Link from 'next/link';
import { services } from '@/lib/services-data';
import { ArrowRight } from 'lucide-react';

export default function ServicesPreview() {
  const featured = services.slice(0, 6);
  return (
    <section className="py-24 px-4 bg-brand-light">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-2">Lo que ofrecemos</p>
            <h2 className="section-title">Nuestros Servicios</h2>
          </div>
          <Link href="/servicios" className="flex items-center gap-2 text-brand-accent font-semibold hover:gap-3 transition-all">Ver todos <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service) => (
            <Link key={service.slug} href={`/servicios/${service.slug}`} className="card p-7 group">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-lg font-bold text-brand-primary mb-2 group-hover:text-brand-accent transition-colors">{service.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
