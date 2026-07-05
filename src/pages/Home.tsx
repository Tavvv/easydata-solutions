import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Server,
  Shield,
  ShoppingCart,
  Factory,
  MapPin,
  ChevronRight,
  Mail,
  Phone,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem, HeroReveal } from '../components/AnimatedSection';

export default function Home() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'en';

  const services = [
    { icon: Server, key: 'card_1' },
    { icon: Shield, key: 'card_2' },
    { icon: ShoppingCart, key: 'card_3' },
    { icon: Factory, key: 'card_4' },
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
      tags: ['Oracle', 'VMware', 'Windows Server'],
    },
  ];

  return (
    <div>
      {/* Hero Section — Full viewport, dark, centered, dramatic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute inset-0 noise-texture" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-[10%] w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden md:block" />
        <div className="absolute bottom-1/3 right-[15%] w-px h-48 bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden md:block" />
        <div className="absolute top-[15%] right-[20%] w-2 h-2 rounded-full bg-accent/30 hidden md:block" />
        <div className="absolute bottom-[25%] left-[25%] w-1.5 h-1.5 rounded-full bg-accent/20 hidden md:block" />

        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10 text-center py-32">
          <HeroReveal delay={0.1}>
            <div className="editorial-line mx-auto mb-8" />
          </HeroReveal>

          <HeroReveal delay={0.2}>
            <h1 className="text-display text-bg max-w-4xl mx-auto mb-6">
              {t('hero.title')}
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.35}>
            <p className="text-subheading text-accent-light max-w-2xl mx-auto mb-4">
              {t('hero.subtitle')}
            </p>
          </HeroReveal>

          <HeroReveal delay={0.5}>
            <p className="text-body-large text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              {t('hero.description')}
            </p>
          </HeroReveal>

          <HeroReveal delay={0.65}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={`/${currentLang}/contact`}
                className="btn-primary"
              >
                {t('hero.cta_primary')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={`/${currentLang}/services`}
                className="btn-secondary text-bg border-white/20 hover:border-accent hover:text-accent-light"
              >
                {t('hero.cta_secondary')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </HeroReveal>

          {/* Scroll indicator */}
          <HeroReveal delay={1.2}>
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2">
                <div className="w-1 h-2 rounded-full bg-accent-light" />
              </div>
            </motion.div>
          </HeroReveal>
        </div>
      </section>

      {/* Services — Asymmetric editorial grid */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <AnimatedSection className="mb-16">
            <div className="editorial-line mb-6" />
            <h2 className="text-heading text-text mb-4">{t('services_section.title')}</h2>
            <p className="text-body-large text-text-secondary max-w-xl">
              {t('services_section.subtitle')}
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <StaggerItem key={idx}>
                <div className="group relative bg-surface-elevated border border-border rounded-lg p-8 lg:p-10 card-hover">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-lg bg-accent-subtle flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-500">
                      <service.icon className="w-5 h-5 text-accent group-hover:text-accent-fg transition-colors duration-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-subheading text-text mb-2 group-hover:text-accent transition-colors duration-300">
                        {t(`services_section.${service.key}_title`)}
                      </h3>
                      <p className="text-body text-text-secondary leading-relaxed">
                        {t(`services_section.${service.key}_desc`)}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-accent" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="mt-12 text-center">
            <Link
              to={`/${currentLang}/services`}
              className="inline-flex items-center gap-2 text-caption font-medium text-accent hover:text-accent-light transition-colors group"
            >
              Explore all services
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* EEC Coverage — Split editorial layout */}
      <section className="section-padded bg-surface border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Map visual + heading */}
            <AnimatedSection className="lg:col-span-5">
              <div className="editorial-line mb-6" />
              <h2 className="text-heading text-text mb-4">{t('eec_section.title')}</h2>
              <p className="text-body-large text-text-secondary mb-10">
                {t('eec_section.subtitle')}
              </p>

              {/* Abstract map */}
              <div className="relative aspect-[4/5] max-w-sm bg-surface-elevated rounded-lg border border-border overflow-hidden">
                <svg viewBox="0 0 200 250" className="absolute inset-0 w-full h-full opacity-20">
                  <path
                    d="M100 20 C110 18, 120 22, 125 30 C130 38, 128 46, 125 54 C122 62, 124 70, 128 78 C132 86, 136 94, 134 102 C132 110, 128 118, 130 126 C132 134, 136 142, 138 150 C140 158, 138 166, 135 174 C132 182, 126 190, 122 198 C118 206, 114 214, 110 222 C106 230, 100 234, 95 230 C90 226, 86 222, 84 216 C82 210, 80 204, 78 198 C76 192, 74 186, 72 180 C70 174, 68 168, 66 162 C64 156, 62 150, 60 144 C58 138, 56 132, 54 126 C52 120, 50 114, 48 108 C46 102, 44 96, 42 90 C40 84, 38 78, 36 72 C34 66, 32 60, 30 54 C28 48, 26 42, 24 36 C22 30, 20 24, 22 20 C24 16, 28 14, 32 12 C36 10, 40 8, 45 7 C50 6, 55 5, 60 5 C65 5, 70 6, 75 8 C80 10, 85 12, 90 14 C95 16, 100 20 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-text-muted"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-40 h-52">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20" />
                      <span className="text-[10px] font-semibold text-text bg-surface-elevated px-2 py-0.5 rounded border border-border">Chonburi</span>
                    </div>
                    <div className="absolute top-[55%] left-[65%] flex flex-col items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-accent-light ring-4 ring-accent-light/20" />
                      <span className="text-[10px] font-semibold text-text bg-surface-elevated px-2 py-0.5 rounded border border-border">Rayong</span>
                    </div>
                    <div className="absolute top-[20%] left-[35%] flex flex-col items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-text-muted ring-4 ring-text-muted/20" />
                      <span className="text-[10px] font-semibold text-text bg-surface-elevated px-2 py-0.5 rounded border border-border">Chachoengsao</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Province cards */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <StaggerContainer staggerDelay={0.1} className="space-y-6">
                {provinces.map((province, idx) => (
                  <StaggerItem key={idx}>
                    <div className="group bg-surface-elevated border border-border rounded-lg p-6 lg:p-8 card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-subheading text-text mb-2">{province.name}</h3>
                          <p className="text-caption text-text-secondary mb-4 leading-relaxed">{province.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {province.estates.map((estate) => (
                              <span
                                key={estate}
                                className="px-2.5 py-1 rounded bg-surface text-caption text-text-secondary border border-border"
                              >
                                {estate}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <AnimatedSection delay={0.4} className="mt-8">
                <Link
                  to={`/${currentLang}/eec-it-solutions`}
                  className="btn-primary"
                >
                  {t('eec_section.cta')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Client Proof — Minimal, elegant */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <AnimatedSection className="mb-12 text-center">
            <div className="editorial-line mx-auto mb-6" />
            <h2 className="text-heading text-text">{t('client_section.title')}</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-surface-elevated border border-border rounded-lg p-6 card-hover h-full">
                  <h3 className="text-subheading text-text mb-2">{client.name}</h3>
                  <p className="text-caption text-text-secondary mb-5 leading-relaxed">{client.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {client.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-accent-subtle text-caption text-accent font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
            {[1, 2, 3].map((i) => (
              <StaggerItem key={`placeholder-${i}`}>
                <div className="bg-surface border border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center h-full min-h-[160px]">
                  <span className="text-caption text-text-muted">New projects coming in 2025</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA — Dark, dramatic */}
      <section className="relative section-padded bg-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 noise-texture" />

        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="editorial-line mx-auto mb-8" />
            <h2 className="text-hero text-bg mb-6">
              Ready to Build Your Factory&apos;s IT Backbone?
            </h2>
            <p className="text-body-large text-text-secondary mb-10">
              Free IT Infrastructure Assessment — No Obligation
            </p>
            <Link
              to={`/${currentLang}/contact`}
              className="btn-primary text-lg px-10 py-4"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-text-secondary">
            <a href={`mailto:${t('contact.email')}`} className="flex items-center gap-2 text-caption hover:text-accent-light transition-colors">
              <Mail className="w-4 h-4" />
              {t('contact.email')}
            </a>
            <a href={`tel:${t('contact.phone')}`} className="flex items-center gap-2 text-caption hover:text-accent-light transition-colors">
              <Phone className="w-4 h-4" />
              {t('contact.phone')}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
