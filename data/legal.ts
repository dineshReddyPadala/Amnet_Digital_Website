export type LegalPolicy = {
  title: string;
  updated: string;
  excerpt: string;
  href: string;
};

// Policy pages are not built yet; the hrefs are their final routes.
export const LEGAL_POLICIES: LegalPolicy[] = [
  {
    title: 'Privacy Policy',
    updated: 'Last updated on January 2023',
    excerpt:
      'Amnet Digital attaches great importance to your right to privacy and the protection of your personal data...',
    href: '/legal-resources/privacy-policy',
  },
  {
    title: 'Cookies Policy',
    updated: 'Last updated on January 2023',
    excerpt:
      'A cookie is a small text file that is stored on your computer or another internet-connected device in order to identify your browser, provide analytics...',
    href: '/legal-resources/cookies-policy',
  },
  {
    title: 'Terms Of Use',
    updated: 'Last updated on January 2023',
    excerpt:
      'This Site provides online access to information about our organization, products, solutions, services, and opportunities...',
    href: '/legal-resources/terms-of-use',
  },
];
