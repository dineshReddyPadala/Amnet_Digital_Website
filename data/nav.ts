import type { NavDropdownItem } from '@/lib/types';

export const PLATFORM_LINKS: NavDropdownItem[] = [
  {
    href: '/data-foundry',
    icon: '▣',
    title: 'Amnet Data Foundry',
    description: 'Agentic data engineering — AI-ready Gold data in days',
  },
  {
    href: '/agent-foundry',
    icon: '◈',
    title: 'Amnet Agent Foundry',
    description: 'Autonomous decisions & execution, with humans in control',
  },
  {
    href: '/aidlc',
    icon: '⬡',
    title: 'AIDLC',
    description: 'Our enterprise AI delivery methodology',
  },
  {
    href: '/dam',
    icon: '▤',
    title: 'AI-Powered DAM',
    description: 'Intelligent digital asset management at enterprise scale',
  },
];

export const INDUSTRY_LINKS: NavDropdownItem[] = [
  { href: '/industries/retail', icon: '◧', title: 'Retail & E-commerce', description: 'Convert intent into revenue' },
  { href: '/industries/cpg', icon: '◨', title: 'CPG / FMCG', description: 'Demand & distribution excellence' },
  { href: '/industries/media', icon: '◩', title: 'Media & Entertainment', description: 'Engagement & monetization' },
  { href: '/industries/logistics', icon: '◪', title: 'Logistics & Supply Chain', description: 'Master the last mile' },
  {
    href: '/industries/infomgmt',
    icon: '◫',
    title: 'Information Management',
    description: 'Static data → strategic assets',
  },
  { href: '/industries/travel', icon: '◬', title: 'Travel & Leisure', description: 'Guest intelligence at scale' },
];

export const PRIMARY_NAV = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
];

export type MobileNavEntry =
  | { type: 'link'; href: string; label: string; highlight?: boolean }
  | { type: 'group'; label: string; items: NavDropdownItem[]; allHref?: string; allLabel?: string };

// Mobile burger menu structure. Platforms/Industries reuse the exact same
// PLATFORM_LINKS/INDUSTRY_LINKS data as the desktop hover dropdowns (single
// source of truth) so mobile visitors can reach every industry/platform page
// directly, not just the two landing pages.
export const MOBILE_NAV: MobileNavEntry[] = [
  { type: 'link', href: '/', label: 'Home' },
  { type: 'group', label: 'Platforms', items: PLATFORM_LINKS },
  { type: 'link', href: '/services', label: 'Services' },
  { type: 'group', label: 'Industries', items: INDUSTRY_LINKS, allHref: '/industries', allLabel: 'All industries' },
  { type: 'link', href: '/case-studies', label: 'Case Studies' },
  { type: 'link', href: '/about', label: 'About' },
  { type: 'link', href: '/careers', label: 'Careers' },
  { type: 'link', href: '/contact', label: 'Talk to an Expert →', highlight: true },
];
