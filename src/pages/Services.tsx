import { useTranslation } from 'react-i18next';
import { Server, Network, ShoppingCart, Factory, ArrowRight, Check, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';

const services = [
  {
    key: 'card_1',
    icon: Server,
    timeline: '4–8 weeks',
    bullets: [
      'Oracle database cluster design & deployment',
      'VMware ESXi virtualization setup',
      'Windows Server Active Directory configuration',
      'High-availability failover planning',
      'Backup & disaster recovery architecture',
    ],
  },
  {
    key: 'card_2',
    icon: Network,
    timeline: '2–4 weeks',
    bullets: [
      'Industrial network topology design',
      'Firewall & security policy configuration',
      'Wi-Fi 6 deployment for factory floors',
      'Network segmentation & VLAN setup',
      'Security audit & penetration testing',
    ],
  },
  {
    key: 'card_3',
    icon: ShoppingCart,
    timeline: '1–2 weeks',
    bullets: [
      'Dell / HP / Cisco / Huawei sourcing',
      'Competitive pricing & vendor negotiation',
      'Local warranty & after-sales support',
      'Hardware compatibility verification',
      'Delivery & installation coordination',
    ],
  },
  {
    key: 'card_4',
    icon: Factory,
    timeline: '6–12 weeks',
    bullets: [
      'MES system integration & configuration',
      'Mobile QC dashboard development',
      'Production line IT support & monitoring',
      'ERP/MES data pipeline setup',
      'Operator training & handover documentation',
    ],
  },
];

export default function Services() {
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
            <h1 className="text-display text-bg max-w-3xl mb-6">{t('services_section.title')}</h1>
            <p className="text-body-large text-text-secondary max-w-2xl">{t('services_section.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Cards — Editorial list layout */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <StaggerContainer className="space-y-8">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.key}>
                  <div className="group bg-surface-elevated border border-border rounded-lg overflow-hidden card-hover">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      {/* Left: Icon + Title + Description */}
                      <div className={`lg:col-span-5 p-8 lg:p-10 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-lg bg-accent-subtle flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                            <Icon className="w-5 h-5 text-accent group-hover:text-accent-fg transition-colors duration-500" />
                          </div>
                          <div>
                            <h3 className="text-subheading text-text">{t(`services_section.${s.key}_title`)}</h3>
                          </div>
                        </div>
                        <p className="text-body text-text-secondary leading-relaxed mb-6">
                          {t(`services_section.${s.key}_desc`)}
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-caption text-text-muted">
                          <Clock className="w-3 h-3" />
                          Estimated: {s.timeline}
                        </div>
                      </div>

                      {/* Right: Bullet list */}
                      <div className={`lg:col-span-7 p-8 lg:p-10 bg-surface border-t lg:border-t-0 ${idx % 2 === 1 ? 'lg:border-r' : 'lg:border-l'} border-border`}>
                        <h4 className="text-label text-text-muted mb-5">What we deliver</h4>
                        <ul className="space-y-3">
                          {s.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-3 text-body text-text-secondary">
                              <Check className="w-4 h-4 text-accent mt-1 shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padded bg-surface border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 text-center">
          <AnimatedSection>
            <div className="editorial-line mx-auto mb-8" />
            <h2 className="text-hero text-text mb-6">Ready to get started?</h2>
            <p className="text-body-large text-text-secondary max-w-2xl mx-auto mb-10">
              Tell us about your project and we will prepare a tailored quote for your factory IT needs.
            </p>
            <Link to={`/${lang}/contact`} className="btn-primary">
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
