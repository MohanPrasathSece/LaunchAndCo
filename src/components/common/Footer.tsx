import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Services", path: "/services" },
    { name: "Engagement Models", path: "/how-we-work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Launch & Close
            </h3>
            <p className="text-muted-foreground mb-4">
              Senior Revenue Leadership. Without the Headcount Risk.
            </p>
            <p className="text-muted-foreground text-sm">
              We build, operate, and transfer revenue engines for startups and SMBs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@launchandclose.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail size={18} />
                <span>hello@launchandclose.com</span>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Launch & Close
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
