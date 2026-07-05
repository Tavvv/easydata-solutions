import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar, Clock, User, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';

interface BlogPostData {
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

const posts: BlogPostData[] = [
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

  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1, 3);
  const gridPosts = posts.slice(3);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 noise-texture" />
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10 py-28">
          <AnimatedSection>
            <div className="editorial-line mb-8" />
            <h1 className="text-display text-bg max-w-3xl mb-6">{t('blog.title')}</h1>
            <p className="text-body-large text-text-secondary max-w-2xl">{t('blog.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1.5 rounded-full text-caption font-medium text-text-secondary border border-border hover:border-accent hover:text-accent transition-all cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <AnimatedSection>
            <div className="group bg-surface-elevated border border-border rounded-lg overflow-hidden card-hover">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto min-h-[320px]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-accent text-accent-fg text-xs font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-caption text-text-muted mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {featuredPost.author}
                    </span>
                  </div>
                  <h2 className="text-hero text-text mb-4 leading-tight">{featuredPost.title}</h2>
                  <p className="text-body text-text-secondary leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <Link
                    to={`/${lang}/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-caption font-medium text-accent hover:text-accent-light transition-colors group"
                  >
                    {t('blog.read_more')}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Secondary Posts */}
      <section className="section-padded-sm bg-surface border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryPosts.map((post) => (
              <StaggerItem key={post.id}>
                <Link to={`/${lang}/blog/${post.slug}`} className="group block">
                  <div className="bg-surface-elevated border border-border rounded-lg overflow-hidden card-hover h-full flex flex-col">
                    <div className="relative h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-accent text-accent-fg text-[10px] font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-caption text-text-muted mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-subheading text-text mb-2 leading-snug group-hover:text-accent transition-colors">{post.title}</h3>
                      <p className="text-caption text-text-secondary flex-1 leading-relaxed">{post.excerpt}</p>
                      <div className="mt-4 flex items-center gap-1 text-caption text-accent font-medium">
                        <span>{t('blog.read_more')}</span>
                        <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Grid Posts */}
      <section className="section-padded bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post) => (
              <StaggerItem key={post.id}>
                <Link to={`/${lang}/blog/${post.slug}`} className="group block">
                  <div className="bg-surface-elevated border border-border rounded-lg overflow-hidden card-hover h-full flex flex-col">
                    <div className="relative h-44">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-accent text-accent-fg text-[10px] font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-caption text-text-muted mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-subheading text-text mb-2 leading-snug group-hover:text-accent transition-colors text-[15px]">{post.title}</h3>
                      <p className="text-caption text-text-secondary flex-1 leading-relaxed">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padded bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 noise-texture" />
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10 text-center">
          <AnimatedSection>
            <div className="editorial-line mx-auto mb-8" />
            <h2 className="text-hero text-bg mb-4">Stay Ahead of EEC Manufacturing IT</h2>
            <p className="text-body text-text-secondary max-w-xl mx-auto mb-10">
              New blog posts every week covering BOI updates, EEC investment trends, and IT infrastructure best practices for Thai manufacturers.
            </p>
            <Link
              to={`/${lang}/contact`}
              className="btn-primary"
            >
              Subscribe for Updates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
