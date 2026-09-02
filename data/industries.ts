import type { Industry, IndustrySlug } from '@/lib/types';

export const INDUSTRIES: Record<IndustrySlug, Industry> = {
  retail: {
    slug: 'retail',
    name: 'Retail & E-commerce',
    glyph: '🛍',
    gradient: 'linear-gradient(135deg,#5646E5,#6D5CFF)',
    short: 'Uncover real-time buying intent, convert high-intent shoppers faster, and continuously optimize pricing & promotions.',
    eyebrow: 'Retail & E-commerce',
    title: 'AI-powered retail intelligence that drives conversions',
    sub: 'Powered by Amnet Data Foundry — transform your marketing, sales, and customer interactions into actionable insights and automated decisions that accelerate revenue growth.',
    growth:
      'Identify customer demand in real time and act on it instantly. High-intent shoppers convert faster through personalized experiences; pricing and promotions are continuously optimized. The result: higher conversions, better retention, sustained growth.',
    challenges: [
      'Campaign performance lacks actionable insights and clear optimization direction',
      'High lead volumes with no effective prioritization',
      'Customer intent hidden within conversations and interactions',
      'Limited visibility into what truly drives conversions and revenue',
    ],
    engines: [
      {
        title: 'Opportunity Discovery',
        body: 'Uncover real-time buying intent, emerging product trends, and high-value segments hidden in behavioural and transactional data — smarter merchandising and targeting.',
      },
      {
        title: 'Deal Acceleration',
        body: 'Convert high-intent shoppers faster with intelligent lead prioritization, personalized nudges, and real-time engagement across channels.',
      },
      {
        title: 'Revenue Acceleration',
        body: 'Continuously optimize pricing, promotions, and recommendations — higher cart value, repeat purchase, and lifetime value.',
      },
    ],
    pipe: [
      'Campaign + Lead + Conversation Data',
      'Unified in Amnet Data Foundry',
      'AI Agents analyze behaviour',
      'Insights & recommendations',
      'Automated / guided actions',
      'Measurable outcomes',
    ],
    impact: [
      'Improve campaign ROI by optimizing spend allocation',
      'Increase conversion rates through intelligent lead prioritization',
      'Unlock hidden customer insights from conversations',
      'Accelerate revenue with faster, data-driven decisions',
    ],
    why: [
      'Campaign-level contextual intelligence, not generic dashboards',
      'Explainable AI with clear reasoning behind every recommendation',
      'Real-time insights aligned to business outcomes',
      'Continuous learning models that improve with data',
    ],
    ctaHeading: 'Turn retail data into revenue growth',
    ctaParagraph: 'Unlock the power of AI-driven insights and automation across your retail operations.',
  },
  cpg: {
    slug: 'cpg',
    name: 'CPG / FMCG',
    glyph: '📦',
    gradient: 'linear-gradient(135deg,#2C7A5B,#61C29A)',
    short: 'Sense demand shifts early, sharpen trade promotions, and optimize distribution — sell-through up, wastage down.',
    eyebrow: 'CPG / FMCG',
    title: 'Drive demand and distribution excellence with AI',
    sub: 'Powered by Amnet Data Foundry — unify consumer, distributor, and sales data to optimize demand, promotions, and channel performance in real time.',
    growth:
      'Sense demand shifts early and respond with precision. Promotions and distribution decisions become faster and more effective — improved sell-through, reduced wastage, higher revenue realization.',
    challenges: [
      'Demand volatility across regions and SKUs',
      'Inefficient trade promotions with unclear ROI',
      'Limited visibility into distributor performance',
      'Fragmented consumer insights',
    ],
    engines: [
      {
        title: 'Opportunity Discovery',
        body: 'Identify demand shifts across SKUs, regions, and channels from consumer behaviour, sales patterns, and market signals — proactive production and distribution planning.',
      },
      {
        title: 'Deal Acceleration',
        body: 'Accelerate trade-promotion and distributor decisions with real-time insights — faster execution, improved sell-through.',
      },
      {
        title: 'Revenue Acceleration',
        body: 'Optimize pricing, promotions, and inventory flow — higher ROI on trade spend, stronger market performance.',
      },
    ],
    pipe: [
      'Consumer + Sales + Distribution Data',
      'Unified in Amnet Data Foundry',
      'AI Agents analyze demand',
      'Insights & recommendations',
      'Automated actions',
      'Higher sell-through',
    ],
    impact: [
      'Improved demand accuracy across regions & SKUs',
      'Higher promotion ROI on every trade dollar',
      'Optimized distribution & reduced wastage',
      'Real-time channel performance visibility',
    ],
    why: [
      'A unified data foundation across consumer, sales & distributor data',
      'Real-time insights at the pace of the shelf',
      'Explainable AI behind every allocation decision',
      'Proven CPG accelerators & domain expertise',
    ],
    ctaHeading: 'Optimize demand with AI intelligence',
    ctaParagraph: 'Unify consumer, distributor, and sales data — and act on it in real time.',
  },
  media: {
    slug: 'media',
    name: 'Media & Entertainment',
    glyph: '🎬',
    gradient: 'linear-gradient(135deg,#5B3CB0,#9A6BF0)',
    short: 'Understand audiences, predict content performance, and optimize monetization across ads, subscriptions & formats.',
    eyebrow: 'Media & Entertainment',
    title: 'Maximize content engagement and monetization with AI',
    sub: 'Powered by Amnet Data Foundry — leverage AI to understand audience behaviour, predict content performance, and optimize monetization strategies.',
    growth:
      'Understand what audiences want and act on it instantly. Content and monetization strategies become data-driven and effective — higher engagement, better retention, increased revenue.',
    challenges: [
      'Unpredictable audience behaviour',
      'Content performance uncertainty',
      'Monetization inefficiencies across ads & subscriptions',
      'Fragmented viewer data across platforms',
    ],
    engines: [
      {
        title: 'Opportunity Discovery',
        body: 'Identify emerging content trends, audience preferences, and engagement patterns — smarter content creation and programming.',
      },
      {
        title: 'Deal Acceleration',
        body: 'Accelerate content distribution and ad sales through real-time audience insights and performance signals.',
      },
      {
        title: 'Revenue Acceleration',
        body: 'Optimize monetization across ads, subscriptions, and formats — engagement, retention, and revenue up.',
      },
    ],
    pipe: [
      'Viewer + Content + Ad Data',
      'Unified in Amnet Data Foundry',
      'AI Agents analyze audiences',
      'Performance predictions',
      'Programming & pricing actions',
      'Engagement & revenue',
    ],
    impact: [
      'Increased audience engagement',
      'Higher monetization per viewer',
      'Reduced churn',
      'Data-backed programming decisions',
    ],
    why: [
      'Data-driven audience intelligence',
      'Real-time optimization',
      'Scalable insights across catalogs & platforms',
      'AI-powered DAM for your entire media library',
    ],
    ctaHeading: 'Make every minute of content count',
    ctaParagraph: 'See how audience intelligence and AI-enriched asset management transform media economics.',
  },
  logistics: {
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    glyph: '🚚',
    gradient: 'linear-gradient(135deg,#1E5FA5,#4CC3FF)',
    short: 'Predict delays, optimize route density, automate carrier selection — faster transit, lower cost-per-delivery.',
    eyebrow: 'Logistics & Supply Chain',
    title: 'Master the last mile and beyond with AI-driven logistics intelligence',
    sub: 'Powered by Amnet Data Foundry — unify fleet telematics, warehouse inventory, and real-time traffic data. Predict delivery delays, optimize route density, and automate carrier selection across the global supply chain.',
    growth:
      'Detect disruptions early and act in real time. Operations become faster, more efficient, and cost-effective — improved delivery performance, reduced costs, higher margins.',
    challenges: [
      "Inaccurate last-mile delivery: high costs & failed attempts from poor route planning",
      "'Black holes' in the chain — cargo status unknown to providers and customers",
      'Empty backhauls and under-utilized capacity driving up cost and carbon',
      'Cascading delays from labor shortages, congestion, and weather',
      'Manual, fragmented carrier management and freight procurement',
    ],
    engines: [
      {
        title: 'Opportunity Discovery',
        body: 'Identify inefficiencies, demand-supply mismatches, and potential disruptions across logistics, fleet, and inventory data — proactive planning.',
      },
      {
        title: 'Deal Acceleration',
        body: 'Accelerate routing, dispatch, and carrier-selection decisions with real-time insights — speed and execution improved.',
      },
      {
        title: 'Revenue Acceleration',
        body: 'Maximize profitability by optimizing fleet utilization, reducing delivery costs, and lifting service levels.',
      },
    ],
    pipe: [
      'GPS + Warehouse + Traffic/Weather',
      'Unified in Amnet Data Foundry',
      'AI Agents analyze flow & capacity',
      'Optimized routes & alerts',
      'Automated dispatch / tendering',
      'Lower cost-per-delivery',
    ],
    impact: [
      'Reduce fuel & maintenance costs through optimized routing & predictive alerts',
      'Improve on-time delivery, boosting loyalty and NPS',
      'Maximize fleet capacity — eliminate empty miles',
      'Enhance sustainability by cutting emissions',
    ],
    why: [
      'Real-time edge intelligence — insights in seconds, in the field',
      'Agnostic integration with major Telematics, TMS & WMS providers',
      'Explainable logic behind every route & carrier recommendation',
      'Scales from local courier fleets to global freight networks',
    ],
    ctaHeading: 'Navigate the future of delivery with confidence',
    ctaParagraph: 'Deliver faster, leaner, and smarter with AI-powered logistics intelligence.',
  },
  infomgmt: {
    slug: 'infomgmt',
    name: 'Information Management',
    glyph: '🗂',
    gradient: 'linear-gradient(135deg,#6B7280,#98A6B3)',
    short: "Unify structured & unstructured data, automate classification, and turn 'dark data' into governed knowledge.",
    eyebrow: 'Information Management',
    title: 'Turn static data into strategic assets with AI-powered governance',
    sub: 'Powered by Amnet Data Foundry — move beyond storage to active intelligence. Unify structured and unstructured data, automate classification, and ensure continuous compliance.',
    growth:
      'Transform data into actionable intelligence for faster, better-informed decisions. Automation and smart prioritization drive productivity up and risk down — at scale.',
    challenges: [
      '80% of corporate data trapped in emails, PDFs & chats — unsearchable and high-risk',
      'Compliance complexity across shifting global mandates',
      'Critical institutional knowledge lost when people leave',
      'Sensitive PII hidden in unauthorized locations',
      'Manual classification: expensive, slow, error-prone',
    ],
    engines: [
      {
        title: 'Opportunity Discovery',
        body: 'Extract insight from massive structured & unstructured volumes — patterns, risks, and opportunities for better decisions and compliance readiness.',
      },
      {
        title: 'Deal Acceleration',
        body: 'Accelerate document processing, case handling, and onboarding through intelligent automation and prioritization.',
      },
      {
        title: 'Revenue Acceleration',
        body: 'Scale insight-driven service delivery — efficiency up, throughput up, new revenue streams unlocked.',
      },
    ],
    pipe: [
      'Files + Emails + DB Records',
      'Unified in Amnet Data Foundry',
      'Agents crawl & classify by risk',
      'Auto tags, metadata & retention',
      'Secure search / defensible disposal',
      'Compliance & discovery',
    ],
    impact: [
      'Reduce storage costs by eliminating Redundant, Obsolete & Trivial data',
      'Minimize legal risk with defensible deletion & rapid eDiscovery',
      'Boost productivity — stop hunting for information',
      'Ensure data sovereignty with AI-driven geographic tracking',
    ],
    why: [
      'Full information-lifecycle governance, creation to defensible destruction',
      'Agnostic ingestion across 100+ legacy & cloud sources',
      'High-fidelity AI trained on legal, technical & regulatory language',
      'Risk-based intelligence prioritized by sensitivity and breach impact',
    ],
    ctaHeading: 'Transform your data from a liability into a competitive edge',
    ctaParagraph: 'Master your information, eliminate silos, and secure your digital future.',
  },
  travel: {
    slug: 'travel',
    name: 'Travel & Leisure',
    glyph: '✈️',
    gradient: 'linear-gradient(135deg,#0E7C7B,#4CC3B0)',
    short: 'Unify traveller preferences, real-time pricing & capacity — hyper-personalized journeys that drive loyalty.',
    eyebrow: 'Travel & Leisure',
    title: 'Engineer unforgettable journeys with AI-powered guest intelligence',
    sub: 'Powered by Amnet Data Foundry — unify traveller preferences, real-time pricing, and operational capacity. Move beyond generic bookings to hyper-personalized experiences.',
    growth:
      'Anticipate demand and personalize every interaction. Booking decisions become faster and more targeted — higher occupancy, increased revenue, better guest experiences.',
    challenges: [
      'Fragmented traveller profiles across OTAs, loyalty programs & PMS',
      'Pricing volatility — hard to match competitor moves & local events in real time',
      'Staffing gaps from unpredictable service-demand spikes',
      'Low direct-booking rates and heavy OTA commission dependency',
    ],
    engines: [
      {
        title: 'Opportunity Discovery',
        body: 'Identify traveller preferences, demand patterns, and seasonal trends — smarter planning of offerings, pricing, and experiences.',
      },
      {
        title: 'Deal Acceleration',
        body: 'Accelerate bookings via personalized recommendations, dynamic offers, and real-time engagement — fewer drop-offs.',
      },
      {
        title: 'Revenue Acceleration',
        body: 'Optimize pricing, occupancy, and ancillary services — maximum revenue per customer, better experience.',
      },
    ],
    pipe: [
      'Guest + Booking + Market Signals',
      'Unified in Amnet Data Foundry',
      'Agents analyze intent & demand',
      'Personalized offers & rates',
      'Automated upsells / repricing',
      'Direct bookings & loyalty',
    ],
    impact: [
      'Increase RevPAR through intelligent dynamic pricing',
      'Lower acquisition costs via higher direct bookings',
      'Demand-based staffing & resource planning',
      'Lasting loyalty — guests recognized at every touchpoint',
    ],
    why: [
      'Cross-sector connectivity: a true 360° guest view',
      'Real-time execution at the speed of a global traveller',
      'Privacy-first personalization — secure PII & payment handling',
      'Scales from boutique hotels to global airline & cruise networks',
    ],
    ctaHeading: 'Redefine the experience economy',
    ctaParagraph: 'Build a smarter, more responsive, and more profitable travel brand with AI intelligence.',
  },
};

export const INDUSTRY_LIST: Industry[] = Object.values(INDUSTRIES);
