import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-header' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to={`/${currentLang}`} className="flex items-center gap-3 group">
            <img
              src="/favicon.png"
              alt="Easy Data Solutions"
              className="h-11 w-11 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-[15px] font-semibold text-text tracking-tight leading-tight">
                Easy Data Solutions
              </span>
              <span className="text-[10px] text-text-muted tracking-wide uppercase">
                IT Infrastructure · EEC Thailand
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={`/${currentLang}${item.path}`}
                className={`relative px-3 py-2 text-[13px] font-medium transition-colors duration-300 rounded ${
                  isActive(item.path)
                    ? 'text-[#3C8CC8]'
                    : 'text-text-secondary hover:text-text'
                }`}
              >
                {t(item.key)}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#3C8CC8] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-px h-4 bg-border" />
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="p-2 text-text rounded-lg hover:bg-surface transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[#0A1628]/50 z-50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-surface z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="text-label text-text-muted">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-text rounded-lg hover:bg-surface-elevated transition-colors"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="flex flex-col p-4 gap-1 flex-1">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    to={`/${currentLang}${item.path}`}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-[#3C8CC8] bg-[#3C8CC8]/10'
                        : 'text-text-secondary hover:text-text hover:bg-surface-elevated'
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </nav>
              <div className="p-6 border-t border-border">
                <LanguageSwitcher />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
