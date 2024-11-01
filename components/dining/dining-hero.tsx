import Image from "next/image";

export function DiningHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80"
        alt="Luxury Dining Experience"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Exceptional Dining Experiences
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Discover culinary excellence through our world-class restaurants and bars
        </p>
      </div>
    </section>
  );
}