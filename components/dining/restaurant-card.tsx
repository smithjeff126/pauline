import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  name: string;
  description: string;
  image: string;
  cuisine: string;
  hours: string;
  capacity: number;
  specialties: string[];
}

export function RestaurantCard({
  name,
  description,
  image,
  cuisine,
  hours,
  capacity,
  specialties,
}: RestaurantCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-black">
            {cuisine}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{hours}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span className="text-sm">Up to {capacity} guests</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {specialties.map((specialty, index) => (
            <Badge key={index} variant="outline">
              {specialty}
            </Badge>
          ))}
        </div>
        <Button className="w-full">Reserve a Table</Button>
      </CardContent>
    </Card>
  );
}