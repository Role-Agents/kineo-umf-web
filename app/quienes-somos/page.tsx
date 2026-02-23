import { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';
import { Award, Users, Heart, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: '¿Quiénes Somos? | Kineo-UMF',
  description: 'Conoce nuestra historia y misión en Kineo-UMF.'
};

const values = [
  { icon: Heart, title: 'Vocación de Servicio', description: 'Cada paciente es tratado con el máximo cuidado, atención personalizada y empatía clínica.' },
  { icon: Award, title: 'Excelencia Clínica', description: 'Aplicamos las técnicas más avanzadas y basadas en evidencia para lograr los mejores resultados.' },
  { icon: Users, title: 'Equipo Multidisciplinario', description: 'Nuestros especialistas trabajan en conjunto para brindar un tratamiento integral y coordinado.' },
  { icon: Clock, title: 'Compromiso Continuo', description: 'Acompañamos a nuestros pacientes en cada etapa de su recuperación.' }
];

export default function QuienesSomosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-500 to-[#2E7DAE] text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-medical font-semibold text-sm uppercase tracking-widest mb-4">Nuestra Historia</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">¿Quiénes Somos?</h1>
          <p className="text-lg text-blue-100 leading-relaxed">Somos un centro médico especializado en rehabilitación física, comprometidos con devolver la calidad de vida a nuestros pacientes.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-primary mb-4">Nuestra Misión</h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-6">Proporcionar atención médica especializada en rehabilitación física con los más altos estándares de calidad para mejorar la calidad de vida de cada uno de nuestros pacientes.</p>
            <h2 className="text-3xl font-bold text-brand-primary mb-4">Nuestra Visión</h2>
            <p className="text-brand-muted text-lg leading-relaxed">Ser el centro de rehabilitación física de referencia en México, reconocido por la excelencia en la atención e innovación en tratamientos.</p>
          </div>
          <div className="bg-brand-light rounded-2xl p-10">
            <blockquote className="text-xl font-medium text-brand-primary italic leading-relaxed">&ldquo;La rehabilitación no es solo recuperar el movimiento, es recuperar la vida.&rdquo;</blockquote>
            <p className="mt-6 text-brand-muted font-semibold">— Dirección Médica, Kineo-UMF</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Nuestros Valores</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val) => (
              <div key={val.title} className="card p-8 text-center">
                <div className="w-14 h-14 bg-teal-medical/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <val.icon className="w-7 h-7 text-teal-medical" />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">{val.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
