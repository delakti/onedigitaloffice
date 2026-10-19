import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  schemaType?: 'Organization' | 'ProfessionalService' | 'Article' | 'WebPage';
  structuredData?: Record<string, unknown>;
}

const DEFAULT_TITLE = 'OneDigitalOffice | Microsoft 365, SharePoint & AI Transformation Consultancy';
const DEFAULT_DESCRIPTION = 'OneDigitalOffice helps UK organisations modernise their digital workplaces, automate complex business processes, and deploy secure AI through Microsoft 365, SharePoint, and Copilot.';
const BASE_URL = 'https://www.onedigitaloffice.com';

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonicalPath,
  schemaType = 'ProfessionalService',
  structuredData
}) => {
  const location = useLocation();
  const fullTitle = title 
    ? `${title} | OneDigitalOffice` 
    : DEFAULT_TITLE;
  
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${BASE_URL}${currentPath.startsWith('/') ? currentPath : `/${currentPath}`}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to update or create meta tag
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // 2. Update Primary Meta Tags
    updateMeta('description', description);
    if (keywords) {
      updateMeta('keywords', keywords);
    }

    // 3. Update OpenGraph Tags
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:url', canonicalUrl, true);
    updateMeta('og:type', 'website', true);
    updateMeta('og:locale', 'en_GB', true);
    updateMeta('og:site_name', 'OneDigitalOffice', true);

    // 4. Update Twitter Card Tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:url', canonicalUrl);

    // 5. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // 6. Update JSON-LD Structured Data
    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      'name': 'OneDigitalOffice',
      'url': BASE_URL,
      'description': DEFAULT_DESCRIPTION,
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'GB',
      },
      'knowsAbout': [
        'Microsoft 365',
        'SharePoint Online',
        'Microsoft Copilot',
        'Power Platform',
        'AI Agents',
        'Enterprise Application Engineering',
        'AI Governance'
      ],
      'founder': {
        '@type': 'Person',
        'name': 'Adeyemi Adelakun',
        'jobTitle': 'Founder & Principal Enterprise Architect'
      }
    };

    const finalSchema = structuredData || defaultSchema;
    let schemaScript = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(finalSchema);

    // Scroll to top on navigation
    window.scrollTo(0, 0);
  }, [fullTitle, description, keywords, canonicalUrl, schemaType, structuredData]);

  return null;
};
