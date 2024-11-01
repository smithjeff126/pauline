import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Utensils, Wifi, Car, Coffee } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Wifi className="h-6 w-6" />,
      title: 'Free Wi-Fi',
      description: 'High-speed internet throughout the property',
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: 'Fine Dining',
      description: 'Award-winning restaurants and bars',
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: 'Valet Parking',
      description: 'Complimentary valet parking service',
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: '24/7 Service',
      description: 'Round-the-clock concierge and room service',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80"
          alt="Luxury Hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Pauline Hotels
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience luxury like never before
          </p>
          <Button size="lg" className="text-lg">
            Book Your Stay
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Pauline Hotels
            </h2>
            <p className="text-muted-foreground">
              Discover the perfect blend of luxury, comfort, and exceptional
              service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Luxurious Rooms</h2>
            <p className="text-muted-foreground">
              Choose from our selection of premium accommodations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Standard rooms',
                image:
                  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
                price: 'Ugx 125,000',
              },
              {
                title: 'Deluxe room',
                image:
                  'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80',
                price: 'Ugx 155,000',
              },
              {
                title: 'Royal Suite',
                image:
                  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
                price: 'Ugx 305,000',
              },
            ].map((room, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{room.title}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary mb-4">
                    {room.price}
                    <span className="text-sm text-muted-foreground">
                      /night
                    </span>
                  </p>
                  <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
