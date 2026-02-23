import { Metadata } from 'next';
import { MapPin, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto | Kineo-UMF',
  description: 'Contacta a Kineo-UMF para agendar tu cita.'
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-500 to-[#2E7DAE] text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-medical font-semibold text-sm uppercase tracking-widest mb-4">Estamos aquí para ti</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
          <p className="text-lg text-blue-100">Agenda tu cita o contáctanos para cualquier consulta.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-brand-primary mb-8">Información de contacto</h2>
            <div className="space-y-6">
              {[{icon: MapPin, label: 'Dirección', value: 'Ciudad de México, México'},{icon: Mail, label: 'Correo', value: 'info@kineo-umf.com'},{icon: Clock, label: 'Horario', value: 'Lun–Vie: 8:00–7:00 PM | Sáb: 9:00–2:00 PM'}].map(({icon: Icon, label, value}) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-medical/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-teal-medical" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-primary">{label}</p>
                    <p className="text-brand-muted mt-1">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-light rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Envíanos un mensaje</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-brand-primary mb-1">Nombre completo</label>
                <input type="text" id="nombre" name="nombre" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent bg-white" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-primary mb-1">Correo electrónico</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent bg-white" placeholder="tu@correo.com" />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-brand-primary mb-1">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent bg-white resize-none" placeholder="Cuéntanos sobre tu situación..." />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
