import { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import { Globe, FileText, Languages, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Expats & Foreign Insurance | Kineo-UMF',
  description: 'Specialized physical rehabilitation for expatriates and international patients.'
};

const features = [
  { icon: Languages, title: 'Bilingual Care', description: 'Consultations and treatment coordination in English and Spanish.' },
  { icon: Shield, title: 'International Insurance', description: 'We work with major international insurance providers.' },
  { icon: FileText, title: 'Documentation', description: 'All required documentation provided in English for insurance claims.' },
  { icon: Globe, title: 'Global Standards', description: 'Treatments follow internationally recognized clinical protocols.' }
];

export default function ExpatsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-500 to-[#2E7DAE] text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-medical font-semibold text-sm uppercase tracking-widest mb-4">International Patients</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Expats & Foreign Insurance</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">World-class physical rehabilitation for expatriates and international patients in Mexico.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {features.map((f) => (
              <div key={f.title} className="card p-8 flex gap-5">
                <div className="w-14 h-14 bg-teal-medical/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-7 h-7 text-teal-medical" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-2">{f.title}</h3>
                  <p className="text-brand-muted leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-brand-light rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Ready to Schedule?</h2>
            <p className="text-brand-muted mb-8 max-w-xl mx-auto">Contact us in English or Spanish. We will guide you through scheduling and insurance verification.</p>
            <Link href="/contacto" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
