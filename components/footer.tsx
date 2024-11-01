import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pauline Hotels</h3>
            <p className="text-muted-foreground">
              Experience luxury and comfort in the heart of the city.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/rooms"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  href="/dining"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Plot 7 B Dokolo Road</li>
              <li>Lira City, Uganda</li>
              <li>+256 779203214</li>
              <li>paulinehotels@yahoo.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Pauline Hotels. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
