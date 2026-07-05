import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Download, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';

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

  const sections = [
    { title: t('boi.section_1_title'), desc: t('boi.section_1_desc'), num: '01' },
    { title: t('boi.section_2_title'), desc: t('boi.section_2_desc'), num: '02' },
    { title: t('boi.section_3_title'), desc: t('boi.section_3_desc'), num: '03' },
  ];

  return (
    <div>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 noise-texture" />
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10 py-32">
          <AnimatedSection>
            <div className="editorial-line mb-8" />
            <h1 className="text-display text-bg max-w-3xl mb-6">{t('boi.title')}</h1>
            <p className="text-body-large text-text-secondary max-w-2xl">{t('boi.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Three sections — Editorial layout */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <AnimatedSection className="mb-16">
            <div className="editorial-line mb-6" />
            <h2 className="text-heading text-text mb-4">Understanding BOI for IT</h2>
            <p className="text-body text-text-secondary max-w-xl">
              Three key areas every manufacturer should understand when planning IT infrastructure in Thailand.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sections.map((s, idx) => (
              <StaggerItem key={idx}>
                <div className="group bg-surface-elevated border border-border rounded-lg p-8 lg:p-10 card-hover h-full">
                  <span className="text-display text-accent/20 font-bold tracking-tight">{s.num}</span>
                  <h3 className="text-subheading text-text mt-4 mb-4">{s.title}</h3>
                  <p className="text-body text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padded bg-surface border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <AnimatedSection className="mb-12">
            <div className="editorial-line mb-6" />
            <h2 className="text-heading text-text mb-4">Frequently Asked Questions</h2>
            <p className="text-body text-text-secondary max-w-xl">
              Common questions about BOI qualification, tax incentives, and IT infrastructure requirements.
            </p>
          </AnimatedSection>

          <AnimatedSection className="max-w-3xl mx-auto space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-surface-elevated border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface transition-colors group"
                >
                  <span className="text-body text-text pr-4">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-body text-text-secondary leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 text-center">
          <AnimatedSection>
            <div className="editorial-line mx-auto mb-8" />
            <h2 className="text-hero text-text mb-6">Prepare your BOI application</h2>
            <p className="text-body-large text-text-secondary max-w-2xl mx-auto mb-10">
              Download our IT infrastructure checklist to ensure your BOI application includes all required technical documentation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => alert('Download coming soon')}
                className="btn-primary"
              >
                <Download className="w-4 h-4" />
                {t('boi.cta')}
              </button>
              <Link to={`/${lang}/contact`} className="btn-secondary">
                Talk to an expert
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
