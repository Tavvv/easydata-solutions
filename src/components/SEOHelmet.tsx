import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  schema?: object;
  hreflang?: { en: string; zh: string; th: string };
}

export default function SEOHelmet({
  title = 'Easy Data Solutions',
  description = 'IT Infrastructure for EEC Manufacturers in Thailand',
  keywords = 'IT infrastructure, EEC Thailand, BOI, manufacturing, server, database, network',
  schema,
  hreflang,
}: SEOHelmetProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Set html lang
    const langMatch = window.location.pathname.match(/^\/(en|zh|th)/);
    const pageLang = langMatch ? langMatch[1] : 'en';
    document.documentElement.lang = pageLang;
    if (i18n.language !== pageLang) {
      i18n.changeLanguage(pageLang);
    }

    // JSON-LD schema
    let scriptTag: HTMLScriptElement | null = null;
    if (schema) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.textContent = JSON.stringify(schema);
      document.head.appendChild(scriptTag);
    }

    // Hreflang links
    const hreflangLinks: HTMLLinkElement[] = [];
    if (hreflang) {
      Object.entries(hreflang).forEach(([lang, url]) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        link.setAttribute('href', url);
        document.head.appendChild(link);
        hreflangLinks.push(link);
      });
    }

    return () => {
      if (scriptTag && document.head.contains(scriptTag)) {
        document.head.removeChild(scriptTag);
      }
      hreflangLinks.forEach((link) => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [title, description, keywords, schema, hreflang, i18n]);

  return null;
}
