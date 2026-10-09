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
  /** Card image for "Recent case studies"; a placeholder renders until one is supplied. */
  thumbnail?: string;
  /** Only Case Studies with a detail get a /case-studies/[slug] page. */
  detail?: CaseStudyDetail;
};

/** What a case-study card shows. `href` overrides the link derived from `detail`. */
export type CaseStudyTeaser = Pick<CaseStudy, 'title' | 'body' | 'chips' | 'thumbnail' | 'detail'> & { href?: string };

export type CaseIconName = 'globe' | 'shield' | 'shield-check' | 'building' | 'users';

/** An icon + title + body card, used for Client Overview stats and Challenges. */
export type CaseTile = {
  icon: CaseIconName;
  title: string;
  body: string;
};

export type SolutionLayer = {
  title: string;
  body: string;
};

export type ImpactStat = {
  icon: CaseIconName;
  value: number;
  suffix: string;
  label: string;
};

export type CaseStudyDetail = {
  slug: string;
  heroTitle: string;
  heroLede: string;
  heroImage?: string;
  overview: string;
  overviewStats: CaseTile[];
  challengesIntro: string;
  challenges: CaseTile[];
  solutionIntro: string;
  solutionLayers: SolutionLayer[];
  impactIntro: string;
  impact: ImpactStat[];
  insight: string;
  insightImage?: string;
};

export type CheckItem = string | { bold: string; rest: string };
