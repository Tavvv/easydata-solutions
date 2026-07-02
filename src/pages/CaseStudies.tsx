import { useTranslation } from 'react-i18next';
import { Server, Network, ArrowRight, Clock, DollarSign } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function CaseStudies() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.split('/')[1] || 'en';

  return (
    <div>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('cases.title')}</h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">{t('cases.subtitle')}</p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Chicony */}
          <div className="bg-white rounded-xl border border-border p-6 md:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{t('cases.chicony_title')}</h2>
                <p className="text-text-muted">{t('cases.chicony_desc')}</p>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center" title="Oracle">
                  <Server className="w-5 h-5 text-primary" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center" title="VMware">
                  <Server className="w-5 h-5 text-primary" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center" title="Windows Server">
                  <Server className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-text">
                <DollarSign className="w-4 h-4 text-accent" />
                <span>{t('cases.chicony_value')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text">
                <Clock className="w-4 h-4 text-accent" />
                <span>{t('cases.chicony_duration')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text">
                <Network className="w-4 h-4 text-accent" />
                <span>{t('cases.chicony_scope')}</span>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                'Oracle RAC database cluster deployment',
                'VMware ESXi virtualization farm',
                'Windows Server AD & file services',
                'Industrial firewall & network segmentation',
                'Server room cooling & UPS design',
                'Production handover & documentation',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                  <span className="text-accent mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Merry */}
          <div className="bg-white rounded-xl border border-border p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">{t('cases.merry_title')}</h2>
                <p className="text-text-muted">{t('cases.merry_desc')}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-text">
                <DollarSign className="w-4 h-4 text-accent" />
                <span>{t('cases.merry_value')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text">
                <Clock className="w-4 h-4 text-accent" />
                <span>{t('cases.merry_duration')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text">
                <Network className="w-4 h-4 text-accent" />
                <span>{t('cases.merry_scope')}</span>
              </div>
            </div>
          </div>

          {/* Placeholder removed — case study blog post awaiting client approval before publication */}
          <div className="bg-warning/10 rounded-xl border border-warning/30 p-6 md:p-8 text-center">
            <p className="text-warning font-medium">Additional case studies in development</p>
            <p className="text-sm text-text-muted mt-1">
              Detailed project write-ups are prepared with client approval before publication.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Have a similar project?</h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            We have delivered factory IT for leading manufacturers in the EEC. Let us discuss your requirements.
          </p>
          <Link
            to={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
          >
            Discuss your project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
