import type { CaseStudy } from '@/lib/types';

export const CASES: CaseStudy[] = [
  {
    client: 'Fortune 500 Retailer · US',
    metric: '14→1',
    metricLabel: 'Data sources → one trusted view',
    title: 'A unified commerce brain, forged in six weeks',
    body: 'Fourteen fragmented sources — POS, e-commerce, campaigns, loyalty, and conversations — unified into a governed Medallion architecture by Amnet Data Foundry agents. The Opportunity Discovery Engine now surfaces buying intent daily; campaign ROI improved double-digits in the first quarter.',
    chips: ['Amnet Data Foundry', 'Opportunity Discovery', 'Retail'],
  },
  {
    client: 'Global Information Management Leader',
    metric: '90%',
    metricLabel: 'Faster asset discovery',
    title: '5,000+ hours of video, made searchable by AI',
    body: 'We built an AI-powered DAM enriching a massive media backlog with speech-to-text, OCR, face and object detection, and GenAI summaries — with proxy playback, clip creation, natural-language search, and multi-tenant governance aligned to their enterprise platform.',
    chips: ['AI-Powered DAM', 'GenAI Enrichment', 'Media Archives'],
  },
  {
    client: 'Enterprise CPG Brand · EMEA',
    metric: '8–15%',
    metricLabel: 'Revenue uplift, no added spend',
    title: 'Revenue allocation, re-decided every day by agents',
    body: 'AI agents continuously re-optimize allocation across channels, regions, and SKUs — pricing, promotions, and trade spend tuned in real time with fully explainable decision logic and human approval gates on strategic moves.',
    chips: ['Amnet Agent Foundry', 'Revenue Acceleration', 'CPG / FMCG'],
  },
  {
    client: 'Logistics Network · Global',
    metric: '↑OTD',
    metricLabel: 'On-time delivery & fleet utilization',
    title: 'The last mile, mastered with edge intelligence',
    body: 'Fleet telematics, warehouse logs, and live traffic unified in Amnet Data Foundry; agents predict delays, optimize route density, and automate carrier tendering — cutting cost-per-delivery while lifting on-time performance and NPS.',
    chips: ['Amnet Data Foundry', 'Deal Acceleration', 'Logistics'],
  },
];
