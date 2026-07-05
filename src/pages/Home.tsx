import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Server, Shield, ShoppingCart, Factory, MapPin, ChevronRight,
  Mail, Phone, ArrowRight, ArrowUpRight, Award, Headset, Clock, Check
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem, HeroReveal } from '../components/AnimatedSection';

const partners = ['Oracle', 'VMware', 'Windows Server', 'Dell', 'HP', 'Cisco', 'Huawei'];

const services = [
  { icon: Server, key: 'card_1' },
  { icon: Shield, key: 'card_2' },
  { icon: ShoppingCart, key: 'card_3' },
  { icon: Factory, key: 'card_4' },
];

const provinces = [
  {
    name: 'Chonburi',
    desc: 'Gateway City, Laem Chabang, Amata City — home to EV supply chain, data centers, and robotics clusters.',
    estates: ['Laem Chabang', 'Amata City', 'Pinthong Industrial'],
  },
  {
    name: 'Rayong',
    desc: 'IRPC Eco-Industrial Zone, Map Ta Phut — chemical recycling, petrochemical, and data center boom.',
    estates: ['IRPC Eco-Industrial', 'Map Ta Phut', 'Eastern Seaboard'],
  },
  {
    name: 'Chachoengsao',
    desc: 'Gateway City Industrial Estate — Honda HEV supply chain and precision manufacturing.',
    estates: ['Gateway City', 'Bang Pakong', 'Honda Supply Chain'],
  },
];

export default function Home() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'en';

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8FAFC]">
        {/* Background gradient — subtle sphere glow */}
        <div className="absolute inset-0 sphere-glow" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
            <defs>
              <linearGradient id="sphereGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0A1628" />
                <stop offset="50%" stopColor="#3C8CC8" />
                <stop offset="100%" stopColor="#2890F0" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="80" fill="url(#sphereGrad)" opacity="0.3" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#3C8CC8" strokeWidth="0.5" opacity="0.4" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="#64B4FF" strokeWidth="0.5" opacity="0.3" />
            {/* Grid lines */}
            <line x1="20" y1="100" x2="180" y2="100" stroke="#3C8CC8" strokeWidth="0.3" opacity="0.2" />
            <line x1="100" y1="20" x2="100" y2="180" stroke="#3C8CC8" strokeWidth="0.3" opacity="0.2" />
            <line x1="40" y1="40" x2="160" y2="160" stroke="#3C8CC8" strokeWidth="0.3" opacity="0.15" />
            <line x1="160" y1="40" x2="40" y2="160" stroke="#3C8CC8" strokeWidth="0.3" opacity="0.15" />
          </svg>
        </div>
        <div className="absolute inset-0 noise-texture" />

        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Headline & CTAs */}
            <div className="lg:col-span-7">
              <HeroReveal delay={0.1}>
                <span className="text-label text-[#3C8CC8] tracking-widest mb-6 block">
                  {t('hero.label')}
                </span>
              </HeroReveal>

              <HeroReveal delay={0.2}>
                <h1 className="text-display text-[#0A1628] max-w-3xl mb-6">
                  {t('hero.title')}
                </h1>
              </HeroReveal>

              <HeroReveal delay={0.35}>
                <p className="text-subheading text-[#3C8CC8] max-w-xl mb-2">
                  {t('hero.subtitle')}
                </p>
              </HeroReveal>

              <HeroReveal delay={0.5}>
                <p className="text-body-large text-[#4A5568] max-w-2xl mb-10 leading-relaxed">
                  {t('hero.description')}
                </p>
              </HeroReveal>

              <HeroReveal delay={0.65}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link to={`/${currentLang}/contact`} className="btn-primary">
                    {t('hero.cta_primary')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to={`/${currentLang}/services`} className="btn-secondary">
                    {t('hero.cta_secondary')}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </HeroReveal>
            </div>

            {/* Right: Abstract visual */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
              <HeroReveal delay={0.4}>
                <div className="relative w-[400px] h-[400px]">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="heroSphere" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0A1628" />
                        <stop offset="40%" stopColor="#3C8CC8" />
                        <stop offset="100%" stopColor="#2890F0" />
                      </linearGradient>
                      <radialGradient id="glow" cx="30%" cy="30%" r="50%">
                        <stop offset="0%" stopColor="#64B4FF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#64B4FF" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="100" cy="100" r="90" fill="url(#glow)" />
                    <circle cx="100" cy="100" r="70" fill="url(#heroSphere)" opacity="0.15" />
                    <circle cx="100" cy="100" r="55" fill="none" stroke="#3C8CC8" strokeWidth="0.5" opacity="0.3" />
                    <circle cx="100" cy="100" r="40" fill="none" stroke="#64B4FF" strokeWidth="0.4" opacity="0.25" />
                    {/* Horizontal grid lines */}
                    <ellipse cx="100" cy="100" rx="70" ry="20" fill="none" stroke="#3C8CC8" strokeWidth="0.3" opacity="0.2" />
                    <ellipse cx="100" cy="100" rx="70" ry="40" fill="none" stroke="#3C8CC8" strokeWidth="0.3" opacity="0.15" />
                    <ellipse cx="100" cy="100" rx="70" ry="60" fill="none" stroke="#3C8CC8" strokeWidth="0.3" opacity="0.1" />
                    {/* Vertical grid lines */}
                    <ellipse cx="100" cy="100" rx="20" ry="70" fill="none" stroke="#3C8CC8" strokeWidth="0.3" opacity="0.2" />
                    <ellipse cx="100" cy="100" rx="40" ry="70" fill="none" stroke="#3C8CC8" strokeWidth="0.3" opacity="0.15" />
                    <ellipse cx="100" cy="100" rx="60" ry="70" fill="none" stroke="#3C8CC8" strokeWidth="0.3" opacity="0.1" />
                  </svg>
                </div>
              </HeroReveal>
            </div>
          </div>

          {/* Scroll indicator */}
          <HeroReveal delay={1.2}>
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-6 h-10 rounded-full border border-[#3C8CC8]/30 flex items-start justify-center pt-2">
                <div className="w-1 h-2 rounded-full bg-[#3C8CC8]" />
              </div>
            </motion.div>
          </HeroReveal>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="py-8 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <StaggerContainer className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <StaggerItem>
              <div className="trust-item">
                <Award className="w-5 h-5 text-[#3C8CC8]" />
                <div>
                  <div className="text-[13px] font-semibold text-[#0A1628]">{t('trust_bar.boi_badge')}</div>
                </div>
              </div>
            </StaggerItem>
            <div className="hidden md:block w-px h-8 bg-[#E2E8F0]" />
            <StaggerItem>
              <div className="trust-item">
                <Clock className="w-5 h-5 text-[#3C8CC8]" />
                <div>
                  <div className="text-[13px] font-semibold text-[#0A1628]">2024</div>
                  <div className="text-[11px] text-[#94A3B8]">{t('trust_bar.experience')}</div>
                </div>
              </div>
            </StaggerItem>
            <div className="hidden md:block w-px h-8 bg-[#E2E8F0]" />
            <StaggerItem>
              <div className="trust-item">
                <Headset className="w-5 h-5 text-[#3C8CC8]" />
                <div>
                  <div className="text-[13px] font-semibold text-[#0A1628]">4-Hour</div>
                  <div className="text-[11px] text-[#94A3B8]">{t('trust_bar.support')}</div>
                </div>
              </div>
            </StaggerItem>
            <div className="hidden md:block w-px h-8 bg-[#E2E8F0]" />
            <StaggerItem>
              <div className="trust-item">
                <Factory className="w-5 h-5 text-[#3C8CC8]" />
                <div>
                  <div className="text-[13px] font-semibold text-[#0A1628]">EEC</div>
                  <div className="text-[11px] text-[#94A3B8]">{t('trust_bar.factories')}</div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section-padded bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <AnimatedSection className="mb-16">
            <div className="editorial-line mb-6" />
            <span className="text-label text-[#3C8CC8] tracking-widest mb-4 block">{t('services_section.label')}</span>
            <h2 className="text-heading text-[#0A1628] max-w-2xl">{t('services_section.title')}</h2>
            <p className="text-body-large text-[#4A5568] max-w-xl mt-4">{t('services_section.subtitle')}</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <StaggerItem key={idx}>
                <div className="group relative bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-8 lg:p-10 card-hover hover:border-[#3C8CC8]/30 transition-colors">
                  {/* Left accent border */}
                  <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-[#3C8CC8] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-lg bg-[#C8E4F8] flex items-center justify-center shrink-0 group-hover:bg-[#3C8CC8] transition-colors duration-500">
                      <service.icon className="w-5 h-5 text-[#3C8CC8] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-subheading text-[#0A1628] mb-2 group-hover:text-[#3C8CC8] transition-colors duration-300">
                        {t(`services_section.${service.key}_title`)}
                      </h3>
                      <p className="text-body text-[#4A5568] leading-relaxed">
                        {t(`services_section.${service.key}_desc`)}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-[#3C8CC8]" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="mt-12 text-center">
            <Link to={`/${currentLang}/services`} className="btn-secondary">
              {t('services_section.cta')}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CASE STUDY / PROOF ===== */}
      <section className="section-padded relative bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 noise-texture" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="url(#heroSphere)" opacity="0.2" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#3C8CC8" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
          <AnimatedSection className="mb-12">
            <div className="editorial-line mb-6" />
            <span className="text-label text-[#64B4FF] tracking-widest mb-4 block">{t('client_section.label')}</span>
            <h2 className="text-heading text-[#F8FAFC] max-w-2xl">{t('client_section.title')}</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <StaggerItem className="lg:col-span-8">
              <div className="bg-[#0F2137] border border-[rgba(255,255,255,0.06)] rounded-lg p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#3C8CC8]/10 flex items-center justify-center">
                    <Factory className="w-5 h-5 text-[#64B4FF]" />
                  </div>
                  <div>
                    <h3 className="text-subheading text-[#F8FAFC]">{t('client_section.chicony')}</h3>
                    <p className="text-caption text-[#94A3B8]">{t('client_section.chicony_desc')}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-[#64B4FF] tracking-tight">8 weeks</div>
                    <div className="text-caption text-[#94A3B8] mt-1">Deployment time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#64B4FF] tracking-tight">99.8%</div>
                    <div className="text-caption text-[#94A3B8] mt-1">Uptime since launch</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#64B4FF] tracking-tight">0</div>
                    <div className="text-caption text-[#94A3B8] mt-1">Critical incidents</div>
                  </div>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Oracle RAC database cluster deployment',
                    'VMware ESXi virtualization farm',
                    'Windows Server AD & file services',
                    'Industrial firewall & network segmentation',
                    'Server room cooling & UPS design',
                    'Production handover & documentation',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-caption text-[#94A3B8]">
                      <Check className="w-4 h-4 text-[#3C8CC8] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem className="lg:col-span-4">
              <div className="bg-[#0F2137]/50 border border-[rgba(255,255,255,0.04)] border-dashed rounded-lg p-6 flex flex-col items-center justify-center h-full min-h-[200px] text-center">
                <p className="text-body text-[#94A3B8] font-medium mb-2">More projects coming</p>
                <p className="text-caption text-[#64748B]">
                  Detailed write-ups prepared with client approval.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ===== EEC COVERAGE ===== */}
      <section className="section-padded bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <AnimatedSection className="lg:col-span-5">
              <div className="editorial-line mb-6" />
              <span className="text-label text-[#3C8CC8] tracking-widest mb-4 block">EEC COVERAGE</span>
              <h2 className="text-heading text-[#0A1628] mb-4">{t('eec_section.title')}</h2>
              <p className="text-body-large text-[#4A5568] mb-10">{t('eec_section.subtitle')}</p>

              {/* Abstract node map */}
              <div className="relative aspect-[4/3] bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] overflow-hidden">
                <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full opacity-10">
                  <path d="M100 20 C110 18, 120 22, 125 30 C130 38, 128 46, 125 54 C122 62, 124 70, 128 78 C132 86, 136 94, 134 102 C132 110, 128 118, 130 126 C132 134, 136 142, 138 150" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#3C8CC8]" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-36">
                    <div className="absolute top-[20%] left-[40%] flex flex-col items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-[#3C8CC8] ring-4 ring-[#3C8CC8]/20" />
                      <span className="text-[9px] font-semibold text-[#0A1628] bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">Chachoengsao</span>
                    </div>
                    <div className="absolute top-[40%] left-[55%] flex flex-col items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-[#3C8CC8] ring-4 ring-[#3C8CC8]/20" />
                      <span className="text-[9px] font-semibold text-[#0A1628] bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">Chonburi</span>
                    </div>
                    <div className="absolute top-[55%] left-[65%] flex flex-col items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-[#2890F0] ring-4 ring-[#2890F0]/20" />
                      <span className="text-[9px] font-semibold text-[#0A1628] bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">Rayong</span>
                    </div>
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 36">
                      <line x1="22" y1="15" x2="28" y2="22" stroke="#3C8CC8" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
                      <line x1="28" y1="22" x2="33" y2="28" stroke="#3C8CC8" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
                    </svg>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <StaggerContainer staggerDelay={0.1} className="space-y-6">
                {provinces.map((province, idx) => (
                  <StaggerItem key={idx}>
                    <div className="group bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-6 lg:p-8 card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#C8E4F8] flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 text-[#3C8CC8]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-subheading text-[#0A1628] mb-2">{province.name}</h3>
                          <p className="text-caption text-[#4A5568] mb-4 leading-relaxed">{province.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {province.estates.map((estate) => (
                              <span key={estate} className="px-2.5 py-1 rounded bg-white text-caption text-[#4A5568] border border-[#E2E8F0]">
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
                <Link to={`/${currentLang}/eec-it-solutions`} className="btn-primary">
                  {t('eec_section.cta')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY PARTNERS ===== */}
      <section className="section-padded-sm bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-label text-[#3C8CC8] tracking-widest mb-4 block">{t('partners.label')}</span>
            <h2 className="text-heading text-[#0A1628] mb-3">{t('partners.title')}</h2>
            <p className="text-body text-[#4A5568] max-w-xl mx-auto">{t('partners.subtitle')}</p>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <StaggerItem key={partner}>
                <div className="partner-logo px-6 py-3 rounded-lg bg-white border border-[#E2E8F0] text-[#4A5568] font-semibold text-sm tracking-wide hover:text-[#3C8CC8] hover:border-[#3C8CC8]/30 transition-all cursor-default">
                  {partner}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CTA / CONTACT ===== */}
      <section className="section-padded relative overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2137] via-[#0A1628] to-[#0A1628]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 noise-texture" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-15 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="url(#heroSphere)" opacity="0.2" />
          </svg>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <AnimatedSection className="lg:col-span-5">
              <div className="editorial-line mb-8" />
              <h2 className="text-hero text-[#F8FAFC] mb-6">Ready to Build Your Factory's IT Backbone?</h2>
              <p className="text-body-large text-[#94A3B8] mb-10">
                Get a free infrastructure assessment. We visit your facility, audit your current setup, and deliver a tailored roadmap.
              </p>
              <div className="space-y-4 mb-8">
                <a href={`mailto:${t('contact.email')}`} className="flex items-center gap-3 text-body text-[#94A3B8] hover:text-[#64B4FF] transition-colors">
                  <Mail className="w-5 h-5 text-[#3C8CC8]" />
                  {t('contact.email')}
                </a>
                <a href={`tel:${t('contact.phone')}`} className="flex items-center gap-3 text-body text-[#94A3B8] hover:text-[#64B4FF] transition-colors">
                  <Phone className="w-5 h-5 text-[#3C8CC8]" />
                  {t('contact.phone')}
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-7">
              <div className="bg-[#0F2137] border border-[rgba(255,255,255,0.06)] rounded-lg p-8 lg:p-10">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-label text-[#94A3B8] mb-2">Name</label>
                      <input type="text" className="input-field bg-[#0A1628] border-[rgba(255,255,255,0.06)]" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-label text-[#94A3B8] mb-2">Email</label>
                      <input type="email" className="input-field bg-[#0A1628] border-[rgba(255,255,255,0.06)]" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-label text-[#94A3B8] mb-2">Company</label>
                      <input type="text" className="input-field bg-[#0A1628] border-[rgba(255,255,255,0.06)]" placeholder="Company name" />
                    </div>
                    <div>
                      <label className="block text-label text-[#94A3B8] mb-2">Province</label>
                      <select className="input-field bg-[#0A1628] border-[rgba(255,255,255,0.06)]">
                        <option>Chonburi</option>
                        <option>Rayong</option>
                        <option>Chachoengsao</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-label text-[#94A3B8] mb-2">Message</label>
                    <textarea rows={4} className="input-field bg-[#0A1628] border-[rgba(255,255,255,0.06)] resize-y" placeholder="Tell us about your project..." />
                  </div>
                  <button type="button" className="btn-primary bg-[#2890F0] hover:bg-[#3C8CC8] w-full sm:w-auto justify-center">
                    Request Free Assessment
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
