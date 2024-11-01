import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export function LocationInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-muted-foreground">
                Plot 7 B Dokolo Road
                <br />
                Lira City, Uganda
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-muted-foreground">+256 779203214</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-muted-foreground">paulinehotels@yahoo.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Hours</h3>
              <p className="text-muted-foreground">
                24/7 Front Desk
                <br />
                Check-in: 2:00 PM
                <br />
                Check-out: 11:00 AM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
        <div className="flex space-x-4">
          <a
            href="#"
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}