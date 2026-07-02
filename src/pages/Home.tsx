import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import {
  Server,
  Database,
  Network,
  Shield,
  ShoppingCart,
  Factory,
  Check,
  MapPin,
  ChevronRight,
  Mail,
  Phone,
  ArrowRight,
} from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'en';

  const services = [
    {
      icon: Server,
      title: t('services_section.card_1_title'),
      desc: t('services_section.card_1_desc'),
    },
    {
      icon: Shield,
      title: t('services_section.card_2_title'),
      desc: t('services_section.card_2_desc'),
    },
    {
      icon: ShoppingCart,
      title: t('services_section.card_3_title'),
      desc: t('services_section.card_3_desc'),
    },
    {
      icon: Factory,
      title: t('services_section.card_4_title'),
      desc: t('services_section.card_4_desc'),
    },
  ];

  const provinces = [
    {
      name: t('eec_section.chonburi'),
      desc: t('eec_section.chonburi_desc'),
      estates: ['Laem Chabang', 'Amata City', 'Pinthong Industrial'],
    },
    {
      name: t('eec_section.rayong'),
      desc: t('eec_section.rayong_desc'),
      estates: ['IRPC Eco-Industrial', 'Map Ta Phut', 'Eastern Seaboard'],
    },
    {
      name: t('eec_section.chachoengsao'),
      desc: t('eec_section.chachoengsao_desc'),
      estates: ['Gateway City', 'Bang Pakong', 'Honda Supply Chain'],
    },
  ];

  const clients = [
    {
      name: t('client_section.chicony'),
      desc: t('client_section.chicony_desc'),
      value: 'THB 4.35M',
      tags: ['Oracle', 'VMware', 'Windows Server'],
      placeholder: false,
    },
    {
      name: t('client_section.merry'),
      desc: t('client_section.merry_desc'),
      value: 'THB 320K',
      tags: ['Network', 'Hardware'],
      placeholder: false,
    },
    {
      name: 'Coming Soon',
      desc: 'New EEC manufacturing clients onboarding in 2025.',
      value: null,
      tags: [],
      placeholder: true,
    },
    {
      name: 'Coming Soon',
      desc: 'New EEC manufacturing clients onboarding in 2025.',
      value: null,
      tags: [],
      placeholder: true,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6">
              {t('hero.subtitle')}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={`/${currentLang}/contact`}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
                {t('hero.cta_primary')}
              </Link>
              <Link
                to={`/${currentLang}/services`}
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                {t('hero.cta_secondary')}
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative icons */}
        <div className="absolute top-10 left-10 opacity-10 hidden md:block">
          <Server className="w-20 h-20" />
        </div>
        <div className="absolute top-20 right-16 opacity-10 hidden md:block">
          <Database className="w-16 h-16" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10 hidden md:block">
          <Network className="w-24 h-24" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 hidden md:block">
          <Shield className="w-20 h-20" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              {t('services_section.title')}
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              {t('services_section.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-surface rounded-lg p-6 border border-transparent hover:shadow-xl hover:border-accent/30 transition-all duration-300"
              >
                <service.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-text mb-2">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed mb-4">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={`/${currentLang}/services`}
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              Explore All Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* EEC Coverage */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              {t('eec_section.title')}
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              {t('eec_section.subtitle')}
            </p>
          </div>

          {/* Simple SVG map representation */}
          <div className="flex justify-center mb-10">
            <svg
              viewBox="0 0 400 600"
              className="w-64 h-96 md:w-80 md:h-[28rem]"
              aria-label="EEC Thailand Map"
            >
              {/* Thailand outline simplified */}
              <path
                d="M200 40 C220 35, 240 50, 250 70 C260 90, 255 110, 245 130 C235 150, 240 170, 250 190 C260 210, 270 230, 265 250 C260 270, 250 290, 255 310 C260 330, 270 350, 275 370 C280 390, 275 410, 270 430 C265 450, 250 470, 240 490 C230 510, 220 530, 210 550 C200 560, 190 550, 185 540 C180 530, 175 520, 170 510 C165 500, 160 490, 155 480 C150 470, 145 460, 140 450 C135 440, 130 430, 125 420 C120 410, 115 400, 110 390 C105 380, 100 370, 95 360 C90 350, 85 340, 80 330 C75 320, 70 310, 65 300 C60 290, 55 280, 50 270 C45 260, 40 250, 35 240 C30 230, 25 220, 20 210 C15 200, 10 190, 5 180 C0 170, 5 160, 10 150 C15 140, 20 130, 25 120 C30 110, 35 100, 40 90 C45 80, 50 70, 55 60 C60 50, 70 40, 80 35 C90 30, 100 25, 110 20 C120 15, 130 10, 140 8 C150 6, 160 5, 170 5 C180 5, 190 10, 200 40 Z"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="2"
              />
              {/* Chonburi circle */}
              <circle cx="220" cy="210" r="12" fill="#2962ff" opacity="0.8" />
              <text x="220" y="215" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                CBI
              </text>
              {/* Rayong circle */}
              <circle cx="250" cy="240" r="12" fill="#1a237e" opacity="0.8" />
              <text x="250" y="245" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                RYG
              </text>
              {/* Chachoengsao circle */}
              <circle cx="200" cy="180" r="12" fill="#059669" opacity="0.8" />
              <text x="200" y="185" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                CCO
              </text>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {provinces.map((province, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-sm border border-border"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold text-text">{province.name}</h3>
                </div>
                <p className="text-text-muted mb-4">{province.desc}</p>
                <ul className="space-y-2">
                  {province.estates.map((estate, eidx) => (
                    <li key={eidx} className="flex items-center gap-2 text-sm text-text-muted">
                      <Check className="w-4 h-4 text-success" />
                      {estate}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to={`/${currentLang}/eec-it-solutions`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {t('eec_section.cta')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Proof / Trust Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              {t('client_section.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-6 border transition-all duration-300 ${
                  client.placeholder
                    ? 'bg-surface border-border opacity-60'
                    : 'bg-white border-border shadow-sm hover:shadow-md'
                }`}
              >
                <h3 className="text-lg font-bold text-text mb-2">{client.name}</h3>
                <p className="text-text-muted text-sm mb-4">{client.desc}</p>
                {client.value && (
                  <div className="inline-flex items-center bg-accent/10 text-accent font-bold px-3 py-1 rounded-full text-sm mb-4">
                    {client.value}
                  </div>
                )}
                {client.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {client.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="inline-flex items-center gap-1 text-xs bg-success/10 text-success px-2 py-1 rounded"
                      >
                        <Check className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Factory&apos;s IT Backbone?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Free IT Infrastructure Assessment — No Obligation
          </p>
          <Link
            to={`/${currentLang}/contact`}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors mb-8"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
            <a
              href={`mailto:${t('contact.email')}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              {t('contact.email')}
            </a>
            <span className="inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {t('contact.phone')}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
