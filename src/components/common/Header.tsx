import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/60'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center group z-50 relative" style={{ fontFamily: 'Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
            <img
              src="/images/Gemini_Generated_Image_8ihek38ihek38ihe__1_-removebg-preview.png"
              alt="Launch & Close Logo"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          <div className="hidden xl:flex items-center space-x-8">
            <Link
              to="/"
              onClick={() => handleNavClick('/')}
              className={`text-sm font-light px-4 py-2 rounded-full transition-smooth uppercase tracking-wide ${location.pathname === '/'
                ? "text-foreground bg-muted/40"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                }`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                className={`text-sm font-light px-4 py-2 rounded-full transition-smooth uppercase tracking-wide flex items-center ${location.pathname.startsWith('/services')
                  ? "text-foreground bg-muted/40"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                  }`}
              >
                Services
                <ChevronDown className="ml-1 w-3 h-3" />
              </button>
              
              <div
                className={`absolute top-full left-0 mt-1 w-56 bg-background/95 backdrop-blur-xl border border-border/60 rounded-lg shadow-lg overflow-hidden z-50 transition-all duration-200 ${
                  isServicesDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                }`}
              >
                <Link
                  to="/services#strategy"
                  className="block px-6 py-3 text-sm font-medium hover:bg-muted/20 transition-colors text-foreground"
                  onClick={(e) => {
                    e.preventDefault();
                    // Navigate to services page with hash
                    window.location.href = '/services#strategy';
                  }}
                >
                  Strategy
                </Link>
                <div className="border-t border-border/30" />
                <Link
                  to="/services#execution"
                  className="block px-6 py-3 text-sm font-medium hover:bg-muted/20 transition-colors text-foreground"
                  onClick={(e) => {
                    e.preventDefault();
                    // Navigate to services page with hash
                    window.location.href = '/services#execution';
                  }}
                >
                  Execution
                </Link>
                <div className="border-t border-border/30" />
                <Link
                  to="/services#tech"
                  className="block px-6 py-3 text-sm font-medium hover:bg-muted/20 transition-colors text-foreground"
                  onClick={(e) => {
                    e.preventDefault();
                    // Navigate to services page with hash
                    window.location.href = '/services#tech';
                  }}
                >
                  Tech & AI
                </Link>
              </div>
            </div>
            
            <Link
              to="/how-we-work"
              onClick={() => handleNavClick('/how-we-work')}
              className={`text-sm font-light px-4 py-2 rounded-full transition-smooth uppercase tracking-wide ${location.pathname === '/how-we-work'
                ? "text-foreground bg-muted/40"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                }`}
            >
              Engagement Models
            </Link>
            
            <Link
              to="/about"
              onClick={() => handleNavClick('/about')}
              className={`text-sm font-light px-4 py-2 rounded-full transition-smooth uppercase tracking-wide ${location.pathname === '/about'
                ? "text-foreground bg-muted/40"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                }`}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              onClick={() => handleNavClick('/contact')}
              className={`text-sm font-light px-4 py-2 rounded-full transition-smooth uppercase tracking-wide ${location.pathname === '/contact'
                ? "text-foreground bg-muted/40"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                }`}
            >
              Contact
            </Link>
            
            <Button
              asChild
              size="sm"
              className="rounded-full bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              <Link to="/contact">Book Strategy Call</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-full hover:bg-white/10 transition-smooth text-foreground z-50 relative"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-24 left-4 right-4 z-50 xl:hidden animate-in slide-in-from-top-5 fade-in zoom-in-95 duration-200">
            <div className="bg-black/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden" style={{ fontFamily: 'Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
              <nav className="flex flex-col space-y-2">
                <Link
                  to="/"
                  onClick={() => {
                    handleNavClick('/');
                    setIsMenuOpen(false);
                  }}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-all ${location.pathname === '/'
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                >
                  Home
                </Link>
                
                <div className="py-2">
                  <div className="text-white/70 px-4 py-2 font-medium">Services</div>
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/services#strategy"
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                      className="block text-white/60 hover:text-white hover:bg-white/5 py-2 px-4 rounded-lg transition-all"
                    >
                      Strategy
                    </Link>
                    <Link
                      to="/services#execution"
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                      className="block text-white/60 hover:text-white hover:bg-white/5 py-2 px-4 rounded-lg transition-all"
                    >
                      Execution
                    </Link>
                    <Link
                      to="/services#tech"
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                      className="block text-white/60 hover:text-white hover:bg-white/5 py-2 px-4 rounded-lg transition-all"
                    >
                      Tech & AI
                    </Link>
                  </div>
                </div>
                
                <Link
                  to="/how-we-work"
                  onClick={() => {
                    handleNavClick('/how-we-work');
                    setIsMenuOpen(false);
                  }}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-all ${location.pathname === '/how-we-work'
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                >
                  Engagement Models
                </Link>
                
                <Link
                  to="/about"
                  onClick={() => {
                    handleNavClick('/about');
                    setIsMenuOpen(false);
                  }}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-all ${location.pathname === '/about'
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                >
                  About
                </Link>
                
                <Link
                  to="/contact"
                  onClick={() => {
                    handleNavClick('/contact');
                    setIsMenuOpen(false);
                  }}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-all ${location.pathname === '/contact'
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                >
                  Contact
                </Link>
                
                <div className="pt-4 mt-2 border-t border-white/10">
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-xl bg-white text-black hover:bg-gray-200 font-bold shadow-lg"
                  >
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      Book Strategy Call
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
