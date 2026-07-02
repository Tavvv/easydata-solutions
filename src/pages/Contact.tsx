import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('contact.title')}</h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text mb-1">{t('contact.form_name')}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1">{t('contact.form_email')}</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1">{t('contact.form_company')}</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1">{t('contact.form_message')}</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {t('contact.form_submit')}
                </button>
                {submitted && (
                  <p className="text-sm text-success">Thank you! We will get back to you shortly.</p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-6">Contact information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text">Email</div>
                    <a href={`mailto:${t('contact.email')}`} className="text-sm text-text-muted hover:text-accent">
                      {t('contact.email')}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text">Phone</div>
                    <a href={`tel:${t('contact.phone')}`} className="text-sm text-text-muted hover:text-accent">
                      {t('contact.phone')}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text">Location</div>
                    <p className="text-sm text-text-muted">{t('contact.location')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text">{t('contact.wechat_title')}</div>
                    <p className="text-sm text-text-muted">{t('contact.wechat_desc')}</p>
                    <div className="mt-3 w-32 h-32 bg-surface rounded-lg border border-border flex flex-col items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-text-muted mb-2" />
                      <span className="text-xs text-text-muted text-center px-2">Scan to connect</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-surface py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-border p-8 md:p-12 text-center shadow-sm">
            <div className="w-full h-64 md:h-80 bg-surface rounded-lg flex items-center justify-center">
              <div className="flex items-center gap-2 text-text-muted">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">EEC Region, Thailand</span>
              </div>
            </div>
            <p className="text-sm text-text-muted mt-4">We operate across Chonburi, Rayong, and Chachoengsao</p>
          </div>
        </div>
      </section>
    </div>
  );
}
