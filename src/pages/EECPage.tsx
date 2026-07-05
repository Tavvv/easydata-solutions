import { useTranslation } from 'react-i18next';
import { MapPin, ArrowRight, Factory, Wifi, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';

const provinces = [
  {
    nameKey: 'eec_section.chonburi',
    descKey: 'eec_section.chonburi_desc',
    estates: ['Gateway City', 'Laem Chabang', 'Amata City'],
    sectors: ['EV supply chain', 'Data centers', 'Robotics'],
    challenges: ['High-density server cooling', 'Multi-site network redundancy', 'Real-time MES data pipelines'],
    icon: Factory,
  },
  {
    nameKey: 'eec_section.rayong',
    descKey: 'eec_section.rayong_desc',
    estates: ['IRPC Eco-Industrial Zone', 'Map Ta Phut'],
    sectors: ['Chemical recycling', 'Petrochemical', 'Data center boom'],
    challenges: ['Hazardous environment networking', 'OT/IT security segmentation', '24/7 production monitoring'],
    icon: Shield,
  },
  {
    nameKey: 'eec_section.chachoengsao',
    descKey: 'eec_section.chachoengsao_desc',
    estates: ['Gateway City Industrial Estate'],
    sectors: ['Honda HEV', 'Precision manufacturing'],
    challenges: ['Just-in-time IT deployment', 'Multi-language MES interfaces', 'Lean team support'],
    icon: Wifi,
  },
];

export default function EECPage() {
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
            <h1 className="text-display text-bg max-w-3xl mb-6">EEC IT Solutions</h1>
            <p className="text-body-large text-text-secondary max-w-2xl">
              Dedicated IT infrastructure support for BOI-approved factories across Thailand&apos;s Eastern Economic Corridor.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Province Sections — Editorial cards */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <AnimatedSection className="mb-16">
            <div className="editorial-line mb-6" />
            <h2 className="text-heading text-text mb-4">Three Provinces, One Expertise</h2>
            <p className="text-body text-text-secondary max-w-xl">
              We operate across Chonburi, Rayong, and Chachoengsao — understanding the unique industrial landscape of each province.
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-8">
            {provinces.map((p, idx) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.nameKey}>
                  <div className="bg-surface-elevated border border-border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      {/* Left: Province info */}
                      <div className={`lg:col-span-5 p-8 lg:p-10 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center">
                            <Icon className="w-5 h-5 text-accent" />
                          </div>
                          <h3 className="text-subheading text-text">{t(p.nameKey)}</h3>
                        </div>
                        <p className="text-body text-text-secondary mb-8">{t(p.descKey)}</p>

                        <div className="space-y-5">
                          <div>
                            <div className="text-label text-text-muted mb-2">Key Industrial Estates</div>
                            <div className="flex flex-wrap gap-2">
                              {p.estates.map((e) => (
                                <span key={e} className="px-2.5 py-1 rounded bg-surface text-caption text-text-secondary border border-border">
                                  {e}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="text-label text-text-muted mb-2">Sector Focus</div>
                            <div className="flex flex-wrap gap-2">
                              {p.sectors.map((s) => (
                                <span key={s} className="px-2.5 py-1 rounded bg-accent-subtle text-caption text-accent font-medium">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Challenges */}
                      <div className={`lg:col-span-7 p-8 lg:p-10 bg-surface border-t lg:border-t-0 ${idx % 2 === 1 ? 'lg:border-r' : 'lg:border-l'} border-border`}>
                        <div className="text-label text-text-muted mb-5">IT Challenges We Solve</div>
                        <ul className="space-y-4">
                          {p.challenges.map((c, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-accent-subtle flex items-center justify-center shrink-0 mt-0.5">
                                <span className="text-[10px] font-bold text-accent">{i + 1}</span>
                              </div>
                              <span className="text-body text-text-secondary">{c}</span>
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

      {/* Map Section */}
      <section className="section-padded bg-surface border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <AnimatedSection className="lg:col-span-5">
              <div className="editorial-line mb-6" />
              <h2 className="text-heading text-text mb-4">On the Ground</h2>
              <p className="text-body text-text-secondary leading-relaxed mb-6">
                Our engineers are based in the EEC region, with 4-hour response times across all three provinces. We know the industrial estates, the local infrastructure, and the unique challenges of each area.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Chonburi', detail: 'Gateway City, Laem Chabang, Amata City' },
                  { label: 'Rayong', detail: 'IRPC, Map Ta Phut, Eastern Seaboard' },
                  { label: 'Chachoengsao', detail: 'Gateway City Industrial Estate' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-caption text-text-secondary">
                      <span className="font-medium text-text">{item.label}</span> — {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="lg:col-span-7">
              <div className="relative aspect-[4/3] bg-surface-elevated rounded-lg border border-border overflow-hidden">
                <svg viewBox="0 0 200 150" className="absolute inset-0 w-full h-full opacity-10">
                  <path
                    d="M100 10 C110 8, 120 12, 125 20 C130 28, 128 36, 125 44 C122 52, 124 60, 128 68 C132 76, 136 84, 134 92 C132 100, 128 108, 130 116 C132 124, 136 132, 138 140"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-text-muted"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-36">
                    <div className="absolute top-[20%] left-[40%] flex flex-col items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20" />
                      <span className="text-[9px] font-semibold text-text bg-surface-elevated px-1.5 py-0.5 rounded border border-border">Chachoengsao</span>
                    </div>
                    <div className="absolute top-[40%] left-[55%] flex flex-col items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20" />
                      <span className="text-[9px] font-semibold text-text bg-surface-elevated px-1.5 py-0.5 rounded border border-border">Chonburi</span>
                    </div>
                    <div className="absolute top-[55%] left-[65%] flex flex-col items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-accent-light ring-4 ring-accent-light/20" />
                      <span className="text-[9px] font-semibold text-text bg-surface-elevated px-1.5 py-0.5 rounded border border-border">Rayong</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-caption text-text-muted">EEC Region, Thailand</span>
                  <span className="text-caption text-text-muted">Interactive map coming soon</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 text-center">
          <AnimatedSection>
            <div className="editorial-line mx-auto mb-8" />
            <h2 className="text-hero text-text mb-6">Need IT for your EEC facility?</h2>
            <p className="text-body-large text-text-secondary max-w-2xl mx-auto mb-10">
              We have boots on the ground in Chonburi, Rayong, and Chachoengsao. Let us scope your project.
            </p>
            <Link to={`/${lang}/contact`} className="btn-primary">
              Contact us for your EEC facility
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
