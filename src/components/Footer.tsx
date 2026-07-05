import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import AnimatedSection from './AnimatedSection';

const quickLinks = [
  { key: 'nav.home', path: '' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.services', path: '/services' },
  { key: 'nav.eec', path: '/eec-it-solutions' },
  { key: 'nav.boi', path: '/boi-incentives' },
  { key: 'nav.blog', path: '/blog' },
  { key: 'nav.contact', path: '/contact' },
];

const serviceLinks = [
  { key: 'services_section.card_1_title', path: '/services' },
  { key: 'services_section.card_2_title', path: '/services' },
  { key: 'services_section.card_3_title', path: '/services' },
  { key: 'services_section.card_4_title', path: '/services' },
];

export default function Footer() {
  const { t } = useTranslation();
  const location = useLocation();

  const pathMatch = location.pathname.match(/^\/(en|zh|th)(.*)/);
  const currentLang = pathMatch ? pathMatch[1] : 'en';

  return (
    <footer className="bg-dark text-bg border-t border-border-subtle">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        {/* Main footer content */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <AnimatedSection className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img src="/favicon.png" alt="" className="h-10 w-10 rounded-lg object-contain opacity-90" />
              <div>
                <h3 className="text-[15px] font-semibold text-bg tracking-tight">Easy Data Solutions</h3>
                <p className="text-[10px] text-text-muted tracking-wide uppercase">EEC Thailand</p>
              </div>
            </div>
            <p className="text-caption text-text-secondary leading-relaxed max-w-xs mb-6">
              {t('footer.tagline')}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${t('contact.email')}`}
                className="flex items-center gap-2 text-caption text-text-secondary hover:text-accent-light transition-colors"
              >
                <Mail size={14} className="shrink-0" />
                <span>{t('contact.email')}</span>
              </a>
              <a
                href={`tel:${t('contact.phone')}`}
                className="flex items-center gap-2 text-caption text-text-secondary hover:text-accent-light transition-colors"
              >
                <Phone size={14} className="shrink-0" />
                <span>{t('contact.phone')}</span>
              </a>
              <div className="flex items-start gap-2 text-caption text-text-secondary">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span>{t('contact.location')}</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Quick links */}
          <AnimatedSection delay={0.1} className="lg:col-span-3">
            <h4 className="text-label text-text-muted mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={`/${currentLang}${link.path}`}
                    className="group text-caption text-text-secondary hover:text-bg transition-colors flex items-center gap-1"
                  >
                    <span>{t(link.key)}</span>
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5 translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Services */}
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <h4 className="text-label text-text-muted mb-5">{t('nav.services')}</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={`/${currentLang}${link.path}`}
                    className="group text-caption text-text-secondary hover:text-bg transition-colors flex items-center gap-1"
                  >
                    <span>{t(link.key)}</span>
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5 translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Newsletter / CTA */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <h4 className="text-label text-text-muted mb-5">Stay Updated</h4>
            <p className="text-caption text-text-secondary leading-relaxed mb-4">
              Weekly insights on EEC manufacturing IT, BOI updates, and industry trends.
            </p>
            <Link
              to={`/${currentLang}/blog`}
              className="text-caption text-accent-light hover:text-accent transition-colors flex items-center gap-1 group"
            >
              <span>Browse our blog</span>
              <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-small text-text-muted">
            {t('footer.copyright')}
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <span className="text-small text-text-muted">
              {t('footer.made_in')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
