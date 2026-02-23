import Image from 'next/image';

export default function Servicios() {
  return (
    <main className="container mx-auto p-8 py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Nuestros Servicios</h1>
          <p className="text-xl mb-8 text-gray-700">Rehabilitación física especializada.</p>
        </div>
        <Image
          src="https://kineo-umf.com/wp-content/uploads/2024/06/pexels-photo-5473899.jpeg"
          alt="Pilates and therapy services at Kineo UMF"
          width={600}
          height={450}
          className="w-full h-auto rounded-2xl shadow-2xl object-cover"
          priority
        />
      </div>
    </main>
  );
}