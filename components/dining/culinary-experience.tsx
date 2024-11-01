import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CulinaryExperience() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80"
              alt="Chef preparing food"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Culinary Excellence</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the artistry of our master chefs as they create
              extraordinary dishes using the finest local and international
              ingredients. Each plate is a masterpiece, combining traditional
              techniques with innovative approaches.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Master Chefs</h3>
                <p className="text-muted-foreground">
                  Internationally acclaimed culinary experts
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Fresh Ingredients</h3>
                <p className="text-muted-foreground">
                  Locally sourced, seasonal produce
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Wine Selection</h3>
                <p className="text-muted-foreground">
                  Curated collection of fine wines
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Dietary Options</h3>
                <p className="text-muted-foreground">
                  Customized menus for all preferences
                </p>
              </div>
            </div>
            <Button size="lg">Meet Our Chefs</Button>
          </div>
        </div>
      </div>
    </section>
  );
}