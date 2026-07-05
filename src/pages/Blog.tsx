import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    slug: 'data-center-boom',
    title: "What Thailand's $3.1B Data Center Boom Means for EEC Manufacturers",
    excerpt: "In January 2026, the BOI approved THB 96.88 billion in data center projects. Here's what this structural shift means for your factory's IT planning, power requirements, and connectivity strategy.",
    category: 'EEC News',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80',
    date: 'July 2026',
    author: 'EDS Intelligence Unit',
    readTime: '7 min',
  },
  {
    id: 2,
    slug: 'boi-fastpass',
    title: 'BOI FastPass: How to Structure IT Infrastructure for Accelerated Approval',
    excerpt: "Thailand's FastPass program delivers BOI approval in 60–90 days for qualifying projects. Learn how to structure your IT spend as qualifying investment and avoid common application mistakes.",
    category: 'BOI Updates',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop&q=80',
    date: 'July 2026',
    author: 'EDS Intelligence Unit',
    readTime: '7 min',
  },
  {
    id: 3,
    slug: 'chonburi-checklist',
    title: 'IT Infrastructure Checklist for New BOI Factories in Chonburi',
    excerpt: 'From server room cooling to Oracle licensing — a practical checklist for project managers setting up new manufacturing facilities in Chonburi, with cost ranges and vendor timelines.',
    category: 'IT Infrastructure Guides',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2aefe0503?w=600&h=400&fit=crop&q=80',
    date: 'July 2026',
    author: 'EDS Technical Team',
    readTime: '7 min',
  },
  {
    id: 5,
    slug: 'robot-cluster',
    title: 'The Humanoid Robot Cluster in Rayong: IT Requirements for Precision Manufacturing',
    excerpt: 'Xusheng, Seenpin, and Sanhua are building Thailand\'s first humanoid robot cluster in Rayong. Here is the IT infrastructure they need for micron-level precision manufacturing.',
    category: 'Manufacturing Digitalization',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&q=80',
    date: 'July 2026',
    author: 'EDS Intelligence Unit',
    readTime: '7 min',
  },
  {
    id: 6,
    slug: 'ev-supply-chain',
    title: 'EV Supply Chain IT: From BYD to Hitachi Astemo in the EEC',
    excerpt: 'Thailand\'s EV market is growing at 12.17% CAGR. Here is the IT backbone checklist for automotive Tier-1 and Tier-2 suppliers setting up in Chonburi, Rayong, and Chachoengsao.',
    category: 'EEC News',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop&q=80',
    date: 'July 2026',
    author: 'EDS Intelligence Unit',
    readTime: '7 min',
  },
  {
    id: 7,
    slug: '5g-wifi6',
    title: 'Private 5G and Wi-Fi 6 for Thai Factories: What Manufacturers Need to Know',
    excerpt: 'Next-generation wireless is transforming factory floors. We compare Private 5G and Wi-Fi 6 use cases, costs, timelines, and ROI for manufacturing environments in the EEC.',
    category: 'IT Infrastructure Guides',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80',
    date: 'July 2026',
    author: 'EDS Technical Team',
    readTime: '7 min',
  },
  {
    id: 8,
    slug: 'mes-integration',
    title: 'MES Integration for Thai Electronics Manufacturers: A Practical Guide',
    excerpt: 'A 4-phase implementation roadmap for manufacturing execution systems. From vendor selection to digitalization, with cost ranges and common pitfalls to avoid.',
    category: 'Manufacturing Digitalization',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2aefe0503?w=600&h=400&fit=crop&q=80',
    date: 'July 2026',
    author: 'EDS Technical Team',
    readTime: '7 min',
  },
];

const categories = ['EEC News', 'BOI Updates', 'IT Infrastructure Guides', 'Manufacturing Digitalization'];

export default function Blog() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.split('/')[1] || 'en';

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('blog.title')}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">{t('blog.subtitle')}</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full bg-white text-sm font-medium text-text border border-border hover:border-accent hover:text-accent transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post (Post 1) */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto relative">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold">
                    {posts[0].category}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-text-muted mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {posts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {posts[0].readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {posts[0].author}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                  {posts[0].title}
                </h2>
                <p className="text-text-muted mb-6 leading-relaxed">{posts[0].excerpt}</p>
                <Link
                  to={`/${lang}/blog/${posts[0].slug}`}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:underline self-start"
                >
                  {t('blog.read_more')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid (Posts 2-3) */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.slice(1, 3).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 flex flex-col"
              >
                <div className="h-48 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-accent text-white text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-text-muted mb-4 flex-1 leading-relaxed">{post.excerpt}</p>
                  <Link
                    to={`/${lang}/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
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

      {/* Post Grid (Posts 5-8) */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(3).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 flex flex-col"
              >
                <div className="h-48 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-accent text-white text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-text-muted mb-4 flex-1 leading-relaxed">{post.excerpt}</p>
                  <Link
                    to={`/${lang}/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
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

      {/* Subscribe / CTA */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay Ahead of EEC Manufacturing IT</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-6">
              New blog posts every week covering BOI updates, EEC investment trends, and IT infrastructure best practices for Thai manufacturers.
            </p>
            <Link
              to={`/${lang}/contact`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
            >
              Subscribe for Updates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
