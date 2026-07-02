import { useTranslation } from 'react-i18next';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const provinces = [
  {
    nameKey: 'eec_section.chonburi',
    descKey: 'eec_section.chonburi_desc',
    estates: ['Gateway City', 'Laem Chabang', 'Amata City'],
    sectors: ['EV supply chain', 'Data centers', 'Robotics'],
    challenges: ['High-density server cooling', 'Multi-site network redundancy', 'Real-time MES data pipelines'],
    color: 'bg-blue-500',
  },
  {
    nameKey: 'eec_section.rayong',
    descKey: 'eec_section.rayong_desc',
    estates: ['IRPC Eco-Industrial Zone', 'Map Ta Phut'],
    sectors: ['Chemical recycling', 'Petrochemical', 'Data center boom'],
    challenges: ['Hazardous environment networking', ' OT/IT security segmentation', '24/7 production monitoring'],
    color: 'bg-emerald-500',
  },
  {
    nameKey: 'eec_section.chachoengsao',
    descKey: 'eec_section.chachoengsao_desc',
    estates: ['Gateway City Industrial Estate'],
    sectors: ['Honda HEV', 'Precision manufacturing'],
    challenges: ['Just-in-time IT deployment', 'Multi-language MES interfaces', 'Lean team support'],
    color: 'bg-amber-500',
  },
];

export default function EECPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.split('/')[1] || 'en';

  return (
    <div>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">EEC IT Solutions</h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            Dedicated IT infrastructure support for BOI-approved factories across Thailand’s Eastern Economic Corridor.
          </p>
        </div>
      </section>

      {/* Province Sections */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {provinces.map((p) => (
              <div key={p.nameKey} className="bg-white rounded-xl border border-border p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-3 h-3 rounded-full ${p.color}`} />
                  <h3 className="text-xl font-bold text-primary">{t(p.nameKey)}</h3>
                </div>
                <p className="text-text-muted text-sm mb-4">{t(p.descKey)}</p>

                <div className="mb-4">
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Key Industrial Estates</div>
                  <div className="flex flex-wrap gap-2">
                    {p.estates.map((e) => (
                      <span key={e} className="px-2 py-1 rounded bg-surface text-xs font-medium text-text">{e}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Sector Focus</div>
                  <div className="flex flex-wrap gap-2">
                    {p.sectors.map((s) => (
                      <span key={s} className="px-2 py-1 rounded bg-accent/10 text-xs font-medium text-accent">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">IT Challenges</div>
                  <ul className="space-y-1">
                    {p.challenges.map((c, i) => (
                      <li key={i} className="text-sm text-text-muted flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-surface py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-border p-8 md:p-12 text-center shadow-sm">
            <div className="relative w-full h-64 md:h-80 bg-surface rounded-lg flex items-center justify-center mb-4 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-32 md:w-64 md:h-40 bg-blue-100 rounded-lg relative opacity-60" />
              </div>
              <div className="absolute top-1/3 left-1/4 flex flex-col items-center gap-1">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white shadow" />
                <span className="text-xs font-bold text-primary bg-white/80 px-2 py-0.5 rounded">Chonburi</span>
              </div>
              <div className="absolute top-1/2 right-1/3 flex flex-col items-center gap-1">
                <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white shadow" />
                <span className="text-xs font-bold text-primary bg-white/80 px-2 py-0.5 rounded">Rayong</span>
              </div>
              <div className="absolute bottom-1/4 left-1/3 flex flex-col items-center gap-1">
                <div className="w-6 h-6 rounded-full bg-amber-500 border-2 border-white shadow" />
                <span className="text-xs font-bold text-primary bg-white/80 px-2 py-0.5 rounded">Chachoengsao</span>
              </div>
              <div className="relative z-10 flex items-center gap-2 text-text-muted">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">EEC Region, Thailand</span>
              </div>
            </div>
            <p className="text-sm text-text-muted">Interactive map coming soon</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Need IT for your EEC facility?</h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            We have boots on the ground in Chonburi, Rayong, and Chachoengsao. Let us scope your project.
          </p>
          <Link
            to={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
          >
            Contact us for your EEC facility
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
