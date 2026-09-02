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

export const MOBILE_MENU_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/data-foundry', label: 'Amnet Data Foundry', sub: true },
  { href: '/agent-foundry', label: 'Amnet Agent Foundry', sub: true },
  { href: '/aidlc', label: 'AIDLC', sub: true },
  { href: '/dam', label: 'AI-Powered DAM', sub: true },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Talk to an Expert →', highlight: true },
];
