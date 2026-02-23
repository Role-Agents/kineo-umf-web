import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const highlights = ['20+ años de experiencia','Equipo médico certificado','Tecnología de vanguardia','Convenios con aseguradoras'];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy-500 via-navy-600 to-[#2E7DAE] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-medical/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#2E7DAE]/20 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-teal-medical/10 border border-teal-medical/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-teal-medical rounded-full animate-pulse" />
            <span className="text-teal-medical text-sm font-medium">Centro Médico Especializado</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Rehabilitación<span className="block text-teal-medical">que transforma</span>vidas
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
            En Kineo-UMF combinamos experiencia clínica, tecnología de vanguardia y atención personalizada para devolverte la movilidad y calidad de vida que mereces.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {highlights.map((h) => (
              <div key={h} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-teal-medical mt-0.5 flex-shrink-0" />
                <span className="text-blue-100 text-sm">{h}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contacto" className="btn-primary text-base px-8 py-4">Agendar consulta <ArrowRight className="w-5 h-5" /></Link>
            <Link href="/servicios" className="btn-outline-white text-base px-8 py-4">Conocer servicios</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
