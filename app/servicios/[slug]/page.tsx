import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/lib/services-data';
import CTABanner from '@/components/CTABanner';
import { CheckCircle, ArrowLeft } from 'lucide-react';

interface Props { params: { slug: string }; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Servicio | Kineo-UMF' };
  return { title: `${service.title} | Kineo-UMF`, description: service.description };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();
  return (
    <>
      <section className="bg-gradient-to-br from-navy-500 to-[#2E7DAE] text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/servicios" className="inline-flex items-center gap-2 text-teal-medical hover:text-white transition-colors mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Todos los servicios
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <service.icon className="w-8 h-8 text-teal-medical" />
            </div>
            <div>
              <p className="text-teal-medical font-semibold text-sm uppercase tracking-widest">Servicio Especializado</p>
              <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
            </div>
          </div>
          <p className="text-lg text-blue-100 leading-relaxed">{service.description}</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-brand-primary mb-6">¿En qué consiste?</h2>
              <p className="text-brand-muted leading-relaxed mb-8">{service.fullDescription}</p>
              <h3 className="text-xl font-bold text-brand-primary mb-4">Beneficios principales</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-medical mt-0.5 flex-shrink-0" />
                    <span className="text-brand-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-brand-light rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-brand-primary mb-4">¿Para quién es?</h3>
                <p className="text-brand-muted leading-relaxed">{service.forWhom}</p>
              </div>
              <div className="bg-navy-500 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-3">¿Listo para comenzar?</h3>
                <p className="text-blue-100 text-sm mb-5">Agenda tu consulta de evaluación hoy mismo.</p>
                <Link href="/contacto" className="btn-primary">Agendar consulta</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
