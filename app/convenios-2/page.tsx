import { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';
import { Shield, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Seguros Médicos | Kineo-UMF',
  description: 'Seguros y convenios médicos en Kineo-UMF.'
};

const insurances = ['AXA Seguros','GNP Seguros','Mapfre','Metlife','BBVA Seguros','Seguros SURA','Allianz','Zurich','Bupa México','HMS','Beneficencia Española','Anglo Americana'];

export default function SegurosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-500 to-[#2E7DAE] text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-medical font-semibold text-sm uppercase tracking-widest mb-4">Convenios</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Seguros Médicos</h1>
          <p className="text-lg text-blue-100">Trabajamos con las principales aseguradoras de México.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-12 h-12 text-brand-accent mx-auto mb-4" />
            <h2 className="section-title">Aseguradoras con las que trabajamos</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {insurances.map((ins) => (
              <div key={ins} className="flex items-center gap-3 bg-brand-light rounded-xl px-5 py-4">
                <CheckCircle className="w-5 h-5 text-teal-medical flex-shrink-0" />
                <span className="font-medium text-brand-primary">{ins}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
