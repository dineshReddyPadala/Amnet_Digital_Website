export type JobBullet = { text: string; children?: string[] };

export type JobBlock = { kind: 'text'; text: string } | { kind: 'bullets'; items: JobBullet[] };

export type JobSection = {
  heading: string;
  blocks: JobBlock[];
};

export type Job = {
  slug: string;
  title: string;
  experience: string;
  tags: string[];
  summary: string;
  sections: JobSection[];
};

export const JOBS: Job[] = [
  {
    slug: 'enterprise-agentic-ai-architect',
    title: 'Enterprise Agentic AI Architect',
    experience: '12–16+ yrs',
    tags: ['Agentic AI', 'LLMs', 'Java', 'Architecture'],
    summary:
      'Architect production-grade Agentic AI platforms — agents, LLMs, enterprise APIs, and human workflows — with the rigour of large-scale software engineering.',
    sections: [
      {
        heading: 'Role overview',
        blocks: [
          {
            kind: 'text',
            text: 'We are looking for an Enterprise Agentic AI Architect who has spent the bulk of their career building large-scale, production-grade software — and has since moved decisively into AI. You understand what it takes to engineer real systems: databases, APIs, distributed workloads, deployment pipelines, performance tuning, and resilience. You now apply that same rigour to systems where AI is one component among many, not the whole solution.',
          },
        ],
      },
      {
        heading: 'What you will do',
        blocks: [
          {
            kind: 'bullets',
            items: [
              {
                text: 'Architect end-to-end Agentic AI platforms',
                children: [
                  'Design systems spanning agents, LLMs, enterprise APIs, data layers, and human workflows',
                  'Define clear boundaries: what is deterministic logic, what is AI-driven reasoning, what is orchestration',
                  'Own the architecture from whiteboard through production — not just the AI piece',
                ],
              },
              {
                text: 'Apply sound software engineering principles to AI systems',
                children: [
                  'Separation of concerns, modularity, API contracts, fault tolerance, scalability, security, observability',
                  'Design for idempotency, retries, failure recovery, and auditability from day one',
                  'Ensure agents can safely invoke enterprise systems (CRM, ERP, CPQ, data platforms) without side-effect risks',
                ],
              },
              {
                text: 'Make the right technology calls',
                children: [
                  'Decide when an agent is necessary versus a workflow, a rule engine, or plain deterministic code',
                  'Choose the right combination of LLMs, RAG, function calling, structured outputs, vector stores, and event-driven patterns',
                  'Evaluate frameworks (LangGraph, Semantic Kernel, AutoGen, CrewAI, etc.) on architectural merit, not popularity',
                ],
              },
              {
                text: 'Build for production quality',
                children: [
                  'Define evaluation approaches: correctness, hallucination risk, grounding, tool-use reliability, regression testing',
                  'Design monitoring, tracing, and behavioural evaluation for probabilistic systems',
                  'Establish guardrails, agent authority boundaries, and human escalation points',
                ],
              },
              {
                text: 'Lead and enable teams',
                children: [
                  'Drive technical design reviews and guide senior engineers on implementation',
                  'Build reference architectures, reusable components, and engineering standards for AI adoption',
                  'Translate complex architecture into clear communication for engineering and business audiences',
                ],
              },
            ],
          },
        ],
      },
      {
        heading: 'What we are looking for',
        blocks: [
          {
            kind: 'text',
            text: 'Foundation: large-scale software engineering. You have spent significant time building enterprise-grade systems end-to-end — not just components. You understand the full lifecycle.',
          },
          {
            kind: 'bullets',
            items: [
              {
                text: 'Strong hands-on experience with Java — J2EE, Spring / Spring Boot, enterprise patterns (comparable stacks such as .NET / C# or Node.js are acceptable, but Java depth is strongly preferred)',
              },
              { text: 'REST APIs, microservices, service-oriented architecture, and enterprise integration patterns' },
              { text: 'Relational and NoSQL databases — schema design, query optimisation, indexing' },
              { text: 'Distributed systems: messaging, event-driven architecture, async patterns' },
              { text: 'Application security, authentication, authorisation' },
              { text: 'Performance engineering, caching, scalability design' },
              { text: 'CI/CD, containers, Kubernetes, cloud-native deployment (AWS / Azure / GCP)' },
              { text: 'Production monitoring, observability, incident response' },
            ],
          },
          {
            kind: 'text',
            text: 'Progression: AI and machine learning. You have meaningfully crossed into AI/ML — enough to understand how these systems differ from deterministic software and what it takes to operationalise them.',
          },
          {
            kind: 'bullets',
            items: [
              { text: 'ML solution architecture: data pipelines, feature preparation, model serving, inference' },
              { text: 'MLOps: versioning, deployment, monitoring, retraining' },
              { text: 'Evaluating and productionising ML workloads at enterprise scale' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'data-architect-aws',
    title: 'Data Architect',
    experience: '15–20 yrs',
    tags: ['AWS', 'Data Lake', 'Governance', 'MDM'],
    summary:
      'Design and implement scalable, secure, and governed data architecture for an enterprise data platform, with deep AWS data-lake experience.',
    sections: [
      {
        heading: 'Position overview',
        blocks: [
          {
            kind: 'text',
            text: 'We are looking for an experienced Data Architect to design and implement scalable, secure, and governed data architecture for an Enterprise Data Platform. The ideal candidate should have strong expertise in data architecture, data modeling, governance, metadata management, data integration, and AWS data services.',
          },
          {
            kind: 'text',
            text: 'The Data Architect will work closely with business SMEs, technology teams, and other stakeholders to understand business requirements, translate them into technical data models and architectures, and establish standards that support data quality, security, lineage, and compliance.',
          },
        ],
      },
      {
        heading: 'Key responsibilities',
        blocks: [
          {
            kind: 'bullets',
            items: [
              { text: 'Design and maintain scalable enterprise data architecture aligned with business and technology requirements.' },
              { text: 'Develop conceptual, logical, and physical data models using established modeling standards.' },
              { text: 'Define and implement Data Governance and Master Data Management (MDM) practices.' },
              { text: 'Establish and maintain data quality frameworks, rules, and standards across the enterprise data platform.' },
              { text: 'Define and manage metadata management, data lineage, and cataloging practices.' },
              {
                text: 'Design and support AWS-based Data Lake architecture, including AWS Lake Formation, AWS Glue, and AWS Glue Data Catalog.',
              },
              { text: 'Define and implement effective data integration patterns for enterprise data platforms.' },
              { text: 'Establish security and access-control architecture to ensure appropriate protection of enterprise data.' },
              { text: 'Ensure data architecture complies with organizational security, access, governance, and compliance requirements.' },
              { text: 'Develop and maintain architecture documentation, data standards, principles, and technical guidelines.' },
              { text: 'Partner with business SMEs to understand business rules and translate them into technical data models and data pipelines.' },
              {
                text: 'Collaborate with data engineers, application teams, business stakeholders, and technology leadership to deliver scalable data solutions.',
              },
              { text: 'Identify opportunities to improve data architecture, quality, governance, and platform capabilities.' },
              { text: 'Ensure consistency and adherence to enterprise data architecture standards across projects.' },
            ],
          },
        ],
      },
      {
        heading: 'Required skills and experience',
        blocks: [
          {
            kind: 'bullets',
            items: [
              { text: 'Strong experience in Data Architecture and Enterprise Data Platforms.' },
              { text: 'Strong understanding of data modeling standards and methodologies.' },
              { text: 'Hands-on knowledge of Data Governance and Master Data Management (MDM).' },
              { text: 'Experience with metadata management, data lineage, and data cataloging.' },
              { text: 'Strong knowledge of AWS Data Lake architecture.' },
              { text: 'Experience with AWS Lake Formation, AWS Glue, and AWS Glue Data Catalog.' },
              { text: 'Strong proficiency in SQL and Python.' },
              { text: 'Good understanding of data integration patterns and architectures.' },
              { text: 'Experience designing data security and access-control architectures.' },
              { text: 'Strong understanding of data quality frameworks and practices.' },
              { text: 'Experience defining technical documentation, architecture standards, and data governance guidelines.' },
              { text: 'Ability to work effectively with both business and technology stakeholders.' },
              { text: 'Strong analytical, problem-solving, and communication skills.' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'lead-data-scientist',
    title: 'Lead Data Scientist',
    experience: '10–12 yrs',
    tags: ['Machine Learning', 'NLP', 'Python', 'MLOps'],
    summary:
      'Lead data science from problem definition through production models — machine learning, statistical modelling, NLP, and MLOps — and guide the team doing the work.',
    sections: [
      {
        heading: 'Job summary',
        blocks: [
          {
            kind: 'text',
            text: 'We are looking for an experienced Senior / Lead Data Scientist with 8–12 years of experience in data science, machine learning, statistical modelling, and AI. The candidate will be responsible for solving complex business problems using data-driven approaches, developing scalable machine learning solutions, and providing technical leadership to data science initiatives.',
          },
          {
            kind: 'text',
            text: 'The role requires strong hands-on expertise in Python, machine learning, statistical modelling, NLP, and MLOps, along with the ability to work closely with business, engineering, and product teams.',
          },
        ],
      },
      {
        heading: 'Key responsibilities',
        blocks: [
          {
            kind: 'bullets',
            items: [
              { text: 'Lead end-to-end data science projects, from problem definition and data exploration to model development, deployment, and monitoring.' },
              {
                text: 'Develop and implement advanced machine learning and statistical models for prediction, classification, recommendation, forecasting, optimization, and anomaly detection.',
              },
              { text: 'Work with large and complex datasets to identify trends, patterns, and actionable business insights.' },
              { text: 'Design experiments, conduct hypothesis testing, and evaluate model performance using appropriate statistical methodologies.' },
              { text: 'Develop scalable ML solutions using Python and modern data science frameworks.' },
              { text: 'Apply deep learning and NLP techniques where appropriate.' },
              { text: 'Understand LLMs, prompt engineering, RAG, embeddings, vector databases, and fine-tuning techniques where applicable.' },
              { text: 'Collaborate with data engineers and software engineers to build production-ready data and ML pipelines.' },
              { text: 'Establish best practices around model validation, explainability, reproducibility, and monitoring.' },
              { text: 'Mentor junior and mid-level data scientists and provide technical guidance on modelling approaches and project execution.' },
              { text: 'Translate business requirements into analytical problems and communicate complex technical concepts.' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'lead-architect-platform-engineering',
    title: 'Lead Architect — Platform Engineering',
    experience: '12+ yrs',
    tags: ['Java', 'Spring Boot', 'React', 'TypeScript'],
    summary:
      'Own features end-to-end — from API and data model through the UI a customer touches — across Java/Spring Boot and React/TypeScript.',
    sections: [
      {
        heading: 'Role summary',
        blocks: [
          {
            kind: 'text',
            text: 'Interfaces with engineering leads, architecture, security, the program manager, and external partner teams. Scope covers UI development and backend development.',
          },
          {
            kind: 'text',
            text: 'Own features end-to-end — from API and data model through the UI a customer touches. Measured on delivery throughput and code quality: how reliably features ship without rework, and how little other engineers wait on your APIs or components to build on top of.',
          },
        ],
      },
      {
        heading: 'Core responsibilities',
        blocks: [
          {
            kind: 'bullets',
            items: [
              {
                text: 'Backend (Java/Spring Boot) — Design and build REST/service APIs in Spring Boot, own the data model (schema design, migrations, query performance) and integration points with downstream systems. Write code that is testable and observable by default — unit and integration test coverage, structured logging, metrics on the paths that matter. Participate in API contract design with frontend and other consuming teams before implementation starts.',
              },
              {
                text: 'Frontend (React/TypeScript/Tailwind) — Build UI components and flows in React and TypeScript, styled with Tailwind. Own component structure, state management, and the boundary between server data and client state. Keep the component library consistent — no one-off patterns duplicating what already exists.',
              },
              {
                text: 'Full lifecycle ownership — Take a feature from design doc to production: schema, API, UI, tests, deploy, and the first round of bug fixes. Debug across the stack when a bug crosses the API boundary.',
              },
              {
                text: 'Quality and collaboration — Code review with real feedback. Flag design and performance issues early, in design review rather than in production. Write docs that let another engineer pick up your feature without a hallway conversation.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Skills and experience',
        blocks: [
          {
            kind: 'bullets',
            items: [
              {
                text: '12+ years professional software engineering, with real production experience on both ends of the stack (not backend-primarily with some frontend exposure)',
              },
              { text: 'Backend: Java, Spring Boot (REST APIs, dependency injection, data access layer), relational database design and SQL (schema design, indexing, migrations)' },
              { text: 'Frontend: React, TypeScript, Tailwind CSS — component architecture, hooks, state management, working with a design system' },
              { text: 'Comfortable owning a feature’s API contract and its consuming UI in the same PR sequence' },
              { text: 'Git-based workflow, CI/CD-aware — writes code that passes pipeline gates' },
              { text: 'Writes tests as part of the work, not as an afterthought — unit tests minimum, integration tests for anything crossing a service boundary' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'senior-java-full-stack-engineer',
    title: 'Senior Java Full Stack Engineer — Platform Engineering',
    experience: '8+ yrs',
    tags: ['Java', 'Spring Boot', 'React', 'Tailwind'],
    summary:
      'Ship platform features from API and data model through the UI, with production experience on both Java/Spring Boot and React/TypeScript.',
    sections: [
      {
        heading: 'Role summary',
        blocks: [
          {
            kind: 'text',
            text: 'Reports to the team lead / tech lead. Interfaces with engineering leads, architecture, security, the program manager, and external partner teams. Scope covers UI development and backend development.',
          },
          {
            kind: 'text',
            text: 'Own features end-to-end — from API and data model through the UI a customer touches. Measured on delivery throughput and code quality: how reliably features ship without rework, and how little other engineers wait on your APIs or components to build on top of.',
          },
        ],
      },
      {
        heading: 'Core responsibilities',
        blocks: [
          {
            kind: 'bullets',
            items: [
              {
                text: 'Backend (Java/Spring Boot) — Design and build REST/service APIs in Spring Boot, own the data model (schema design, migrations, query performance) and integration points with downstream systems. Write code that is testable and observable by default — unit and integration test coverage, structured logging, metrics on the paths that matter. Participate in API contract design with frontend and other consuming teams before implementation starts.',
              },
              {
                text: 'Frontend (React/TypeScript/Tailwind) — Build UI components and flows in React and TypeScript, styled with Tailwind. Own component structure, state management, and the boundary between server data and client state. Keep the component library consistent — no one-off patterns duplicating what already exists.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Skills and experience',
        blocks: [
          {
            kind: 'bullets',
            items: [
              {
                text: '8+ years professional software engineering, with real production experience on both ends of the stack (not backend-primarily with some frontend exposure)',
              },
              { text: 'Backend: Java, Spring Boot (REST APIs, dependency injection, data access layer), relational database design and SQL (schema design, indexing, migrations)' },
              { text: 'Frontend: React, TypeScript, Tailwind CSS — component architecture, hooks, state management, working with a design system' },
              { text: 'Comfortable owning a feature’s API contract and its consuming UI in the same PR sequence' },
              { text: 'Git-based workflow, CI/CD-aware — writes code that passes pipeline gates' },
              { text: 'Writes tests as part of the work, not as an afterthought — unit tests minimum, integration tests for anything crossing a service boundary' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'java-microservices-developer',
    title: 'Java Microservices Developer',
    experience: '5–8 yrs',
    tags: ['Java', 'Spring Boot', 'Microservices', 'REST'],
    summary:
      'Design, develop, and maintain scalable microservices in Java and Spring Boot, with solid API design, testing, and delivery in an Agile team.',
    sections: [
      {
        heading: 'About the role',
        blocks: [
          {
            kind: 'text',
            text: 'We are seeking a skilled Java Microservices Developer. The ideal candidate will have extensive experience designing, developing, and maintaining scalable microservices architecture using Java, and will work closely with cross-functional teams to deliver high-quality software that meets business needs.',
          },
        ],
      },
      {
        heading: 'Key responsibilities',
        blocks: [
          {
            kind: 'bullets',
            items: [
              { text: 'Microservices development — design, develop, and deploy microservices using Java and relevant frameworks such as Spring Boot.' },
              { text: 'API design — create and maintain RESTful APIs, ensuring efficient communication between services.' },
              { text: 'Performance optimization — identify and resolve performance bottlenecks, ensuring optimal system performance.' },
              { text: 'Testing and quality assurance — write unit tests and integration tests to ensure code quality and reliability.' },
              { text: 'Code review and mentorship — conduct code reviews and provide mentorship to junior developers.' },
              { text: 'Collaboration — work closely with product owners, UX/UI designers, and other stakeholders to understand requirements and deliver high-quality solutions.' },
              { text: 'Agile methodologies — participate in Agile ceremonies and contribute to continuous improvement.' },
            ],
          },
        ],
      },
      {
        heading: 'Qualifications',
        blocks: [
          {
            kind: 'bullets',
            items: [
              { text: 'Bachelor’s degree in Computer Science, Information Technology, or a related field.' },
              { text: '5 to 8 years of professional experience in software development, with a strong focus on Java and microservices.' },
              { text: 'Proficient in Java, Spring Boot, and related technologies.' },
              { text: 'Familiarity with API management and documentation tools (Swagger, Postman).' },
              { text: 'Knowledge of databases (SQL and NoSQL) and data modelling.' },
              { text: 'Understanding of CI/CD pipelines and DevOps practices.' },
            ],
          },
        ],
      },
      {
        heading: 'Good to have',
        blocks: [
          {
            kind: 'bullets',
            items: [
              { text: 'Cloud integration — deploy microservices on AWS, Azure, or Google Cloud and leverage cloud-native features.' },
              { text: 'Experience with containerization tools (Docker, Kubernetes).' },
            ],
          },
        ],
      },
      {
        heading: 'Soft skills',
        blocks: [
          {
            kind: 'bullets',
            items: [
              { text: 'Strong analytical and problem-solving skills.' },
              { text: 'Excellent communication and interpersonal skills.' },
              { text: 'Ability to work independently and in a team-oriented environment.' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'sr-ux-designer',
    title: 'Sr UX Designer',
    experience: '10+ yrs',
    tags: ['UX', 'Design systems', 'Figma', 'WCAG'],
    summary:
      'Drive product design from research through developer handoff, and build enterprise design systems for complex B2B workflows.',
    sections: [
      {
        heading: 'Key responsibilities',
        blocks: [
          {
            kind: 'bullets',
            items: [
              {
                text: 'End-to-end product design — drive the design process from discovery, user research, and information architecture to wireframing, high-fidelity UI, interactive prototyping, and developer handoff.',
              },
              {
                text: 'Design systems and governance — build, scale, and govern enterprise-grade design systems, component libraries, and design tokens across multiple products, regions, and white-label / multi-brand environments.',
              },
              {
                text: 'Complex workflow simplification — deconstruct dense data analytics, financial, or multi-platform administrative workflows into clean, accessible, and intuitive UI patterns.',
              },
              {
                text: 'User research and data-informed validation — conduct usability testing, heuristic evaluations, UX audits, and user interviews. Leverage product analytics, behavioral metrics, and A/B testing to prioritize roadmap items and validate post-launch impact.',
              },
              {
                text: 'Modern and AI-assisted workflows — integrate modern design tooling and AI workflows (Figma AI, LLM prompt engineering for UX copy and synthesis, automated handoff pipelines) to accelerate concept-to-prototype velocity.',
              },
              {
                text: 'Cross-functional leadership and mentorship — lead design critiques, establish UX documentation standards, and mentor junior and mid-level designers while collaborating with Agile engineering teams.',
              },
              {
                text: 'Accessibility and quality assurance — ensure design deliverables adhere to WCAG 2.1 AA and platform-native conventions (iOS, Android, responsive web).',
              },
            ],
          },
        ],
      },
      {
        heading: 'Required qualifications and experience',
        blocks: [
          {
            kind: 'bullets',
            items: [
              {
                text: '10+ years in product design / UX design, with strong experience in B2B SaaS, enterprise platforms, ad tech, e-commerce, or complex analytical tools.',
              },
              { text: 'Proven experience building design systems from scratch as well as modernizing mature enterprise systems.' },
              {
                text: 'A portfolio demonstrating end-to-end case studies — problem statements, user research, wireframing, component-based design systems, business impact, and final UI polish.',
              },
              { text: 'Advanced proficiency in Figma, design system tokenization, and prototyping tools. Familiarity with Jira, Confluence, and generative AI design tools.' },
              { text: 'Excellent stakeholder management and communication skills, comfortable presenting design rationale to executive leadership.' },
              { text: 'Deep understanding of white-label theming, multi-brand architectures, and design-to-code handoff processes.' },
            ],
          },
        ],
      },
    ],
  },
];

export function getJob(slug: string) {
  return JOBS.find((job) => job.slug === slug);
}
