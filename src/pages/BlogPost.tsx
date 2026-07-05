import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { blogPosts, getBlogPostBySlug } from '../data/blogPosts';
import AnimatedSection from '../components/AnimatedSection';

function renderBlock(block: any, index: number) {
  switch (block.type) {
    case 'h1':
      return (
        <h1 key={index} className="text-3xl md:text-4xl font-bold text-text mb-6 mt-8 tracking-tight">
          {block.text}
        </h1>
      );
    case 'h2':
      return (
        <h2 key={index} className="text-2xl md:text-3xl font-semibold text-text mb-4 mt-12 tracking-tight">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={index} className="text-xl md:text-2xl font-semibold text-text mb-3 mt-10 tracking-tight">
          {block.text}
        </h3>
      );
    case 'paragraph':
      return (
        <p
          key={index}
          className="text-body text-text-secondary leading-relaxed mb-5"
          dangerouslySetInnerHTML={{ __html: formatText(block.text) }}
        />
      );
    case 'list':
      return (
        <ul key={index} className="space-y-3 mb-8 pl-4">
          {block.items?.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-body text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: formatText(item) }} />
            </li>
          ))}
        </ul>
      );
    case 'table':
      return (
        <div key={index} className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                {block.rows[0]?.map((cell: string, i: number) => (
                  <th key={i} className="text-left px-4 py-3 text-caption font-semibold text-text-muted uppercase tracking-wider">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.slice(1).map((row: string[], ri: number) => (
                <tr key={ri} className="border-b border-border hover:bg-surface/50 transition-colors">
                  {row.map((cell: string, ci: number) => (
                    <td key={ci} className="px-4 py-3 text-body text-text-secondary">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'quote':
      return (
        <blockquote key={index} className="pull-quote mb-8">
          <p className="text-subheading text-text-secondary leading-relaxed">{block.text}</p>
        </blockquote>
      );
    default:
      return null;
  }
}

function formatText(text: string): string {
  if (!text) return '';
  return text
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-surface px-1.5 py-0.5 rounded text-sm font-mono text-accent border border-border">$1</code>');
}

export default function BlogPost() {
  const { lang, slug } = useParams<{ lang: string; slug: string }>();
  const currentLang = lang || 'en';

  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center pt-[72px]">
        <div className="text-center">
          <div className="editorial-line mx-auto mb-6" />
          <h1 className="text-heading text-text mb-3">Post Not Found</h1>
          <p className="text-body text-text-secondary mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link to={`/${currentLang}/blog`} className="btn-primary">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div>
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] min-h-[320px]">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
        <div className="absolute inset-0 noise-texture" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="max-w-[900px] mx-auto">
            <AnimatedSection>
              <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-fg text-xs font-semibold mb-4">
                {post.category}
              </span>
              <h1 className="text-hero md:text-display text-bg mb-4 leading-tight max-w-3xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-5 text-caption text-text-secondary">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  {post.author}
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="section-padded bg-bg">
        <div className="max-w-[800px] mx-auto px-6 sm:px-8">
          {/* Back link */}
          <AnimatedSection className="mb-10">
            <Link
              to={`/${currentLang}/blog`}
              className="inline-flex items-center gap-2 text-caption text-text-secondary hover:text-accent transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </AnimatedSection>

          {/* Content */}
          <article>
            {post.blocks.map((block, index) => renderBlock(block, index))}
          </article>

          {/* CTA */}
          <AnimatedSection className="mt-16">
            <div className="relative bg-dark rounded-lg p-8 md:p-10 overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute inset-0 noise-texture" />
              <div className="relative z-10 text-center">
                <h3 className="text-subheading text-bg mb-3">Need IT Infrastructure for Your Factory?</h3>
                <p className="text-body text-text-secondary max-w-lg mx-auto mb-6">
                  Easy Data Solutions builds production-ready IT environments for BOI-approved manufacturers in the EEC.
                </p>
                <Link
                  to={`/${currentLang}/contact`}
                  className="btn-primary"
                >
                  Get a Free Assessment
                  <Share2 className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Related Posts */}
          {related.length > 0 && (
            <AnimatedSection className="mt-16">
              <div className="editorial-line mb-6" />
              <h3 className="text-heading text-text mb-8">Related Reading</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    to={`/${currentLang}/blog/${rPost.slug}`}
                    className="group block"
                  >
                    <div className="bg-surface-elevated border border-border rounded-lg p-5 card-hover h-full">
                      <span className="text-caption text-accent font-medium">{rPost.category}</span>
                      <h4 className="text-subheading text-text mt-2 leading-snug group-hover:text-accent transition-colors text-[15px]">
                        {rPost.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
}
