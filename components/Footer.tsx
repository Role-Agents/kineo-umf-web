import Link from 'next/link';
import { MapPin, Mail } from 'lucide-react';

const footerLinks = [
  {
    title: 'Servicios',
    links: [
      { href: '/servicios/terapia-fisica', label: 'Terapia Física' },
      { href: '/servicios/rehabilitacion-cardiaca', label: 'Rehabilitación Cardiaca' },
      { href: '/servicios/acupuntura', label: 'Acupuntura Médica' },
      { href: '/servicios/pilates', label: 'Pilates Clínico' },
      { href: '/servicios/terapia-leduc', label: 'Terapia LEDUC' },
      { href: '/servicios/terapia-psicocorporal', label: 'Terapia Psicocorporal' }
    ]
  },
  {
    title: 'Clínica',
    links: [
      { href: '/quienes-somos', label: '¿Quiénes somos?' },
      { href: '/convenios-2', label: 'Seguros Médicos' },
      { href: '/expats-foreign-insurance', label: 'Expats' },
      { href: '/preguntas-frecuentes', label: 'FAQ' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-navy-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold inline-block mb-4">Kineo<span className="text-teal-medical">-UMF</span></Link>
            <p className="text-blue-100 text-sm leading-relaxed max-w-xs mb-6">Centro Médico de Rehabilitación Física Especializada. Comprometidos con tu recuperación y bienestar.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-blue-100"><MapPin className="w-4 h-4 text-teal-medical flex-shrink-0" /><span>Ciudad de México, México</span></div>
              <div className="flex items-center gap-3 text-sm text-blue-100"><Mail className="w-4 h-4 text-teal-medical flex-shrink-0" /><span>info@kineo-umf.com</span></div>
            </div>
          </div>
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="font-bold text-sm uppercase tracking-wider text-teal-medical mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-blue-100 hover:text-white transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-100">© {new Date().getFullYear()} Kineo-UMF. Todos los derechos reservados.</p>
          <Link href="/contacto" className="text-sm text-teal-medical hover:text-white transition-colors">Agendar cita →</Link>
        </div>
      </div>
    </footer>
  );
}
