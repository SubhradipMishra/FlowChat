// Typed Content Configuration for FlowChat AI Landing Page
// All copy is centralized here for easy maintenance and zero hardcoding.

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroChatStep {
  sender: 'customer' | 'ai' | 'system';
  text: string;
  time: string;
  badge?: {
    type: 'lead' | 'handoff' | 'verified';
    text: string;
  };
}

export interface QuestionChip {
  id: string;
  question: string;
  frequency: string;
  typicalResponse: string;
}

export interface SolutionBenefit {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  category: string;
  details: string[];
}

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  summary: string;
  actionHint: string;
  illustrationType: 'account' | 'workspace' | 'connect' | 'ai-config' | 'monitor';
}

export interface InteractiveFlow {
  id: string;
  title: string;
  customerPrompt: string;
  aiAction: string;
  aiResponse: string;
  escalationTrigger: string;
  humanResolution: string;
  tag: string;
}

export interface UseCaseItem {
  title: string;
  sector: string;
  automationSummary: string;
  impactMetric: string; // PLACEHOLDER
  iconName: string;
}

export interface MetricCard {
  label: string;
  value: string; // PLACEHOLDER
  change: string;
  isPositive: boolean;
  subtext: string;
}

export interface TrustPrinciple {
  title: string;
  description: string;
  complianceNote: string;
  iconName: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number; // PLACEHOLDER
  annualPrice: number; // PLACEHOLDER
  isPopular?: boolean;
  ctaText: string;
  limits: {
    conversations: string; // PLACEHOLDER
    agents: string; // PLACEHOLDER
    workflows: string; // PLACEHOLDER
    phoneNumbers: string; // PLACEHOLDER
  };
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Compliance' | 'Setup' | 'AI & Human' | 'Billing';
}

export const SITE_CONTENT = {
  brand: {
    name: "FlowChat AI",
    tagline: "Automate WhatsApp conversations. Capture more leads.",
    badge: "Official Meta Cloud API Architecture",
    loginUrl: "#login",
    trialUrl: "#signup",
    demoVideoUrl: "#watch-demo",
  },

  nav: {
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Interactive Demo", href: "#demo" },
      { label: "Use Cases", href: "#use-cases" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ] as NavLink[],
    loginText: "Log in",
    ctaText: "Start free trial",
  },

  hero: {
    badge: "Official WhatsApp Business Platform (Cloud API)",
    headline: "Automate WhatsApp conversations. Capture more leads.",
    subheadline: "Automate WhatsApp conversations, capture more leads, respond faster, and manage customer relationships from one dashboard.",
    primaryCta: "Start free trial",
    secondaryCta: "Watch 2-min demo",
    trustNote: "Built on the official WhatsApp Business Platform. Zero scraping or unofficial hacks.",
    metricsHighlight: [
      { value: "< 3s", label: "Average First Response" }, // PLACEHOLDER
      { value: "4.2x", label: "Lead Capture Rate" }, // PLACEHOLDER
      { value: "100%", label: "Official API Compliant" },
    ],
    chatSimulation: [
      {
        sender: 'customer',
        text: "Hi! Do you have slots for website redesign this month? What's your typical pricing?",
        time: "10:14 AM",
      },
      {
        sender: 'ai',
        text: "Hello! Yes, we have 2 client intake slots left for October. Our redesign packages start from $1,200. Would you like our breakdown PDF or to schedule a 15-min discovery call?",
        time: "10:14 AM",
        badge: {
          type: 'verified',
          text: 'AI Assistant • Instant Reply',
        },
      },
      {
        sender: 'customer',
        text: "Discovery call please! Can someone call me today around 3 PM?",
        time: "10:15 AM",
      },
      {
        sender: 'ai',
        text: "Done! I've logged your request for 3:00 PM and reserved your spot. Our lead consultant Priya is reviewing your project details.",
        time: "10:15 AM",
        badge: {
          type: 'lead',
          text: 'Lead Captured • $1,200 Intent',
        },
      },
      {
        sender: 'system',
        text: "Assigned conversation to Priya (Senior Consultant) with full chat history.",
        time: "10:15 AM",
        badge: {
          type: 'handoff',
          text: 'Handoff to Human Agent',
        },
      },
    ] as HeroChatStep[],
  },

  socialProof: {
    label: "Trusted by fast-moving teams across retail, services, healthcare, and education",
    logos: [
      { name: "Acme Retail Co.", industry: "E-Commerce", tag: "D2C Brands" }, // PLACEHOLDER
      { name: "Apex Real Estate", industry: "Property", tag: "Commercial & Resid." }, // PLACEHOLDER
      { name: "NovaCare Clinics", industry: "Healthcare", tag: "Medical Network" }, // PLACEHOLDER
      { name: "Kinetix Academy", industry: "Education", tag: "EdTech & Courses" }, // PLACEHOLDER
      { name: "Veloce Courier", industry: "Logistics", tag: "Fleet Operations" }, // PLACEHOLDER
      { name: "Lumina Hospitality", industry: "Dining", tag: "Multi-location" }, // PLACEHOLDER
    ],
  },

  problem: {
    badge: "The Repetitive Message Bottleneck",
    headline: "Your inbox is full of the same questions.",
    subheadline: "Every hour spent answering routine queries manually delays high-value prospects and drives customers to faster competitors.",
    chips: [
      {
        id: "q1",
        question: "“What are your prices?”",
        frequency: "38% of incoming volume", // PLACEHOLDER
        typicalResponse: "Sends customized pricing tiers and package breakdowns instantly.",
      },
      {
        id: "q2",
        question: "“What products are available?”",
        frequency: "27% of incoming volume", // PLACEHOLDER
        typicalResponse: "Queries live catalog availability without requiring human check.",
      },
      {
        id: "q3",
        question: "“Where are you located?”",
        frequency: "19% of incoming volume", // PLACEHOLDER
        typicalResponse: "Shares branch location map links, parking notes, and working hours.",
      },
      {
        id: "q4",
        question: "“Can I book an appointment?”",
        frequency: "22% of incoming volume", // PLACEHOLDER
        typicalResponse: "Collects preferred slot, verifies schedule, and reserves calendar.",
      },
      {
        id: "q5",
        question: "“What's my order status?”",
        frequency: "31% of incoming volume", // PLACEHOLDER
        typicalResponse: "Validates phone/order ID and returns real-time courier milestone.",
      },
      {
        id: "q6",
        question: "“Can someone call me?”",
        frequency: "15% of incoming volume", // PLACEHOLDER
        typicalResponse: "Captures urgency, contact info, and dispatches lead alert to agent.",
      },
    ] as QuestionChip[],
    consequence: "67% of WhatsApp prospects abandon inquiries if they don't receive an accurate answer within 5 minutes. Manual typing simply doesn't scale at peak hours.",
  },

  solution: {
    badge: "Unified Conversation Platform",
    headline: "One dashboard for every WhatsApp conversation.",
    subheadline: "Centralize customer touchpoints, automate repetitive interactions, and empower your human team to close deals faster.",
    benefits: [
      {
        title: "Respond Faster",
        description: "Engage prospects within 3 seconds 24/7. Address pricing, hours, catalogs, and FAQs with zero latency while leads are hot.",
        metric: "< 3 sec",
        metricLabel: "Average reply speed", // PLACEHOLDER
        iconName: "Zap",
      },
      {
        title: "Capture More Leads",
        description: "Automatically turn casual WhatsApp inquiries into enriched CRM contacts with structured tags, intents, and budget estimates.",
        metric: "+42%",
        metricLabel: "More qualified leads captured", // PLACEHOLDER
        iconName: "Target",
      },
      {
        title: "Keep the Human Touch",
        description: "Detect complex or high-intent moments instantly and route the thread to designated team members with context preserved.",
        metric: "100%",
        metricLabel: "Seamless agent handoff",
        iconName: "Users",
      },
    ] as SolutionBenefit[],
  },

  features: {
    badge: "Engineered for Scale",
    headline: "Everything you need to run WhatsApp at scale.",
    subheadline: "Built specifically for teams requiring reliable no-code automations, strict compliance, and intuitive human collaboration.",
    items: [
      {
        id: "feat-official-api",
        title: "Official WhatsApp Cloud API",
        subtitle: "Zero risk of phone number bans",
        description: "Connect via Meta's authorized Cloud API. Protect your business phone numbers with official verified sender status, end-to-end security, and 99.99% uptime.",
        badge: "Meta Cloud API",
        category: "Infrastructure",
        details: ["Meta Business Manager verification", "Official webhook delivery", "No QR hacks or phone battery drains"],
      },
      {
        id: "feat-ai-assistant",
        title: "AI Trained on Your Business",
        subtitle: "Ground answers in your exact documents",
        description: "Upload PDFs, URLs, price sheets, and operating procedures. FlowChat AI answers customer questions truthfully without hallucinations or made-up claims.",
        badge: "RAG Knowledge Base",
        category: "Intelligence",
        details: ["Contextual guardrails & brand voice", "Custom fallback behaviors", "Multi-language recognition (50+ langs)"],
      },
      {
        id: "feat-visual-workflow",
        title: "Visual No-Code Builder",
        subtitle: "Drag-and-drop conversational paths",
        description: "Design logic branches, conditional prompts, interactive quick-reply buttons, and dynamic variables on a clean visual canvas with zero code.",
        badge: "Node Canvas",
        category: "Automation",
        details: ["Visual condition builder", "Interactive button & list menus", "API webhook integrations"],
      },
      {
        id: "feat-lead-pipeline",
        title: "Lead Capture & CRM Pipeline",
        subtitle: "Convert conversations into structured revenue",
        description: "Extract name, email, budget, service requested, and urgency automatically. Push synced leads directly into HubSpot, Salesforce, or your internal CRM.",
        badge: "Pipeline Sync",
        category: "Growth",
        details: ["Custom lead qualification fields", "Kanban stage tracking", "Zapier & Webhook webhooks"],
      },
      {
        id: "feat-shared-inbox",
        title: "Collaborative Team Inbox",
        subtitle: "One unified hub for your entire support & sales team",
        description: "Assign threads to team members, leave private internal notes, view customer history, and jump into conversations whenever AI escalates.",
        badge: "Team Inbox",
        category: "Operations",
        details: ["Round-robin & skill-based routing", "Private team mentions & notes", "Real-time presence indicators"],
      },
      {
        id: "feat-compliant-followup",
        title: "Permitted Follow-ups & Reminders",
        subtitle: "Stay strictly within WhatsApp's 24-hour service window",
        description: "Respect customer messaging policies. Dispatch approved template reminders for appointments, cart abandonments, or renewals with opt-in controls.",
        badge: "24h Window Aware",
        category: "Compliance",
        details: ["Automated 24h window countdown", "Meta-approved template manager", "One-click customer unsubscribe"],
      },
      {
        id: "feat-analytics",
        title: "Real-Time Conversation Analytics",
        subtitle: "Measure resolution speed, lead velocity, and agent load",
        description: "Track first-response times, AI containment rate, CSAT sentiment, and message consumption with exportable reports and visual charts.",
        badge: "Live Telemetry",
        category: "Intelligence",
        details: ["Containment vs handoff ratios", "Peak traffic heatmaps", "Team response benchmarking"],
      },
      {
        id: "feat-multitenant",
        title: "Multi-Tenant Workspaces & Roles",
        subtitle: "Built for enterprise agencies and multi-brand operators",
        description: "Isolate client data into distinct workspaces. Assign granular role permissions (Admin, Agent, Viewer) and track quota consumption effortlessly.",
        badge: "Multi-Tenant",
        category: "Security",
        details: ["Isolated tenant data boundaries", "Granular RBAC permissions", "Centralized billing per workspace"],
      },
    ] as FeatureItem[],
  },

  howItWorks: {
    badge: "5 Simple Steps",
    headline: "Go live with automated WhatsApp in under 15 minutes.",
    subheadline: "A streamlined setup flow built for non-technical business founders, support managers, and sales leaders.",
    steps: [
      {
        stepNumber: 1,
        title: "Create Account",
        summary: "Sign up in 30 seconds with email or SSO. Start on our risk-free trial with zero payment card required.",
        actionHint: "Quick onboarding wizard",
        illustrationType: "account",
      },
      {
        stepNumber: 2,
        title: "Create Business Workspace",
        summary: "Set up your company workspace, define working hours, assign team members, and configure your brand identity.",
        actionHint: "Workspace isolation & team roles",
        illustrationType: "workspace",
      },
      {
        stepNumber: 3,
        title: "Connect WhatsApp Business Number",
        summary: "Link your eligible business number via the official Meta Cloud API setup with one-click Facebook authorization.",
        actionHint: "Official Cloud API credentialing",
        illustrationType: "connect",
      },
      {
        stepNumber: 4,
        title: "Configure Your AI Assistant",
        summary: "Upload your product catalog, FAQs, pricing guidelines, and escalation triggers in plain business language.",
        actionHint: "Document ingestion & guardrails",
        illustrationType: "ai-config",
      },
      {
        stepNumber: 5,
        title: "Go Live and Monitor",
        summary: "Turn on live replies. Watch automated chats qualify prospects, handle inquiries, and hand off VIP deals to agents.",
        actionHint: "Real-time live dashboard",
        illustrationType: "monitor",
      },
    ] as HowItWorksStep[],
  },

  interactiveDemo: {
    badge: "Live Workflow Simulator",
    headline: "See how FlowChat AI handles real scenarios.",
    subheadline: "Test our automated logic and observe how FlowChat AI answers questions accurately while escalating complex requests to humans.",
    scenarios: [
      {
        id: "pricing",
        title: "Pricing Questions",
        tag: "High Conversion",
        customerPrompt: "Hi, how much do you charge for your standard consulting package?",
        aiAction: "Matches intent 'pricing_inquiry' -> Pulls pricing matrix from verified docs -> Formats structured tier options with call-to-action button.",
        aiResponse: "Our Standard Consulting package is $850/mo and includes 4 strategic review sessions plus unlimited email support. Would you like to review our full feature comparison or book a free discovery call?",
        escalationTrigger: "Customer asks for custom enterprise quote or bespoke discount contract.",
        humanResolution: "System tags thread as 'High Value Lead' and assigns to Account Executive with budget note.",
      },
      {
        id: "booking",
        title: "Appointment Booking",
        tag: "Calendar Sync",
        customerPrompt: "Can I book a consultation with Dr. Miller this Thursday afternoon?",
        aiAction: "Queries real-time calendar availability -> Identifies open 45-min slots -> Presents interactive slot buttons.",
        aiResponse: "Dr. Miller has two slots open this Thursday, Oct 16: 2:30 PM and 4:15 PM. Which time works better for your consultation?",
        escalationTrigger: "Customer mentions medical emergency or requests special accommodation.",
        humanResolution: "AI stops automated replies immediately, marks thread as 'Priority Clinical', and sends sound alert to clinic front desk.",
      },
      {
        id: "order",
        title: "Order Status",
        tag: "E-Commerce",
        customerPrompt: "Where is my order #FC-94812? It was supposed to arrive yesterday.",
        aiAction: "Extracts order ID regex -> Authenticates customer phone match -> Fetches live shipping tracking endpoint.",
        aiResponse: "Order #FC-94812 is currently out for delivery via FedEx (Tracking #9401...88) and estimated to arrive today by 4:00 PM.",
        escalationTrigger: "Customer reports missing/damaged package or disputes delivery receipt.",
        humanResolution: "Dispatches refund/replacement ticket to Support Desk with tracking log attached.",
      },
      {
        id: "callback",
        title: "Request a Call",
        tag: "Lead Dispatch",
        customerPrompt: "I want to speak with a human right now regarding commercial licensing.",
        aiAction: "Detects human handoff intent -> Gathers phone number confirmation and project urgency level.",
        aiResponse: "I understand! I'm notifying our enterprise solutions team right away. What is the best direct number and time to reach you?",
        escalationTrigger: "Explicit human request triggers automatic bot suspension on the thread.",
        humanResolution: "Hands off directly to Senior Agent 'Alex M.' with instant desktop & mobile push notification.",
      },
    ] as InteractiveFlow[],
  },

  handoff: {
    badge: "Human + AI Synergy",
    headline: "Never let a robotic bot ruin a high-stakes relationship.",
    subheadline: "Automate 80% of routine conversations, and seamlessly escalate the 20% that require emotional nuance, negotiation, or specialized judgment.",
    features: [
      {
        title: "Zero Context Loss",
        desc: "Agents see the entire conversation history, customer metadata, and AI extracted tags the second they step in.",
      },
      {
        title: "Private Internal Notes",
        desc: "Leave team notes invisible to the customer right inside the chat window for co-workers or managers.",
      },
      {
        title: "Instant Desktop & Mobile Alerts",
        desc: "Get notified when high-value leads or urgent tickets escalate so your team responds within seconds.",
      },
      {
        title: "Smart Return to AI",
        desc: "Finished helping the customer? Hand the conversation back to AI automation with a single click.",
      },
    ],
  },

  useCases: {
    badge: "Industry Solutions",
    headline: "Tailored for businesses that rely on WhatsApp to close deals.",
    subheadline: "Discover how industry leaders use FlowChat AI to eliminate missed inquiries and drive revenue around the clock.",
    items: [
      {
        title: "Retail & E-Commerce (D2C)",
        sector: "Commerce",
        automationSummary: "Automate stock checks, sizing guidance, order tracking milestones, and abandoned checkout reminders.",
        impactMetric: "+38% Repeat Order Rate", // PLACEHOLDER
        iconName: "ShoppingBag",
      },
      {
        title: "Clinics & Wellness Salons",
        sector: "Healthcare & Beauty",
        automationSummary: "Schedule appointments, send pre-treatment preparation checklists, and answer treatment pricing instantly.",
        impactMetric: "85% Less Phone Time", // PLACEHOLDER
        iconName: "Stethoscope",
      },
      {
        title: "Real Estate & Developers",
        sector: "Property",
        automationSummary: "Qualify buyer budgets, send brochure PDFs, schedule property site visits, and assign agents by territory.",
        impactMetric: "3.4x Faster Site Bookings", // PLACEHOLDER
        iconName: "Building2",
      },
      {
        title: "Education & Academies",
        sector: "EdTech & Coaching",
        automationSummary: "Answer course syllabus inquiries, guide admission registrations, and dispatch seminar reminders.",
        impactMetric: "+55% Enrollment Inquiries", // PLACEHOLDER
        iconName: "GraduationCap",
      },
      {
        title: "Restaurants & Hospitality",
        sector: "Dining",
        automationSummary: "Handle table reservations, share digital dietary menus, and confirm party guest counts automatically.",
        impactMetric: "Zero Missed Dinner Bookings", // PLACEHOLDER
        iconName: "Utensils",
      },
      {
        title: "Logistics & Field Services",
        sector: "Field Operations",
        automationSummary: "Provide live package delivery tracking, dispatch quote estimates, and verify address details.",
        impactMetric: "92% First-Contact Resolution", // PLACEHOLDER
        iconName: "Truck",
      },
    ] as UseCaseItem[],
  },

  analytics: {
    badge: "Performance & Visibility",
    headline: "Real numbers, measurable impact.",
    subheadline: "Get complete operational clarity into your WhatsApp customer interactions and automation ROI.",
    metrics: [
      {
        label: "Avg First Response Time",
        value: "2.8s", // PLACEHOLDER
        change: "-94%",
        isPositive: true,
        subtext: "vs 45 min manual baseline",
      },
      {
        label: "AI Containment Rate",
        value: "78.4%", // PLACEHOLDER
        change: "+14%",
        isPositive: true,
        subtext: "Resolved without human intervention",
      },
      {
        label: "Leads Qualified / Mo",
        value: "2,460", // PLACEHOLDER
        change: "+52%",
        isPositive: true,
        subtext: "Synced directly to CRM pipeline",
      },
      {
        label: "Customer Satisfaction",
        value: "4.92 / 5", // PLACEHOLDER
        change: "+18%",
        isPositive: true,
        subtext: "Based on post-chat satisfaction ratings",
      },
    ] as MetricCard[],
    note: "Sample analytics preview reflecting average performance metrics from active FlowChat AI workspaces.",
  },

  trust: {
    badge: "Trust, Security & Compliance",
    headline: "Built strictly on official WhatsApp infrastructure.",
    subheadline: "We follow WhatsApp's policies to the letter. No risky browser extensions, no session scraping, and no number bans.",
    principles: [
      {
        title: "Official WhatsApp Cloud API",
        description: "Direct connection with Meta's verified API servers. Your phone numbers remain secure, stable, and protected from ban risks.",
        complianceNote: "Authorized Cloud API architecture",
        iconName: "ShieldCheck",
      },
      {
        title: "24-Hour Service Window Compliance",
        description: "FlowChat AI strictly observes WhatsApp's 24-hour customer service window, switching to approved templates for outbound updates.",
        complianceNote: "Meta messaging policy adherence",
        iconName: "Clock",
      },
      {
        title: "Multi-Tenant Data Isolation",
        description: "Each business workspace operates in an isolated data container. Customer messages and business knowledge are never commingled.",
        complianceNote: "Strict tenant isolation boundaries",
        iconName: "Lock",
      },
      {
        title: "Enterprise Grade Encryption",
        description: "Data in transit is protected using TLS 1.3 encryption, and knowledge bases at rest are encrypted using AES-256 standards.",
        complianceNote: "End-to-end transport encryption",
        iconName: "KeyRound",
      },
      {
        title: "Opt-In & Template Verification",
        description: "Outbound messaging workflows require explicit customer opt-in and use pre-approved Meta message templates.",
        complianceNote: "Spam prevention & opt-in validation",
        iconName: "FileCheck",
      },
      {
        title: "Unconditional Human Override",
        description: "Business managers and human agents retain complete control. Pause AI automation on any conversation with a single click.",
        complianceNote: "Full operator sovereignty",
        iconName: "UserCheck",
      },
    ] as TrustPrinciple[],
    disclaimer: "FlowChat AI enforces official WhatsApp Business Platform terms. Unofficial WhatsApp Web scrapers and bulk unsolicited spam tools violate WhatsApp terms and are strictly unsupported.",
  },

  pricing: {
    badge: "Transparent Pricing",
    headline: "Simple plans that scale with your business.",
    subheadline: "Start your 14-day free trial today. Cancel anytime with zero long-term commitments.",
    metaFeeNote: "Note: WhatsApp conversation fees are charged directly by Meta or your authorized BSP according to regional rates.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        description: "Perfect for single-location businesses automating routine FAQs and lead capture.",
        monthlyPrice: 49, // PLACEHOLDER
        annualPrice: 39, // PLACEHOLDER
        ctaText: "Start 14-day free trial",
        limits: {
          conversations: "1,000 active chats/mo", // PLACEHOLDER
          agents: "2 agent seats", // PLACEHOLDER
          workflows: "3 visual workflows", // PLACEHOLDER
          phoneNumbers: "1 WhatsApp Business number", // PLACEHOLDER
        },
        features: [
          "Official WhatsApp Cloud API integration",
          "AI assistant trained on basic business docs",
          "Basic lead capture & CSV export",
          "Shared inbox for 2 team members",
          "24-hour service window compliance manager",
          "Email & ticket support",
        ],
      },
      {
        id: "growth",
        name: "Growth",
        description: "For growing companies needing advanced workflows, CRM sync, and multi-agent teams.",
        monthlyPrice: 129, // PLACEHOLDER
        annualPrice: 99, // PLACEHOLDER
        isPopular: true,
        ctaText: "Start 14-day free trial",
        limits: {
          conversations: "5,000 active chats/mo", // PLACEHOLDER
          agents: "8 agent seats", // PLACEHOLDER
          workflows: "Unlimited workflows", // PLACEHOLDER
          phoneNumbers: "2 WhatsApp Business numbers", // PLACEHOLDER
        },
        features: [
          "Everything in Starter, plus:",
          "Unlimited visual node workflows",
          "Custom AI knowledge base (PDFs, URLs, Docs)",
          "Native CRM integrations (HubSpot, Zapier)",
          "Round-robin & skill-based agent routing",
          "Permitted follow-up & appointment reminders",
          "Real-time analytics & agent reporting",
          "Priority live chat support",
        ],
      },
      {
        id: "scale",
        name: "Scale / Enterprise",
        description: "For high-volume operations, multi-brand organizations, and custom compliance needs.",
        monthlyPrice: 299, // PLACEHOLDER
        annualPrice: 249, // PLACEHOLDER
        ctaText: "Contact sales team",
        limits: {
          conversations: "25,000+ active chats/mo", // PLACEHOLDER
          agents: "Unlimited agent seats", // PLACEHOLDER
          workflows: "Unlimited enterprise workflows", // PLACEHOLDER
          phoneNumbers: "Dedicated numbers & multi-brands", // PLACEHOLDER
        },
        features: [
          "Everything in Growth, plus:",
          "Multi-tenant workspaces for sub-brands",
          "Custom API webhooks & bi-directional sync",
          "Advanced role-based access control (RBAC)",
          "Custom AI prompt engineering & fine-tuning",
          "Dedicated customer success manager",
          "99.9% uptime SLA guarantee",
          "Custom contract & invoice billing",
        ],
      },
    ] as PricingTier[],
    comparisonMatrix: [
      { feature: "Official WhatsApp Cloud API Connection", starter: true, growth: true, scale: true },
      { feature: "AI Knowledge Base Ingestion", starter: "Up to 5 docs", growth: "Unlimited docs", scale: "Custom pipelines" },
      { feature: "No-Code Workflow Builder", starter: "3 flows", growth: "Unlimited", scale: "Unlimited + branching" },
      { feature: "Agent Seats Included", starter: "2 seats", growth: "8 seats", scale: "Custom unlimited" },
      { feature: "Human Handoff & Internal Notes", starter: true, growth: true, scale: true },
      { feature: "24-Hour Rule & Template Follow-ups", starter: true, growth: true, scale: true },
      { feature: "Native CRM & Webhook Integrations", starter: false, growth: true, scale: true },
      { feature: "Multi-tenant Brand Workspaces", starter: false, growth: false, scale: true },
      { feature: "Dedicated Support & Onboarding", starter: "Standard", growth: "Priority", scale: "Dedicated Manager" },
    ],
  },

  faq: {
    badge: "Common Inquiries",
    headline: "Frequently asked questions.",
    subheadline: "Clear answers on WhatsApp compliance, official integration, setup, and platform capabilities.",
    items: [
      {
        category: "Compliance",
        question: "Is FlowChat AI an official WhatsApp integration?",
        answer: "Yes, absolutely. FlowChat AI connects exclusively through the official WhatsApp Business Platform (Cloud API) provided by Meta or authorized Business Solution Providers. We do not use unofficial web scrapers, browser extensions, or emulator tricks, ensuring your phone number is 100% safe from account bans.",
      },
      {
        category: "Setup",
        question: "Which phone numbers are eligible to connect?",
        answer: "Any mobile or landline number capable of receiving an SMS or voice OTP for verification can be registered with the WhatsApp Business Platform. The number must not be currently active on the consumer WhatsApp or WhatsApp Business mobile app at the exact moment of connection. If you have an active app number, we guide you through standard migration.",
      },
      {
        category: "Setup",
        question: "Can I use my existing WhatsApp Business app number?",
        answer: "Yes! You can migrate an existing WhatsApp Business app number to the official Cloud API. You simply delete the consumer account profile in your mobile app settings (after exporting backups if needed) and register the clean number with FlowChat AI during onboarding.",
      },
      {
        category: "AI & Human",
        question: "Will the AI answer everything automatically, or can it make mistakes?",
        answer: "FlowChat AI is grounded strictly in the documents, price sheets, and operating instructions you provide. It includes confidence guardrails: if a customer inquiry falls outside its verified knowledge base, the assistant gracefully admits it doesn't know and seamlessly transfers the conversation to a human agent.",
      },
      {
        category: "AI & Human",
        question: "How does human agent handoff work in real time?",
        answer: "When a customer requests a human, or when the AI detects a complex or sensitive query, the thread is routed immediately to your shared team inbox. Agents receive desktop and mobile notifications, can view the entire conversation history, add internal private notes, and reply directly.",
      },
      {
        category: "Compliance",
        question: "How do follow-ups work with WhatsApp's 24-hour service window?",
        answer: "Under WhatsApp's official policies, you can exchange freeform automated messages with customers within 24 hours of their last incoming message. Outside this 24-hour customer service window, FlowChat AI enables permitted follow-ups using pre-approved Meta message templates (e.g. appointment reminders, delivery updates), ensuring strict policy compliance.",
      },
      {
        category: "Compliance",
        question: "Is our business and customer data separated from other organizations?",
        answer: "Yes. FlowChat AI is architected with strict multi-tenant data boundaries. Your documents, conversation transcripts, lead records, and AI knowledge vectors are isolated to your workspace and never shared, exposed, or used to train public language models.",
      },
      {
        category: "Billing",
        question: "What happens if our conversation volume exceeds our monthly plan limits?",
        answer: "We never interrupt active customer conversations abruptly. If you approach your monthly limit, you'll receive notification alerts in your dashboard. You can easily upgrade your plan or enable affordable overage flex packs with one click from your billing settings.",
      },
    ] as FaqItem[],
  },

  ctaBanner: {
    headline: "Stop losing leads to slow replies.",
    subheadline: "Join forward-thinking businesses automating WhatsApp conversations with official Meta Cloud API reliability.",
    formPlaceholder: "Enter your work email...",
    buttonText: "Start 14-day free trial",
    perks: [
      "No credit card required",
      "Setup in under 10 minutes",
      "Official Meta Cloud API",
      "Cancel anytime",
    ],
  },

  footer: {
    description: "FlowChat AI is the leading no-code WhatsApp conversation automation and lead management platform for modern businesses. Built on the official WhatsApp Business Platform.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Interactive Demo", href: "#demo" },
          { label: "Workflow Builder", href: "#features" },
          { label: "Shared Inbox", href: "#features" },
          { label: "Pricing", href: "#pricing" },
        ],
      },
      {
        title: "Solutions",
        links: [
          { label: "Retail & D2C", href: "#use-cases" },
          { label: "Clinics & Wellness", href: "#use-cases" },
          { label: "Real Estate", href: "#use-cases" },
          { label: "Education & Coaching", href: "#use-cases" },
          { label: "Field Services", href: "#use-cases" },
        ],
      },
      {
        title: "Resources & Trust",
        links: [
          { label: "WhatsApp Compliance", href: "#faq" },
          { label: "Cloud API Guide", href: "#faq" },
          { label: "API Documentation", href: "#" },
          { label: "Status Page", href: "#" },
          { label: "Help Center", href: "#" },
        ],
      },
      {
        title: "Legal & Privacy",
        links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Data Processing Addendum", href: "#" },
          { label: "Cookie Settings", href: "#" },
        ],
      },
    ],
    disclaimer: "Disclaimer: FlowChat AI is an independent software application and is not affiliated with, endorsed by, or sponsored by WhatsApp LLC, Meta Platforms, Inc., or any of their subsidiaries. WhatsApp is a registered trademark of Meta Platforms, Inc.",
    copyright: "© 2026 FlowChat AI, Inc. All rights reserved.",
  },
};
