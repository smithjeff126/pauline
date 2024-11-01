import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Wifi, Users, Bath, Coffee } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RoomCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  size: string;
  capacity: number;
  amenities: string[];
}

export function RoomCard({
  title,
  description,
  price,
  image,
  size,
  capacity,
  amenities,
}: RoomCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-72">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-black">
            {size}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">{price}</p>
            <p className="text-sm text-muted-foreground">per night</p>
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span className="text-sm">Up to {capacity} guests</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span className="text-sm">Private bathroom</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {amenities.map((amenity, index) => (
            <Badge key={index} variant="secondary">
              {amenity}
            </Badge>
          ))}
        </div>
        <Button className="w-full">Book Now</Button>
      </CardContent>
    </Card>
  );
}