import Image from "next/image";
import { Card } from "@/components/ui/card";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
    alt: "Luxury Suite",
    category: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80",
    alt: "Swimming Pool",
    category: "Amenities",
  },
  {
    src: "https://images.unsplash.com/photo-1514516345957-556ca7c90a29?auto=format&fit=crop&q=80",
    alt: "Restaurant",
    category: "Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80",
    alt: "Spa",
    category: "Wellness",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
    alt: "Royal Suite",
    category: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?auto=format&fit=crop&q=80",
    alt: "Gym",
    category: "Fitness",
  },
  {
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
    alt: "Deluxe Room",
    category: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80",
    alt: "Fine Dining",
    category: "Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80",
    alt: "Garden Restaurant",
    category: "Dining",
  },
];

export function GalleryGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative h-80">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-lg font-semibold">{image.alt}</p>
                    <p className="text-sm opacity-75">{image.category}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}