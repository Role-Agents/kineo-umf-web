import { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Kineo-UMF',
  description: 'FAQ de Kineo-UMF.'
};

const faqs = [
  { q: '¿Necesito referencia médica para agendar mi cita?', a: 'No siempre. Para la mayoría de nuestros servicios puedes agendar directamente. Si tienes seguro médico, verifica con tu aseguradora.' },
  { q: '¿Cuánto dura una sesión de terapia?', a: 'Las sesiones duran entre 45 y 60 minutos según el tipo de terapia y el plan personalizado.' },
  { q: '¿Trabajan con seguros médicos?', a: 'Sí, contamos con convenios con AXA, GNP, Mapfre, Metlife, Allianz y otras aseguradoras principales.' },
  { q: '¿Atienden a pacientes extranjeros?', a: 'Sí, contamos con servicio especial para expatriados y seguros internacionales con atención en inglés.' },
  { q: '¿Qué debo llevar a mi primera cita?', a: 'Identificación oficial, referencia médica (si aplica), estudios previos y datos de tu seguro.' },
  { q: '¿Cuáles son sus horarios?', a: 'Lunes a viernes 8:00 AM – 7:00 PM, sábados 9:00 AM – 2:00 PM.' }
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-500 to-[#2E7DAE] text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Preguntas Frecuentes</h1>
          <p className="text-lg text-blue-100">Todo lo que necesitas saber antes de tu primera visita.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-brand-light rounded-xl p-7">
              <h3 className="text-lg font-bold text-brand-primary mb-3">{faq.q}</h3>
              <p className="text-brand-muted leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
