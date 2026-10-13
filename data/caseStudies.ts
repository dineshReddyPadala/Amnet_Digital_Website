import type { CaseStudy, ServiceLink } from '@/lib/types';

/** Service pages the SEO brief suggests linking to from case studies. "Data & AI" and "Digital Engineering" have no page of their own. */
const SERVICE = {
  informationManagement: { label: 'Information Management', href: '/industries/infomgmt' },
  dataAndAi: { label: 'Data & AI', href: '/services' },
  dataFoundry: { label: 'Data Foundry', href: '/data-foundry' },
  digitalEngineering: { label: 'Digital Engineering', href: '/services' },
} satisfies Record<string, ServiceLink>;

/**
 * Case studies for /case-studies and the /case-studies/[slug] detail pages.
 * Each gets a detail page once it has a `detail`. The landing page's cards come from data/caseStudiesLanding.ts.
 * (`CASES` in data/cases.ts still feeds the home carousel.)
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    client: 'Global Information Leader',
    metric: '100M+',
    metricLabel: 'Images digitized in weeks',
    title: '100M+ Documents Digitized at Scale for a Global Information Leader',
    body: 'Transforming legacy physical assets into actionable and secure digital intelligence.',
    chips: ['Tracking Layer', 'Intelligence Layer', 'Analytics Layer'],
    thumbnail: '/assets/img/case-studies/documents-digitized-at-scale/thumb.jpg',
    detail: {
      slug: 'enterprise-document-digitization-ai',
      seoTitle: 'Enterprise Document Digitization with AI',
      metaDescription:
        'Learn how enterprise document digitization converted 100M+ images into searchable digital information with AI classification and lifecycle auditability.',
      breadcrumbName: 'Data Transformation',
      heroTitle: 'Enterprise Document Digitization with AI at Scale',
      heroLede: 'Transforming legacy physical assets into actionable and secure digital intelligence.',
      heroImage: '/assets/img/case-studies/documents-digitized-at-scale/hero.jpg',
      overview:
        'An enterprise operating at significant scale, managing complex information systems across multiple regions and industries.',
      overviewStats: [
        {
          icon: 'globe',
          title: '60+ Countries',
          body: 'No real-time tracking of documents across the global supply chain.',
        },
        {
          icon: 'shield',
          title: '10,000+ Customers',
          body: "Trusted partner to the world's leading enterprises.",
        },
        {
          icon: 'building',
          title: 'Multi-Billion-Dollar Enterprise',
          body: 'Driving large-scale, secure, and high-volume operations.',
        },
      ],
      challengesIntro:
        'Bridging the Analog-to-Digital Gap, legacy paper-based systems lacked real-time visibility, with siloed workflows and no end-to-end lifecycle tracking.',
      challenges: [
        {
          icon: 'globe',
          title: 'No Visibility',
          body: 'No real-time tracking of documents across the global supply chain.',
        },
        {
          icon: 'globe',
          title: 'Dark Data',
          body: 'Millions of unstructured, non-searchable documents locked in physical formats.',
        },
        {
          icon: 'globe',
          title: 'Fragmented Processes',
          body: 'Manual workflows that were slow, disconnected, and highly error-prone.',
        },
        {
          icon: 'globe',
          title: 'No Operational Insight',
          body: 'Lack of reporting, auditability, and clear ROI visibility for stakeholders.',
        },
      ],
      solutionIntro:
        'A unified, platform-first approach leveraging AI, machine learning, and data engineering to enable fast, scalable, and intelligent valuation with real-time decision-making across global markets.',
      solutionLayers: [
        {
          title: 'Tracking Layer',
          body: 'End-to-end visibility and secure chain of custody for physical assets.',
        },
        {
          title: 'Intelligence Layer',
          body: 'AI-driven classification, metadata extraction, and content routing.',
        },
        {
          title: 'Analytics Layer',
          body: 'Real-time and batch processing with seamless regional scalability.',
        },
      ],
      impactIntro:
        'Demonstrates the measurable business value achieved through the solution, highlighting improvements in scalability, efficiency, and operational transparency.',
      impact: [
        { icon: 'shield-check', value: 100, suffix: 'M+', label: 'Images digitized in weeks' },
        { icon: 'building', value: 5, suffix: 'B+', label: 'Scalable pipeline capacity' },
        { icon: 'users', value: 100, suffix: ' %', label: 'Auditability across lifecycle' },
      ],
      insight: "Digitization at scale isn't about speed—it's about creating usable, trusted intelligence",
      insightImage: '/assets/img/case-studies/documents-digitized-at-scale/insight.jpg',
      headings: {
        challenges: 'The Challenge: Paper Records and Dark Data',
        solution: 'Secure Tracking and Chain-of-Custody Visibility',
        solutionDetail: 'AI Classification, Metadata Extraction and Content Routing',
        impact: 'Business Impact: 100M+ Images and Lifecycle Auditability',
      },
      services: [SERVICE.informationManagement, SERVICE.dataAndAi],
      related: ['ai-powered-audit-automation', 'ai-powered-enterprise-analytics'],
    },
  },
  {
    client: 'Global B2B Enterprise',
    metric: '40x',
    metricLabel: 'Faster monthly and e-Commerce reporting',
    title: 'Turning Fragmented Enterprise Data into Scalable AI-Ready Business Intelligence',
    body: 'Consolidated 15+ global data sources into a unified platform, accelerating reporting, improving trust, and enabling scalable AI initiatives.',
    chips: ['Unified Analytics', 'Conversational Analytics', 'AI / ML Enablement'],
    detail: {
      slug: 'aws-data-lake-enterprise-analytics',
      seoTitle: 'AWS Data Lake & Enterprise Analytics',
      metaDescription:
        'See how an AWS data lake unified 15+ data sources, accelerated e-commerce reporting 40x, dashboards 24x, and automated 99% of workflows.',
      breadcrumbName: 'Scalable Intelligence',
      heroTitle: 'AWS Data Lake Modernization for Enterprise Analytics',
      heroLede:
        'Consolidated 15+ global data sources into a unified platform, accelerating reporting, improving trust, and enabling scalable AI initiatives.',
      overview:
        'A trusted global B2B enterprise with decades of industry leadership, serving customers worldwide through scalable operations and efficient order fulfilment.',
      overviewStats: [
        {
          icon: 'users',
          title: '108K+ B2B Customers',
          body: 'Trusted by businesses worldwide with reliable products, services, and long-term customer relationships.',
        },
        {
          icon: 'shield',
          title: '30+ Years of Market Leadership',
          body: 'Decades of industry expertise driving innovation, operational excellence, and sustained business growth.',
        },
        {
          icon: 'building',
          title: '0.5M+ Orders Annually',
          body: 'High-volume order processing enabled through efficient operations and scalable fulfilment capabilities.',
        },
      ],
      challengesIntro:
        'Organizations struggled to transform fragmented business data into actionable insights, resulting in delayed reporting, higher costs, and limited AI readiness.',
      challenges: [
        {
          icon: 'globe',
          title: 'Fragmented Reporting',
          body: 'Business data remained siloed, making unified reporting slow and performance visibility difficult.',
        },
        {
          icon: 'globe',
          title: 'High Analytics Costs',
          body: 'Legacy platforms increased reporting complexity, costs, and time required for business analytics.',
        },
        {
          icon: 'globe',
          title: 'Limited Business Access',
          body: 'Disconnected data sources prevented teams from accessing timely, actionable business insights.',
        },
        {
          icon: 'globe',
          title: 'No AI Readiness',
          body: 'Lack of a unified data foundation restricted advanced analytics and enterprise AI adoption.',
        },
      ],
      solutionIntro:
        'Unified disparate ERP data across business units into a centralized AWS data lake, structured through Bronze–Silver–Gold layers powering real-time dashboards.',
      solutionLayers: [
        {
          title: 'Unified Analytics',
          body: 'Replaced fragmented legacy systems with scalable analytics enabling real-time insights.',
        },
        {
          title: 'Conversational Analytics',
          body: 'Conversational AI enables instant business insights through natural language queries.',
        },
        {
          title: 'AI / ML Enablement',
          body: 'AI-driven customer intelligence predicts churn, propensity, and actionable customer segments.',
        },
      ],
      impactIntro:
        'Delivering measurable business transformation through accelerated reporting, enterprise-wide automation, and scalable analytics enabling faster, data-driven decision-making.',
      impact: [
        { icon: 'shield-check', value: 40, suffix: 'x', label: 'Faster monthly and e-Commerce reporting' },
        { icon: 'building', value: 24, suffix: 'x', label: 'Quick enterprise-wide dashboard delivery' },
        { icon: 'users', value: 99, suffix: ' %', label: 'Automated ERP, business logic, and reporting workflows' },
      ],
      insight:
        'Unified and standardized data drives clean, consistent insights with real-time global visibility—cutting reporting time from weeks to minutes',
      headings: {
        challenges: 'The Challenge: Fragmented ERP Data and Slow Reporting',
        solution: 'AWS Data Lake with Bronze, Silver and Gold Layers',
        solutionDetail: 'Conversational Analytics and AI/ML Enablement',
        impact: 'Business Impact: 40x Reporting, 24x Dashboards and 99% Automation',
      },
      services: [SERVICE.dataFoundry, SERVICE.dataAndAi],
      related: ['ai-powered-enterprise-analytics', 'ai-powered-digital-experience-personalization'],
    },
  },
  {
    client: 'Globally Established Enterprise',
    metric: '15x',
    metricLabel: 'Valuations reduced from hours to seconds',
    title: '15x Faster, Scalable AI-Driven Property Valuation at Enterprise Scale',
    body: 'Transforming traditional, manual valuation processes into a scalable, AI-driven system that enhances accuracy, and consistency while enabling intelligent, data-backed decision-making at scale.',
    chips: ['Data Foundation', 'Intelligence Engine', 'Scalable Delivery Layer'],
    detail: {
      slug: 'ai-driven-property-valuation-automation',
      seoTitle: 'AI-Driven Property Valuation Automation',
      metaDescription:
        'See how AI-driven property valuation and ML-powered models helped accelerate valuation 15x, scale processing 10x, and reduce manual effort by 90%.',
      breadcrumbName: 'Smart Valuation',
      heroTitle: 'AI-Driven Property Valuation at Enterprise Scale',
      heroLede:
        'Transforming traditional, manual valuation processes into a scalable, AI-driven system that enhances accuracy, and consistency while enabling intelligent, data-backed decision-making at scale.',
      overview:
        'A globally established enterprise with strong scale, operational maturity, and the ability to deliver consistent value across markets.',
      overviewStats: [
        {
          icon: 'globe',
          title: '40+ Countries',
          body: 'Seamless delivery and localized expertise across key international markets.',
        },
        {
          icon: 'shield',
          title: '10,000+ Customers',
          body: 'Trusted by businesses of all sizes across.',
        },
        {
          icon: 'users',
          title: '3,000+ Employees',
          body: 'A strong workforce driving innovation, execution, and client success at scale.',
        },
      ],
      challengesIntro:
        'Organizations struggled to scale valuation across fragmented systems and inconsistent data, leading to inefficiencies and heavy manual dependency.',
      challenges: [
        {
          icon: 'globe',
          title: 'Fragmented Auditing',
          body: 'Disparate valuation processes across systems and regions.',
        },
        {
          icon: 'globe',
          title: 'Data Quality Issues',
          body: 'Inconsistent and incomplete datasets impacting accuracy.',
        },
        {
          icon: 'globe',
          title: 'Manual Workflows',
          body: 'Heavy reliance on human intervention slowing operations.',
        },
        {
          icon: 'globe',
          title: 'Scalability Constraints',
          body: 'Limited ability to handle high-volume and diverse valuations.',
        },
      ],
      solutionIntro:
        'A unified, platform-first approach leveraging AI, machine learning, and data engineering to enable fast, scalable, and intelligent valuation with real-time decision-making across global markets.',
      solutionLayers: [
        {
          title: 'Data Foundation',
          body: 'Unified and standardized multi-source data with geo-spatial enrichment.',
        },
        {
          title: 'Intelligence Engine',
          body: 'ML-driven valuation models enhanced with business rules and GenAI capabilities.',
        },
        {
          title: 'Scalable Delivery Layer',
          body: 'Real-time and batch processing with seamless regional scalability.',
        },
      ],
      impactIntro:
        'Delivering measurable transformation by accelerating valuation processes, enabling large-scale operations, and embedding AI-driven efficiency to optimize performance, reduce costs, and enhance decision-making across the enterprise.',
      impact: [
        { icon: 'shield-check', value: 15, suffix: 'x', label: 'Valuations reduced from hours to seconds' },
        { icon: 'building', value: 10, suffix: 'x', label: 'Processing capacity increased significantly' },
        { icon: 'users', value: 90, suffix: ' %', label: 'Reduced manual effort drastically' },
      ],
      insight: 'Scalable AI-driven valuation requires a platform-first approach combining data, intelligence, and automation',
      headings: {
        challenges: 'Why Traditional Property Valuation Struggled to Scale',
        solution: 'Unified Data Foundations and Geospatial Enrichment',
        solutionDetail: 'Machine Learning Models and Scalable Valuation Processing',
        impact: 'Business Impact: 15x Faster Valuations and 90% Less Manual Effort',
      },
      services: [SERVICE.dataAndAi, SERVICE.dataFoundry],
      related: ['ai-powered-audit-automation', 'aws-data-lake-enterprise-analytics'],
    },
  },
  {
    client: 'Globally Established Enterprise',
    metric: '15x',
    metricLabel: 'Valuations reduced from hours to seconds',
    title: '15x Faster, Scalable AI-Driven Property Valuation at Enterprise Scale',
    body: 'Transforming traditional, manual valuation processes into a scalable, AI-driven system that enhances accuracy, and consistency while enabling intelligent, data-backed decision-making at scale.',
    chips: ['Data Foundation', 'Intelligence Engine', 'Scalable Delivery Layer'],
    detail: {
      slug: 'ai-powered-audit-automation',
      seoTitle: 'AI-Powered Audit Automation',
      metaDescription:
        'Explore how AI-powered audit automation can streamline document processing, reduce manual review, and support more consistent enterprise audit workflows.',
      breadcrumbName: 'Smart Audit',
      heroTitle: 'AI-Powered Audit Automation for Enterprises',
      heroLede:
        'Transforming traditional, manual valuation processes into a scalable, AI-driven system that enhances accuracy, and consistency while enabling intelligent, data-backed decision-making at scale.',
      overview:
        'A globally established enterprise with strong scale, operational maturity, and the ability to deliver consistent value across markets.',
      overviewStats: [
        {
          icon: 'globe',
          title: '40+ Countries',
          body: 'Seamless delivery and localized expertise across key international markets.',
        },
        {
          icon: 'shield',
          title: '10,000+ Customers',
          body: 'Trusted by businesses of all sizes across.',
        },
        {
          icon: 'users',
          title: '3,000+ Employees',
          body: 'A strong workforce driving innovation, execution, and client success at scale.',
        },
      ],
      challengesIntro:
        'Organizations struggled to scale valuation across fragmented systems and inconsistent data, leading to inefficiencies and heavy manual dependency.',
      challenges: [
        {
          icon: 'globe',
          title: 'Fragmented Auditing',
          body: 'Disparate valuation processes across systems and regions.',
        },
        {
          icon: 'globe',
          title: 'Data Quality Issues',
          body: 'Inconsistent and incomplete datasets impacting accuracy.',
        },
        {
          icon: 'globe',
          title: 'Manual Workflows',
          body: 'Heavy reliance on human intervention slowing operations.',
        },
        {
          icon: 'globe',
          title: 'Scalability Constraints',
          body: 'Limited ability to handle high-volume and diverse valuations.',
        },
      ],
      solutionIntro:
        'A unified, platform-first approach leveraging AI, machine learning, and data engineering to enable fast, scalable, and intelligent valuation with real-time decision-making across global markets.',
      solutionLayers: [
        {
          title: 'Data Foundation',
          body: 'Unified and standardized multi-source data with geo-spatial enrichment.',
        },
        {
          title: 'Intelligence Engine',
          body: 'ML-driven valuation models enhanced with business rules and GenAI capabilities.',
        },
        {
          title: 'Scalable Delivery Layer',
          body: 'Real-time and batch processing with seamless regional scalability.',
        },
      ],
      impactIntro:
        'Delivering measurable transformation by accelerating valuation processes, enabling large-scale operations, and embedding AI-driven efficiency to optimize performance, reduce costs, and enhance decision-making across the enterprise.',
      impact: [
        { icon: 'shield-check', value: 15, suffix: 'x', label: 'Valuations reduced from hours to seconds' },
        { icon: 'building', value: 10, suffix: 'x', label: 'Processing capacity increased significantly' },
        { icon: 'users', value: 90, suffix: ' %', label: 'Reduced manual effort drastically' },
      ],
      insight: 'Scalable AI-driven valuation requires a platform-first approach combining data, intelligence, and automation',
      headings: {
        challenges: 'The Challenge: Manual Auditing and Fragmented Workflows',
        solution: 'Our Approach to Intelligent Audit Automation',
        solutionDetail: 'Document Intelligence and Workflow Integration',
        impact: 'Business Outcomes and Audit Traceability',
      },
      services: [SERVICE.informationManagement, SERVICE.dataAndAi],
      related: ['ai-driven-property-valuation-automation', 'enterprise-document-digitization-ai'],
    },
  },
  {
    client: 'Globally Recognized Enterprise',
    metric: '20x',
    metricLabel: 'Faster',
    title: 'Delivering AI-Powered Enterprise Insights 20x Faster Across Global Business Operations',
    body: 'Unifying fragmented enterprise data to enable scalable AI-driven decisions, intelligence, and operational transformation.',
    chips: ['Data Integration Layer', 'AI Intelligence Engine', 'Consumption Layer'],
    detail: {
      slug: 'ai-powered-enterprise-analytics',
      seoTitle: 'AI-Powered Enterprise Analytics',
      metaDescription:
        'Discover how unified enterprise data, AI-powered insights and self-service analytics enabled 20x faster insights and 95% automation.',
      breadcrumbName: 'Enterprise Intelligence',
      heroTitle: 'AI-Powered Enterprise Analytics Across Global Operations',
      heroLede:
        'Unifying fragmented enterprise data to enable scalable AI-driven decisions, intelligence, and operational transformation.',
      overview:
        'A globally recognized enterprise with strong operational scale, digital maturity, and the ability to deliver secure, data-driven services across industries.',
      overviewStats: [
        {
          icon: 'globe',
          title: '50+ Countries',
          body: 'Seamless enterprise operations and service delivery across global regions.',
        },
        {
          icon: 'shield',
          title: '25,000+ Enterprise Users',
          body: 'Trusted and supported by a large and diverse global customer ecosystem.',
        },
        {
          icon: 'users',
          title: '4,500+ Employees',
          body: 'A strong workforce driving innovation, transformation, and operational excellence.',
        },
      ],
      challengesIntro:
        'Organizations struggled to unify enterprise data across siloed systems and inconsistent platforms, leading to delayed insights and limited AI adoption.',
      challenges: [
        {
          icon: 'globe',
          title: 'Data Silos',
          body: 'Fragmented enterprise systems limiting visibility, intelligence, and scalability.',
        },
        {
          icon: 'globe',
          title: 'Quality Issues',
          body: 'Inconsistent datasets reducing trust, accuracy, and insights.',
        },
        {
          icon: 'globe',
          title: 'Reporting Bottlenecks',
          body: 'Manual reporting increasing operational effort and decision delays.',
        },
        {
          icon: 'globe',
          title: 'AI Readiness',
          body: 'Weak data foundations limiting enterprise AI innovation.',
        },
      ],
      solutionIntro:
        'A unified enterprise data platform approach leveraging cloud, AI, data engineering, and intelligent analytics to enable real-time insights and scalable enterprise intelligence.',
      solutionLayers: [
        {
          title: 'Data Integration Layer',
          body: 'Unified and standardized enterprise data across multiple business systems.',
        },
        {
          title: 'AI Intelligence Engine',
          body: 'AI-powered insights, predictive analytics, and intelligent automation capabilities.',
        },
        {
          title: 'Consumption Layer',
          body: 'Real-time dashboards, self-service analytics, and scalable enterprise reporting.',
        },
      ],
      impactIntro:
        'Delivering measurable enterprise transformation by enabling AI-powered insights, accelerating data access, and improving operational efficiency across global business functions.',
      impact: [
        { icon: 'shield-check', value: 20, suffix: 'x', label: 'Faster' },
        { icon: 'building', value: 95, suffix: ' %', label: 'Automation' },
        { icon: 'users', value: 'Efficiency', label: 'Lean Operations' },
      ],
      insight:
        'Scalable enterprise intelligence requires a platform-first approach combining unified data, AI-powered insights, and intelligent automation',
      headings: {
        challenges: 'The Challenge: Siloed Data and Reporting Delays',
        solution: 'Unified Enterprise Data Integration Architecture',
        solutionDetail: 'Predictive Analytics and Self-Service Dashboards',
        impact: 'Business Impact: 20x Faster Insights and 95% Automation',
      },
      services: [SERVICE.dataFoundry, SERVICE.dataAndAi],
      related: ['aws-data-lake-enterprise-analytics', 'enterprise-document-digitization-ai'],
    },
  },
  {
    client: 'Globally Recognized Digital Experience Platform',
    metric: '70%',
    metricLabel: 'Lower User Friction',
    title: 'Helping Platforms Achieve 70% Lower Friction and 3x Faster Content Creation',
    body: 'Leveraged AI-powered personalization, geo-contextual intelligence, and automated content workflows to enhance engagement and operational efficiency.',
    chips: ['Visual Understanding', 'Personalization Engine', 'Scalable Platform'],
    detail: {
      slug: 'ai-powered-digital-experience-personalization',
      seoTitle: 'AI-Powered Digital Experience Personalization',
      metaDescription:
        'Explore how vision AI and contextual personalization reduced user friction 70%, improved accuracy 50%, and enabled 90% content automation.',
      breadcrumbName: 'AI Personalization',
      heroTitle: 'AI-Powered Digital Experience Personalization',
      heroLede:
        'Leveraged AI-powered personalization, geo-contextual intelligence, and automated content workflows to enhance engagement and operational efficiency.',
      overview:
        'A globally recognized digital experience platform delivering innovative solutions through a strong international presence and customer-centric approach.',
      overviewStats: [
        {
          icon: 'globe',
          title: '40+ Countries',
          body: 'Seamless operations and delivery across key international markets.',
        },
        {
          icon: 'shield',
          title: '10,000+ Customers',
          body: 'Trusted by businesses of all sizes across diverse industries.',
        },
        {
          icon: 'users',
          title: '3,000+ Employees',
          body: 'A strong workforce driving innovation and execution worldwide.',
        },
      ],
      challengesIntro:
        'Delivering context-aware, visual-first experiences at scale remains a key challenge for modern enterprises today.',
      challenges: [
        {
          icon: 'globe',
          title: 'Contextual Limitations',
          body: 'Limited context reduced recognition accuracy.',
        },
        {
          icon: 'globe',
          title: 'Geographic Relevance',
          body: 'Location gaps impacted user experience.',
        },
        {
          icon: 'globe',
          title: 'Unanswered Queries',
          body: 'Response failures reduced user satisfaction.',
        },
        {
          icon: 'globe',
          title: 'Discovery Friction',
          body: 'Lack of visual exploration hindered discovery.',
        },
      ],
      solutionIntro:
        'Combined visual intelligence, AI-driven personalization, and cloud-native scalability to power seamless digital experiences at scale.',
      solutionLayers: [
        {
          title: 'Visual Understanding',
          body: 'AI-powered visual discovery delivering contextual insights through advanced vision-language understanding.',
        },
        {
          title: 'Personalization Engine',
          body: 'LLM-enhanced personalization through location-aware recommendations and automated content generation.',
        },
        {
          title: 'Scalable Platform',
          body: 'Visual-first experiences enabled scalable media processing with cloud-native AI infrastructure.',
        },
      ],
      impactIntro:
        'Boosted customer engagement through contextual intelligence, reduced friction, and end-to-end AI-powered content automation at scale.',
      impact: [
        { icon: 'shield-check', value: 50, suffix: ' %', label: 'Higher Accuracy' },
        { icon: 'building', value: 70, suffix: ' %', label: 'Lower User Friction' },
        { icon: 'users', value: 90, suffix: ' %', label: 'Content Automation' },
      ],
      insight:
        "Next-gen digital experiences aren't built on AI alone—they're powered by the convergence of Vision AI, Generative AI, and contextual intelligence",
      headings: {
        challenges: 'The Challenge: Contextual Gaps and Discovery Friction',
        solution: 'Vision AI for Visual Discovery and Understanding',
        solutionDetail: 'Location-Aware Personalization and Generative AI Content',
        impact: 'Business Impact: 70% Lower Friction and 90% Content Automation',
      },
      services: [SERVICE.digitalEngineering, SERVICE.dataAndAi],
      related: ['aws-data-lake-enterprise-analytics', 'ai-powered-enterprise-analytics'],
    },
  },
];

export function getCaseBySlug(slug: string) {
  return CASE_STUDIES.find((c) => c.detail?.slug === slug);
}

/** Detail page URL, or undefined for a teaser-only Case Study. */
export function caseHref(caseStudy: Pick<CaseStudy, 'detail'>) {
  return caseStudy.detail ? `/case-studies/${caseStudy.detail.slug}` : undefined;
}
