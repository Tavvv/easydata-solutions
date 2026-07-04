import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { key: 'nav.home', path: '' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.services', path: '/services' },
  { key: 'nav.eec', path: '/eec-it-solutions' },
  { key: 'nav.boi', path: '/boi-incentives' },
  { key: 'nav.blog', path: '/blog' },
  { key: 'nav.contact', path: '/contact' },
];

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathMatch = location.pathname.match(/^\/(en|zh|th)(.*)/);
  const currentLang = pathMatch ? pathMatch[1] : 'en';
  const pathAfterLang = pathMatch ? pathMatch[2] || '/' : location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    const current = pathAfterLang.replace(/\/$/, '') || '/';
    const target = (path || '/').replace(/\/$/, '') || '/';
    return current === target;
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={`/${currentLang}`} className="flex items-center gap-2.5">
            <img
              src="/favicon.png"
              alt="Easy Data Solutions"
              className="h-14 w-14 rounded-lg object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#1a237e]">Easy Data Solutions</span>
              <span className="text-xs text-[#5a5a6e]">IT Infrastructure | EEC Thailand</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={`/${currentLang}${item.path}`}
                className={`text-sm font-medium transition-colors relative py-5 ${
                  isActive(item.path)
                    ? 'text-[#2962ff] border-b-2 border-[#2962ff]'
                    : 'text-[#1a1a2e] hover:text-[#2962ff]'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Desktop Language Switcher */}
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-[#1a237e] cursor-pointer"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <span className="font-bold text-[#1a237e]">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 text-[#1a237e] cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-2 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={`/${currentLang}${item.path}`}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-[#2962ff] bg-blue-50'
                      : 'text-[#1a1a2e] hover:bg-gray-50'
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-gray-100">
              <LanguageSwitcher />
            </div>
          </div>
        </>
      )}
    </header>
  );
}
