import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-brand-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-brand-primary mb-3">Página no encontrada</h2>
        <p className="text-brand-muted mb-8">La página que buscas no existe o fue movida.</p>
        <Link href="/" className="btn-primary">Volver al inicio</Link>
      </div>
    </div>
  );
}
