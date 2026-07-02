import { useTranslation } from 'react-i18next';
import { Users, Globe, Building2 } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('about.title')}
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-text-muted leading-relaxed">{t('about.story')}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-border">
              <Building2 className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary">Founded 2024</div>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-border">
              <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary">Suzhou Roots</div>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-border">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary">EEC Focused</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{t('about.team_title')}</h2>
            <p className="text-text-muted leading-relaxed">{t('about.team_desc')}</p>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{t('about.languages_title')}</h2>
            <p className="text-text-muted mb-8">{t('about.languages_desc')}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-5 py-2 rounded-full bg-white border border-border text-sm font-medium text-text">English</span>
              <span className="px-5 py-2 rounded-full bg-white border border-border text-sm font-medium text-text">中文</span>
              <span className="px-5 py-2 rounded-full bg-white border border-border text-sm font-medium text-text">ไทย</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
