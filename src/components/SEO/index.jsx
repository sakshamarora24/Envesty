import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title, 
  description, 
  keywords,
  image = '/images/latest/image.png',
  url = 'https://envesty.com'
}) => {
  const siteTitle = `${title} | Envesty - Financial Planning and Wealth Management`;
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Envesty",
            "url": "https://envesty.com",
            "logo": "/images/latest/image.png",
            "description": "${description}",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://facebook.com/envesty",
              "https://twitter.com/envesty",
              "https://linkedin.com/company/envesty"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
