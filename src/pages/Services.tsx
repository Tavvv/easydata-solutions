import { useTranslation } from 'react-i18next';
import { Server, Network, ShoppingCart, Factory, ArrowRight, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('services_section.title')}</h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">{t('services_section.subtitle')}</p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.key}
                  className="bg-white rounded-xl border border-border p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      {t(`services_section.${s.key}_title`)}
                    </h3>
                  </div>
                  <p className="text-text-muted mb-6">{t(`services_section.${s.key}_desc`)}</p>
                  <ul className="space-y-2 mb-6">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text">
                        <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface text-xs font-medium text-text-muted">
                    Estimated: {s.timeline}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready to get started?</h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            Tell us about your project and we will prepare a tailored quote for your factory IT needs.
          </p>
          <Link
            to={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
