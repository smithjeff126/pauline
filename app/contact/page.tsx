import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { LocationInfo } from "@/components/contact/location-info";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <LocationInfo />
        </div>
      </div>
    </main>
  );
}