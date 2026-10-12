export type NavDropdownItem = {
  href: string;
  icon: string;
  title: string;
  description: string;
};

export type MedallionLayerKey = 'bronze' | 'silver' | 'gold' | 'semantic';

export type MedallionLayer = {
  title: string;
  paragraph: string;
  points: string[];
};

export type IndustrySlug = 'retail' | 'cpg' | 'media' | 'logistics' | 'infomgmt' | 'travel';

export type Engine = {
  title: string;
  body: string;
};

export type Industry = {
  slug: IndustrySlug;
  name: string;
  glyph: string;
  gradient: string;
  short: string;
  eyebrow: string;
  title: string;
  sub: string;
  growth: string;
  challenges: string[];
  engines: Engine[];
  pipe: string[];
  impact: string[];
  why: string[];
  ctaHeading: string;
  ctaParagraph: string;
};

export type CaseStudy = {
  client: string;
  metric: string;
  metricLabel: string;
  title: string;
  body: string;
  chips: string[];
};

export type CheckItem = string | { bold: string; rest: string };

export type LegalSubsection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type LegalSection = {
  id: string;
  /** Shorter label for the "On this page" list. */
  navLabel: string;
  title: string;
  paragraphs: string[];
  subsections?: LegalSubsection[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  sections: LegalSection[];
};
