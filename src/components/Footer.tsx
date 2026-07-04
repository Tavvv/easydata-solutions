import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, MessageCircle, Globe, Share2 } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

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
    <footer className="bg-[#1a237e] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">Easy Data Solutions</h3>
            <p className="text-blue-200 text-sm mb-4">{t('footer.tagline')}</p>
            <div className="flex items-start gap-2 text-sm text-blue-100">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{t('contact.location')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={`/${currentLang}${link.path}`}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t('nav.services')}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={`/${currentLang}${link.path}`}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t('nav.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-blue-100">
                <Mail size={16} />
                <span>{t('contact.email')}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-100">
                <Phone size={16} />
                <span>{t('contact.phone')}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-100">
                <MessageCircle size={16} />
                <span>{t('contact.wechat_title')}</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="Website">
                <Globe size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="Social">
                <Share2 size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Language Switcher + Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-blue-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <LanguageSwitcher />
          <div className="text-center sm:text-right text-sm text-blue-200">
            <p>{t('footer.copyright')}</p>
            <p>{t('footer.made_in')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
