const stats = [
  { value: '20+', label: 'Años de experiencia' },
  { value: '15,000+', label: 'Pacientes atendidos' },
  { value: '19', label: 'Servicios especializados' },
  { value: '95%', label: 'Satisfacción del paciente' }
];

export default function Stats() {
  return (
    <section className="bg-white py-16 px-4 border-b border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">{stat.value}</p>
            <p className="text-brand-muted text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
