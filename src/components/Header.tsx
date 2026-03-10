import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const threshold = isHome ? window.innerHeight - 100 : 50;
          setIsScrolled(currentScrollY > threshold);

          // Smart hide/show logic
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsVisible(false); // Scrolling down & past threshold -> Hide
          } else {
            setIsVisible(true); // Scrolling up -> Show
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Simplified header logic:
  // Home: Transparent initially, then solid background on scroll.
  // Others: Always solid for clarity, or transparent if needed but usually solid is better for readability.
  // Actually, keeping the "transparent at top" for others is fine if content allows, but let's make it more standard/solid for others to ensure "calm authority".
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-calm ${isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${isHome
      ? (isScrolled ? 'bg-background/95 backdrop-blur-xl py-4 border-b border-border/10' : 'bg-transparent py-6')
      : 'bg-background/95 backdrop-blur-xl py-4 border-b border-border/10'
    }`;

  // Text color logic
  // Home + Not Scrolled = White (over video) -> Force pure white
  // Home + Scrolled = Foreground (over light bg)
  // Others = Foreground
  const textColor = (isHome && !isScrolled) ? 'text-white' : 'text-foreground';
  const finalTextColor = isMobileMenuOpen ? 'text-foreground' : textColor;

  return (
    <header className={headerClasses}>
      <div className="w-full px-6 md:px-12 max-w-[1920px] mx-auto flex items-center justify-between">
        <Link to="/" className="group relative z-[60]">
          <div className={`text-5xl md:text-6xl font-logo font-extrabold tracking-tight transition-colors duration-500 ${finalTextColor}`}>
            wawa<sup className="text-sm md:text-base align-super font-bold ml-0.5">®</sup>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { path: '/servicios', label: 'Servicios' },
            { path: '/sobre-wawa', label: 'Sobre Wawa' },
            { path: '/contacto', label: 'Contacto' },
          ].map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`group/link relative flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-normal transition-all duration-300 ${textColor} font-sans`}
              >
                {/* Active state dot */}
                <span className={`w-1.5 h-1.5 rounded-full bg-current transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'
                  }`} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className={`md:hidden relative z-[60] ${finalTextColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background flex flex-col items-center justify-center transition-all duration-500 ease-calm md:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {[
            { path: '/', label: 'Inicio' },
            { path: '/servicios', label: 'Servicios' },
            { path: '/sobre-wawa', label: 'Sobre Wawa' },
            { path: '/contacto', label: 'Contacto' },
          ].map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg uppercase tracking-[0.15em] font-normal transition-all duration-300 ${isActive ? 'text-foreground opacity-100' : 'text-foreground/70 hover:opacity-100'
                  } font-sans`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
