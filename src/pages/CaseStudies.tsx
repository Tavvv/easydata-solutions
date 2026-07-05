import { useTranslation } from 'react-i18next';
import { Network, ArrowRight, Clock, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';

export default function CaseStudies() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.split('/')[1] || 'en';

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 noise-texture" />
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10 py-32">
          <AnimatedSection>
            <div className="editorial-line mb-8" />
            <h1 className="text-display text-bg max-w-3xl mb-6">{t('cases.title')}</h1>
            <p className="text-body-large text-text-secondary max-w-2xl">{t('cases.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <AnimatedSection className="mb-12">
            <div className="editorial-line mb-6" />
            <h2 className="text-heading text-text mb-4">Selected Projects</h2>
            <p className="text-body text-text-secondary max-w-xl">
              Real-world IT infrastructure delivered for manufacturers in the EEC.
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-8">
            {/* Leading Electronics Manufacturer */}
            <StaggerItem>
              <div className="bg-surface-elevated border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-5 p-8 lg:p-10">
                    <h3 className="text-subheading text-text mb-3">{t('cases.chicony_title')}</h3>
                    <p className="text-body text-text-secondary mb-8">{t('cases.chicony_desc')}</p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-caption text-text-secondary">
                        <Clock className="w-4 h-4 text-accent" />
                        <span>{t('cases.chicony_duration')}</span>
                      </div>
                      <div className="flex items-center gap-3 text-caption text-text-secondary">
                        <Network className="w-4 h-4 text-accent" />
                        <span>{t('cases.chicony_scope')}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {['Oracle', 'VMware', 'Windows Server'].map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded bg-accent-subtle text-caption text-accent font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-7 p-8 lg:p-10 bg-surface border-t lg:border-t-0 lg:border-l border-border">
                    <h4 className="text-label text-text-muted mb-5">Deliverables</h4>
                    <ul className="space-y-3">
                      {[
                        'Oracle RAC database cluster deployment',
                        'VMware ESXi virtualization farm',
                        'Windows Server AD & file services',
                        'Industrial firewall & network segmentation',
                        'Server room cooling & UPS design',
                        'Production handover & documentation',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-body text-text-secondary">
                          <Check className="w-4 h-4 text-accent mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Placeholder */}
            <StaggerItem>
              <div className="border border-dashed border-border rounded-lg p-10 text-center">
                <p className="text-body text-text-secondary font-medium mb-1">Additional case studies in development</p>
                <p className="text-caption text-text-muted">
                  Detailed project write-ups are prepared with client approval before publication.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padded bg-surface border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 text-center">
          <AnimatedSection>
            <div className="editorial-line mx-auto mb-8" />
            <h2 className="text-hero text-text mb-6">Have a similar project?</h2>
            <p className="text-body-large text-text-secondary max-w-2xl mx-auto mb-10">
              We have delivered factory IT for leading manufacturers in the EEC. Let us discuss your requirements.
            </p>
            <Link to={`/${lang}/contact`} className="btn-primary">
              Discuss your project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
