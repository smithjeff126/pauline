import Image from "next/image";

export function RoomHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80"
        alt="Luxury Hotel Rooms"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Luxurious Rooms & Suites
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Discover the perfect accommodation for your stay, combining comfort with
          elegant design
        </p>
      </div>
    </section>
  );
}