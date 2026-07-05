import { useTranslation } from 'react-i18next';
import { Users, Globe, Building2, Languages, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';

export default function About() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.split('/')[1] || 'en';

  const stats = [
    { icon: Building2, value: '2024', label: 'Founded' },
    { icon: Globe, value: 'Suzhou', label: 'Origins' },
    { icon: Users, value: 'EEC', label: 'Focus Area' },
  ];

  const languages = [
    { code: 'EN', name: 'English', level: 'Native fluency' },
    { code: 'ZH', name: '中文', level: 'Mandarin' },
    { code: 'TH', name: 'ไทย', level: 'Thai' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 noise-texture" />
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10 py-32">
          <AnimatedSection>
            <div className="editorial-line mb-8" />
            <h1 className="text-display text-bg max-w-3xl mb-6">{t('about.title')}</h1>
            <p className="text-body-large text-text-secondary max-w-2xl">{t('about.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story — Split editorial layout */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <div className="editorial-line mb-6" />
              <h2 className="text-heading text-text mb-4">Our Story</h2>
              <p className="text-caption text-text-muted uppercase tracking-wider">Bridging expertise and manufacturing</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="lg:col-span-8">
              <p className="text-body-large text-text-secondary leading-relaxed mb-8">
                {t('about.story')}
              </p>
              <div className="gradient-line w-24 mb-8" />
              <p className="text-caption text-text-muted">
                We understand that factory IT is not the same as office IT. It requires industrial-grade reliability, 24/7 uptime, and integration with manufacturing systems. Our team brings that expertise to every project.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats — Editorial numbers */}
      <section className="section-padded-sm bg-surface border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <StaggerItem key={idx}>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-accent-subtle flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-text tracking-tight">{stat.value}</div>
                    <div className="text-caption text-text-muted mt-1">{stat.label}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-4">
              <div className="editorial-line mb-6" />
              <h2 className="text-heading text-text mb-4">{t('about.team_title')}</h2>
              <p className="text-body text-text-secondary leading-relaxed">{t('about.team_desc')}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="lg:col-span-8">
              <div className="bg-surface-elevated border border-border rounded-lg p-8 lg:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-subheading text-text mb-3">Shareholder-Operator Model</h3>
                    <p className="text-caption text-text-secondary leading-relaxed">
                      Direct accountability from leadership to execution. No layers of management — just results.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-subheading text-text mb-3">Fast Response</h3>
                    <p className="text-caption text-text-secondary leading-relaxed">
                      4-hour response time in the EEC region. On-site support when you need it most.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="section-padded bg-surface border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <AnimatedSection className="mb-12">
            <div className="editorial-line mb-6" />
            <h2 className="text-heading text-text mb-4">{t('about.languages_title')}</h2>
            <p className="text-body text-text-secondary max-w-xl">{t('about.languages_desc')}</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {languages.map((lang, idx) => (
              <StaggerItem key={idx}>
                <div className="group bg-surface-elevated border border-border rounded-lg p-6 card-hover">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-text tracking-tight">{lang.code}</span>
                    <Languages className="w-5 h-5 text-text-muted" />
                  </div>
                  <h3 className="text-subheading text-text mb-1">{lang.name}</h3>
                  <p className="text-caption text-text-muted">{lang.level}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 text-center">
          <AnimatedSection>
            <div className="editorial-line mx-auto mb-8" />
            <h2 className="text-hero text-text mb-6">Work with us</h2>
            <p className="text-body-large text-text-secondary max-w-2xl mx-auto mb-10">
              Whether you are setting up a new factory or upgrading existing infrastructure, we bring the expertise and local presence to deliver results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={`/${lang}/contact`} className="btn-primary">
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to={`/${lang}/services`} className="btn-secondary">
                View our services
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
