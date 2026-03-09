import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "How We Work", path: "/how-we-work" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="bg-background/10 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand + tagline */}
          <div className="text-center md:text-left">
            <img
              src="/images/logo/Gemini_Generated_Image_sss5a4sss5a4sss5-removebg-preview.png"
              alt="Launch & Close"
              className="h-16 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Senior revenue leadership, without the headcount risk.
            </p>
          </div>

          {/* Center nav links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@launchandclose.com"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border/40">
          <p className="text-center text-xs text-muted-foreground">
            © {currentYear} Launch & Close. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
  ;

export default Footer;
