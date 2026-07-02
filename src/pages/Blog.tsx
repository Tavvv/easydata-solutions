import { useTranslation } from 'react-i18next';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const categories = ['EEC News', 'BOI Updates', 'IT Infrastructure Guides', 'Manufacturing Digitalization'];

const postCategoryMap: Record<number, string> = {
  1: 'EEC News',
  2: 'BOI Updates',
  3: 'IT Infrastructure Guides',
  4: 'IT Infrastructure Guides',
  5: 'EEC News',
  6: 'Manufacturing Digitalization',
};

export default function Blog() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.split('/')[1] || 'en';

  const posts = Array.from({ length: 6 }, (_, i) => i + 1).map((n) => ({
    id: n,
    title: t(`blog.post_${n}_title`),
    excerpt: t(`blog.post_${n}_desc`),
    category: postCategoryMap[n] || 'EEC News',
  }));

  return (
    <div>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('blog.title')}</h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">{t('blog.subtitle')}</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full bg-surface text-xs font-medium text-text-muted border border-border"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Placeholder image */}
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-primary/40" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="inline-block self-start px-2 py-0.5 rounded bg-accent/10 text-accent text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-primary mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-text-muted mb-4 flex-1">{post.excerpt}</p>
                  <Link
                    to={`/${lang}/blog`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    {t('blog.read_more')}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
