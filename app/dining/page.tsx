import { DiningHero } from "@/components/dining/dining-hero";
import { RestaurantList } from "@/components/dining/restaurant-list";
import { CulinaryExperience } from "@/components/dining/culinary-experience";
import { PrivateDining } from "@/components/dining/private-dining";

export default function DiningPage() {
  return (
    <main>
      <DiningHero />
      <RestaurantList />
      <CulinaryExperience />
      <PrivateDining />
    </main>
  );
}