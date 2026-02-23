const testimonials = [
  { name: 'María G.', condition: 'Recuperación de rodilla', text: 'Gracias al equipo de Kineo-UMF recuperé la movilidad completa después de mi cirugía. El trato es muy profesional y humano.', rating: 5 },
  { name: 'Carlos M.', condition: 'Rehabilitación cardiaca', text: 'Después de mi infarto, el programa de rehabilitación cardiaca me devolvió la confianza y la fuerza. El equipo me acompañó en cada paso.', rating: 5 },
  { name: 'Ana L.', condition: 'Terapia física', text: 'Vine con dolor crónico de espalda y en pocas semanas sentí una mejoría enorme. Las instalaciones son excelentes.', rating: 5 }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-brand-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-2">Testimonios</p>
          <h2 className="section-title">Lo que dicen nuestros pacientes</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="card p-8">
              <div className="flex gap-1 mb-4">{Array.from({length: t.rating}).map((_, i) => <span key={i} className="text-yellow-400 text-xl">★</span>)}</div>
              <p className="text-brand-muted leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-bold text-brand-primary">{t.name}</p>
                <p className="text-sm text-brand-muted">{t.condition}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
