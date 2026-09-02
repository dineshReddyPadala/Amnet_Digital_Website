import type { MedallionLayer, MedallionLayerKey } from '@/lib/types';

export const MEDALLION: Record<MedallionLayerKey, MedallionLayer> = {
  bronze: {
    title: 'Bronze — the raw layer',
    paragraph:
      'Full-fidelity, immutable ingestion from every source: ERP, CRM, HCM, SCM, SaaS, streaming events, IoT, files, databases, and mainframes — batch, real-time, CDC, and API.',
    points: [
      'Raw ingestion with complete audit & lineage',
      'Immutable, replayable history of every record',
      'Agents auto-discover schemas as sources connect',
      'Secure, scalable ingestion by design',
    ],
  },
  silver: {
    title: 'Silver — cleansed & conformed',
    paragraph:
      'Data quality agents cleanse, standardize, deduplicate, and validate — resolving Customer, Product, and Account 360 across systems into single trusted entities.',
    points: [
      'Automated cleansing & standardization',
      'Continuous quality checks, not one-time fixes',
      'Entity resolution across the enterprise',
      'PII detection & governance built in',
    ],
  },
  gold: {
    title: 'Gold — the AI-ready business layer',
    paragraph:
      "Curated business models, KPIs, and AI/ML-ready datasets — the trusted foundation for analytics, GenAI, RAG, copilots, and Amnet Agent Foundry's decision engines.",
    points: [
      'KPI-aligned business models',
      'Optimized for analytics AND GenAI',
      'Data products, APIs & marketplace-ready',
      'The single source Amnet Agent Foundry acts on',
    ],
  },
  semantic: {
    title: 'Semantic layer — business-friendly intelligence',
    paragraph:
      'Sitting on top of Gold, the semantic layer translates technical data into business language — so decisions are made in the vocabulary of the business, not the warehouse.',
    points: [
      'Metrics defined once, used everywhere',
      'Natural-language access for every team',
      'Consistent numbers in every room',
      'Role, policy & row/column security',
    ],
  },
};
