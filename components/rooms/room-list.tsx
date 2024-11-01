import { RoomCard } from './room-card';

const rooms = [
  {
    title: 'Standard Room',
    description: 'Spacious room with city views and modern amenities',
    price: 'Ugx 125,000',
    image:
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
    size: '45 m²',
    capacity: 1,
    amenities: [
      'Bed and Breakfast',
      'Sauna',
      'Aerobaic',
      'Gym',
      'Steam Bath',
      'Free Wifi',
    ],
  },
  {
    title: 'Deluxe Room',
    description: 'Elegant suite with separate living area and premium features',
    price: 'Ugx 155,000',
    image:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80',
    size: '65 m²',
    capacity: 2,
    amenities: [
      'Bed and Breakfast',
      'Sauna',
      'Aerobaic',
      'Gym',
      'Steam Bath',
      'Free Wifi',
    ],
  },
  {
    title: 'Royal Suite',
    description: 'Ultimate luxury with panoramic views and exclusive services',
    price: 'Ugx 305,000',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    size: '120 m²',
    capacity: 3,
    amenities: [
      'Bed and Breakfast',
      'Sauna',
      'Aerobaic',
      'Gym',
      'Steam Bath',
      'Free Wifi',
    ],
  },
];

export function RoomList() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}
