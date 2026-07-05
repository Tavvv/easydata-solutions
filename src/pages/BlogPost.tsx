import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { blogPosts, getBlogPostBySlug } from '../data/blogPosts';

function renderBlock(block: any, index: number) {
  switch (block.type) {
    case 'h1':
      return (
        <h1 key={index} className="text-3xl md:text-4xl font-bold text-primary mb-6 mt-8">
          {block.text}
        </h1>
      );
    case 'h2':
      return (
        <h2 key={index} className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-10">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={index} className="text-xl md:text-2xl font-semibold text-primary mb-3 mt-8">
          {block.text}
        </h3>
      );
    case 'paragraph':
      return (
        <p
          key={index}
          className="text-base text-text leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: formatText(block.text) }}
        />
      );
    case 'list':
      return (
        <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-text">
          {block.items?.map((item: string, i: number) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatText(item) }} />
          ))}
        </ul>
      );
    case 'table':
      return (
        <div key={index} className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-surface">
                {block.rows[0]?.map((cell: string, i: number) => (
                  <th key={i} className="border border-border px-3 py-2 text-left text-sm font-semibold text-primary">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.slice(1).map((row: string[], ri: number) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-surface/50'}>
                  {row.map((cell: string, ci: number) => (
                    <td key={ci} className="border border-border px-3 py-2 text-sm text-text">
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
        <blockquote key={index} className="border-l-4 border-accent bg-accent/5 pl-4 py-3 pr-4 mb-6 italic text-text">
          {block.text}
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
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-surface px-1 py-0.5 rounded text-sm font-mono">$1</code>');
}

export default function BlogPost() {
  const { lang, slug } = useParams<{ lang: string; slug: string }>();
  const currentLang = lang || 'en';

  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-2">Post Not Found</h1>
          <p className="text-text-muted mb-4">The blog post you're looking for doesn't exist.</p>
          <Link to={`/${currentLang}/blog`} className="text-accent hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Related posts (3 random other posts)
  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div>
      {/* Hero Image */}
      <div className="h-64 md:h-80 lg:h-96 relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-[900px] mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold mb-3">
              {post.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-8 md:py-12">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          {/* Back link */}
          <Link
            to={`/${currentLang}/blog`}
            className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Content */}
          <article className="prose prose-lg max-w-none">
            {post.blocks.map((block, index) => renderBlock(block, index))}
          </article>

          {/* CTA */}
          <div className="mt-12 p-6 md:p-8 bg-primary rounded-xl text-white text-center">
            <h3 className="text-xl font-bold mb-2">Need IT Infrastructure for Your Factory?</h3>
            <p className="text-white/80 mb-4">
              Easy Data Solutions builds production-ready IT environments for BOI-approved manufacturers in the EEC.
            </p>
            <Link
              to={`/${currentLang}/contact`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
            >
              Get a Free Assessment
              <Share2 className="w-4 h-4" />
            </Link>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-primary mb-6">Related Reading</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    to={`/${currentLang}/blog/${rPost.slug}`}
                    className="bg-white rounded-lg border border-border p-4 hover:shadow-md transition-shadow"
                  >
                    <span className="text-xs font-medium text-accent">{rPost.category}</span>
                    <h4 className="text-sm font-semibold text-primary mt-1 leading-snug">
                      {rPost.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
