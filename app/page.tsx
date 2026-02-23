import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="relative h-screen w-full">
        <Image
          src="https://kineo-umf.com/wp-content/uploads/2024/04/kineo-0492.jpg"
          alt="Kineo UMF Hero Image - Clinic interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Image
            src="https://kineo-umf.com/wp-content/uploads/2023/08/site-logo.png"
            alt="Kineo UMF Logo"
            width={300}
            height={102}
            priority
          />
        </div>
      </section>
    </main>
  );
}