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

/**
 * One piece of a legal document section. A plain string is a paragraph: emails and URLs in it become links,
 * and **text** is bold.
 */
export type LegalBlock =
  | string
  /** Heading with a bullet dot, inside a section. */
  | { type: 'subheading'; text: string }
  /** Bold lead-in line, e.g. introducing a list. */
  | { type: 'lead'; text: string }
  /** List with written markers ("a)", "b)"); item text is inline like a paragraph. */
  | { type: 'list'; items: { marker: string; text: string }[] }
  /** Titled subsections grouped behind a left rule. */
  | { type: 'subsections'; items: { id: string; title: string; blocks: LegalBlock[] }[] }
  /** Tinted box of external links in two columns. */
  | { type: 'links'; title: string; links: { label: string; href: string }[] }
  /** Highlighted example: "The following is an example of a <kind> cookie: <name> — <text>". */
  | { type: 'example'; kind: string; name: string; text: string }
  /** Table whose first column is a code name; stacks into a list on mobile. */
  | { type: 'table'; caption: string; head: [string, string, string]; rows: [string, string, string][] };

export type LegalSection = {
  id: string;
  /** Shorter label for the "On this page" list. */
  navLabel: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  sections: LegalSection[];
};
