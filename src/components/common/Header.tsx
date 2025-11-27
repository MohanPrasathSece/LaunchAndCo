import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
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
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-xl font-semibold tracking-tight">
              <span className="text-foreground">Launch &amp; Close</span>
            </div>
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
              className="rounded-full bg-white text-background hover:bg-white/90 shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-20 bottom-0 z-[60] flex items-start justify-center bg-background/80 backdrop-blur-md pt-6 px-4 overflow-y-auto">
          <div className="w-full max-w-sm rounded-3xl bg-background/95 border border-primary/30 shadow-xl overflow-hidden">
            <div className="pt-4 pb-2 flex justify-center">
              <div className="h-1.5 w-16 rounded-full bg-primary/40" />
            </div>
            <div className="px-4 pb-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    handleNavClick(item.path);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium transition-smooth ${location.pathname === item.path
                    ? "bg-primary/15 text-foreground"
                    : "bg-transparent text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                    }`}
                >
                  <span>{item.name}</span>
                  <ChevronRight size={18} className="text-muted-foreground" />
                </button>
              ))}

              <Button
                asChild
                className="w-full mt-3 rounded-2xl bg-white text-background hover:bg-white/90 shadow-lg font-semibold"
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
