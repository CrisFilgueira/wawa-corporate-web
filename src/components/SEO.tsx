import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: string;
}

export const SEO = ({ title, description, canonical, image = "https://somoswawa.com/og-image.webp", type = "website" }: SEOProps) => {

    // JSON-LD Structured Data Schema implementation for Organization/LocalBusiness
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Wawa",
        "url": "https://somoswawa.com",
        "logo": "https://somoswawa.com/favicon.svg",
        "description": "Estudio de Automatizaciones, IA & Gestión Operativa",
        "sameAs": [
            "https://www.linkedin.com/company/somoswawa"
        ]
    };

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:image" content={image} />
            {canonical && <meta property="og:url" content={canonical} />}
            <meta property="og:site_name" content="Wawa" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {canonical && <link rel="canonical" href={canonical} />}

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify(schemaMarkup)}
            </script>
        </Helmet>
    );
};
