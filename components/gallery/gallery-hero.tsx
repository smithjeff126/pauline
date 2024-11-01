import Image from "next/image";

export function GalleryHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
        alt="Hotel Gallery"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Photo Gallery
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Experience the beauty and luxury of Pauline Hotels through our curated collection
        </p>
      </div>
    </section>
  );
}