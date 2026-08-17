import { facebook, linkedin, site, siteUrl } from "@/data/site";

/**
 * Organization and website schema built only from data already published on the
 * site, so search engines and answer engines can cite it accurately.
 */
const organizationId = `${siteUrl}/#organization`;

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": organizationId,
      name: site.name,
      url: `${siteUrl}/`,
      logo: `${siteUrl}${site.logo}`,
      image: `${siteUrl}/fountain-bridge-preview.jpg`,
      description: site.summary,
      slogan: site.tagline,
      foundingDate: site.founded,
      email: site.emails[0],
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: site.address.countryCode,
      },
      areaServed: {
        "@type": "Country",
        name: site.address.country,
      },
      knowsLanguage: "en",
      sameAs: [facebook.pageUrl, linkedin.pageUrl],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "general enquiries",
          telephone: site.phone,
          email: site.emails[0],
          areaServed: site.address.countryCode,
          availableLanguage: "en",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: site.name,
      description: site.summary,
      inLanguage: "en",
      publisher: { "@id": organizationId },
    },
  ],
};

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      // Escaping `<` keeps the payload from ever terminating the script element.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
