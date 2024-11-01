import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function PrivateDining() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Private Dining</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create unforgettable moments with our exclusive private dining
            experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Private Room</h3>
              <p className="text-muted-foreground mb-4">
                Elegant private space perfect for special celebrations
              </p>
              <ul className="space-y-2 mb-6">
                <li>Up to 20 guests</li>
                <li>Customizable setup</li>
                <li>Dedicated service</li>
                <li>Audio-visual equipment</li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Garden Terrace</h3>
              <p className="text-muted-foreground mb-4">
                Al fresco dining experience in our beautiful garden setting
              </p>
              <ul className="space-y-2 mb-6">
                <li>Up to 40 guests and more</li>
                <li>Outdoor setting</li>
                <li>BBQ options</li>
                <li>Weather backup venue</li>
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
