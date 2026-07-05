import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, MessageCircle, Send, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();
  const lang = location.pathname.split('/')[1] || 'en';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: t('contact.email'),
      href: `mailto:${t('contact.email')}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: t('contact.phone'),
      href: `tel:${t('contact.phone')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: t('contact.location'),
    },
    {
      icon: MessageCircle,
      label: t('contact.wechat_title'),
      value: t('contact.wechat_desc'),
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 noise-texture" />
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10 py-28">
          <AnimatedSection>
            <div className="editorial-line mb-8" />
            <h1 className="text-display text-bg max-w-3xl mb-6">{t('contact.title')}</h1>
            <p className="text-body-large text-text-secondary max-w-2xl">{t('contact.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-7">
              <div className="editorial-line mb-6" />
              <h2 className="text-subheading text-text mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-label text-text-muted mb-2">{t('contact.form_name')}</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-label text-text-muted mb-2">{t('contact.form_email')}</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-label text-text-muted mb-2">{t('contact.form_company')}</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-label text-text-muted mb-2">{t('contact.form_message')}</label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-field resize-y"
                  />
                </div>
                <button type="submit" className="btn-primary">
                  <Send className="w-4 h-4" />
                  {t('contact.form_submit')}
                </button>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-caption text-accent font-medium"
                  >
                    Thank you! We will get back to you shortly.
                  </motion.p>
                )}
              </form>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2} className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-subheading text-text mb-8">Contact information</h2>
                <StaggerContainer className="space-y-6">
                  {contactInfo.map((item, idx) => (
                    <StaggerItem key={idx}>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center shrink-0">
                          <item.icon className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <div className="text-caption text-text-muted mb-0.5">{item.label}</div>
                          {item.href ? (
                            <a href={item.href} className="text-body text-text hover:text-accent transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-body text-text">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="mt-10 pt-8 border-t border-border">
                  <p className="text-caption text-text-muted leading-relaxed">
                    Prefer a direct conversation? We are available for calls during business hours (GMT+7).
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padded-sm bg-surface border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <AnimatedSection className="text-center mb-8">
            <div className="editorial-line mx-auto mb-6" />
            <h2 className="text-heading text-text mb-2">Where We Operate</h2>
            <p className="text-body text-text-secondary">
              We operate across Chonburi, Rayong, and Chachoengsao
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative aspect-[21/9] max-h-[400px] bg-surface-elevated rounded-lg border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="text-subheading text-text mb-1">EEC Region, Thailand</p>
                  <p className="text-caption text-text-muted">Chonburi · Rayong · Chachoengsao</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 text-center">
          <AnimatedSection>
            <div className="editorial-line mx-auto mb-8" />
            <h2 className="text-hero text-text mb-6">Not sure what you need?</h2>
            <p className="text-body-large text-text-secondary max-w-2xl mx-auto mb-10">
              Book a complimentary 1-hour assessment. We will review your requirements and provide a tailored recommendation — no obligation.
            </p>
            <Link to={`/${lang}/services`} className="btn-secondary">
              View our services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
