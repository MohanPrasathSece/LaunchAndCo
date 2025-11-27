import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import routes from "../../routes";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigation = routes.filter((route) => route.visible !== false);

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
        : 'bg-background/40 backdrop-blur-xl border-b border-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <img 
              src="/images/Gemini_Generated_Image_8ihek38ihek38ihe__1_-removebg-preview.png" 
              alt="Launch & Close Logo" 
              className="h-14 w-auto object-contain"
            />
          </Link>

          <div className="hidden xl:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-smooth ${location.pathname === item.path
                  ? "text-foreground bg-muted/40"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="rounded-full bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-lg hover:bg-muted transition-smooth text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-[60] pt-20">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative flex items-center justify-center min-h-full px-4 py-8">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} className="text-gray-600" />
                  </button>
                </div>
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => {
                        handleNavClick(item.path);
                        setIsMenuOpen(false);
                      }}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        location.pathname === item.path
                          ? "bg-primary text-primary-foreground"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
                  >
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
