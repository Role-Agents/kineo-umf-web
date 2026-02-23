import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="bg-teal-medical py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para comenzar tu recuperación?</h2>
        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">Agenda tu consulta y da el primer paso hacia una vida sin limitaciones.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contacto" className="inline-flex items-center justify-center gap-2 bg-white text-teal-dark font-bold px-8 py-4 rounded-xl hover:bg-brand-light transition-colors">Agendar mi cita</Link>
          <Link href="/servicios" className="btn-outline-white px-8 py-4 rounded-xl">Ver servicios</Link>
        </div>
      </div>
    </section>
  );
}
