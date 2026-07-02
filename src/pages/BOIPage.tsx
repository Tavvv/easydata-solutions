import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const faqs = [
  {
    q: 'What types of IT infrastructure qualify for BOI promotion?',
    a: 'Servers, database software, network equipment, security appliances, and MES/ERP software typically qualify under BOI Category 7.13 (Software and Digital Services). Hardware may qualify under relevant manufacturing categories when bundled with factory setup.',
  },
  {
    q: 'How long does BOI corporate income tax exemption last?',
    a: 'Standard projects receive 3–8 years of CIT exemption depending on the activity category. Projects located in the EEC receive additional incentives, including extended exemption periods and reduced import duties on machinery.',
  },
  {
    q: 'Does the FastPass program apply to IT infrastructure?',
    a: 'FastPass accelerates approval for strategic projects. While IT is a supporting function, having a pre-planned IT infrastructure package — including vendor selection, server room layout, and network topology — strengthens your FastPass application.',
  },
  {
    q: 'Can IT spending be bundled with factory BOI applications?',
    a: 'Yes. IT infrastructure costs can be included within the overall BOI-promoted investment. We recommend separating IT capex clearly in your BOI application to ensure full recognition.',
  },
  {
    q: 'What documentation is needed for BOI IT qualification?',
    a: 'You typically need vendor quotations, technical specifications, network topology diagrams, server room layouts, and a project timeline. We provide a complete checklist to help you prepare.',
  },
  {
    q: 'Are cloud services eligible for BOI incentives?',
    a: 'On-premise infrastructure and private cloud deployments within Thailand generally qualify. Pure public cloud subscriptions may not qualify under Category 7.13; consult your BOI officer for specific guidance.',
  },
  {
    q: 'How do EEC location bonuses affect IT projects?',
    a: 'EEC projects receive an additional year of CIT exemption and may qualify for extra benefits if the project is in a targeted industry (e.g., EV, robotics, data centers). IT spending in these projects is considered part of the eligible investment.',
  },
];

export default function BOIPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.split('/')[1] || 'en';
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <div>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('boi.title')}</h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">{t('boi.subtitle')}</p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{t('boi.section_1_title')}</h2>
            <p className="text-text-muted leading-relaxed">{t('boi.section_1_desc')}</p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{t('boi.section_2_title')}</h2>
            <p className="text-text-muted leading-relaxed">{t('boi.section_2_desc')}</p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{t('boi.section_3_title')}</h2>
            <p className="text-text-muted leading-relaxed">{t('boi.section_3_desc')}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-surface/50 transition-colors"
                >
                  <span className="font-medium text-text">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-text-muted transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-4 text-sm text-text-muted leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Prepare your BOI application</h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            Download our IT infrastructure checklist to ensure your BOI application includes all required technical documentation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => alert('Download coming soon')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              {t('boi.cta')}
            </button>
            <Link
              to={`/${lang}/contact`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-medium hover:bg-accent/5 transition-colors"
            >
              Talk to an expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
