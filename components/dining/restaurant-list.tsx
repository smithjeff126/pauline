import { RestaurantCard } from './restaurant-card';

const restaurants = [
  {
    name: 'Restaurant',
    description:
      'Fine dining restaurant featuring modern Foods with a local twist',
    image:
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80',
    hours: '6:00 AM - 10:30 PM',
    capacity: 60,
    specialties: ['Breakfast', 'Wine Pairing', 'Lunch'],
  },
  {
    name: 'Victoria and Kidepo Hall',
    description:
      'Fine dining halls featuring all kinds of modern Foods with a local twist',
    image:
      'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&q=80',
    hours: '7:00 AM - 6:00 PM',
    capacity: 50,
    specialties: ['Piza', 'BBQ', 'Dinner', 'Refresments'],
  },
  {
    name: 'The Garden',
    description: 'Al fresco dining with all local and international dishes',
    image:
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80',
    hours: '7:00 AM - 10:00 PM',
    capacity: 100,
    specialties: ['Breakfast', 'BBQ', 'Evening Tea', 'Dinner'],
  },
];

export function RestaurantList() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
}
