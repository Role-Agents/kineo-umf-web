import { Stethoscope, Award, Users, Clock } from 'lucide-react';

const reasons = [
  { icon: Stethoscope, title: 'Especialistas Certificados', description: 'Nuestro equipo médico cuenta con certificaciones nacionales e internacionales y actualización continua.' },
  { icon: Award, title: 'Tecnología de Vanguardia', description: 'Equipos médicos de última generación para diagnóstico y tratamiento.' },
  { icon: Users, title: 'Atención Personalizada', description: 'Cada plan de tratamiento es diseñado específicamente para las necesidades individuales de cada paciente.' },
  { icon: Clock, title: 'Seguimiento Continuo', description: 'Monitoreamos tu progreso en cada sesión y ajustamos el tratamiento para una recuperación óptima.' }
];

export default function WhyUs() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-2">¿Por qué elegirnos?</p>
          <h2 className="section-title">La diferencia Kineo-UMF</h2>
          <p className="section-subtitle mx-auto">Más de dos décadas de experiencia nos respaldan.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-5">
              <div className="w-14 h-14 bg-navy-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <r.icon className="w-7 h-7 text-navy-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-2">{r.title}</h3>
                <p className="text-brand-muted leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
